"use client";

import { Product } from "@prisma/client";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { RatingSelector } from "./RatingSelector";
import { motion, AnimatePresence } from "framer-motion";
import { SocialSelector } from "./SocialSelector";
import { ReviewTextSelector } from "./ReviewTextSelector";
import { useLocalStorage } from "react-use";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviewAction, updateReviewAction } from "./reviews.action";
import { ReviewType } from "./review.schema";
import { toast } from "sonner";

export const ReviewStep = ({ product }: { product: Product }) => {
  const [reviewId, setReviewId, removeReviewId] = useLocalStorage(
    `review-id-${product.id}`,
    null
  );

  const queryClient = useQueryClient()
  const reviewData = useQuery({
    queryKey: ["review", reviewId, "product", product.id],
    enabled: Boolean(reviewId),
    queryFn: async () =>
      getReviewAction({
        id: reviewId ?? "",
        productId: product.id,
      }),
  });

  const mutateReview = useMutation({
    mutationFn: async (data: Partial<ReviewType>) => {
      const { data:actionData, serverError } = await updateReviewAction({
        ...data,
        productId: product.id,
        id: reviewId ?? undefined,
      });
      if (!actionData || serverError) {
        toast.error("Failed to update review");
        return;
      }
      await queryClient.invalidateQueries({
        queryKey: ["review", reviewId, "product", product.id]
      })
    },
  });

  const [step, setStep] = useState(0);


  const updateData = (partial: Partial<ReviewType>) => {
    mutateReview.mutate(partial)
  };

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="step-0"
          exit={{
            opacity: 0,
            x: -100,
          }}
        >
          <Card className="p-8 flex flex-col items-center gap-8 m-4">
            <CardTitle>
              {product.noteText ?? `How much did you like ${product.name}?`}
            </CardTitle>
            <CardContent>
              <RatingSelector
                onSelect={(review) => {
                  setStep(1);
                  updateData({ rating: review });
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          key="step-1"
          exit={{
            opacity: 0,
            x: -100,
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <Card className="p-8 flex flex-col items-center gap-8 m-4">
            <CardTitle>
              {product.informationText ?? `I need more information about you.`}
            </CardTitle>
            <CardContent>
              <SocialSelector
                onSelect={(name, url) => {
                  setStep(2);
                  updateData({ name, socialLink: url });
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step-2"
          exit={{
            opacity: 0,
            x: -100,
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <Card className="p-8 flex flex-col items-center gap-8 m-4">
            <CardTitle>
              {product.informationText ??
                `Tell me what you liked and what you disliked?`}
            </CardTitle>
            <CardContent>
              <ReviewTextSelector />
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
