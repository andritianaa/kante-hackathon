"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GRADIENTS_CLASSES,
  ProductSchema,
  ProductType,
} from "./product.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  useZodForm,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createProductAction, updateProductAction } from "./product.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { uploadImageAction } from "@/features/upload/upload.action";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export type ProductFormProps = {
  defaultValues?: ProductType;
  productId?: string;
};

export const ProductForm = (props: ProductFormProps) => {
  const form = useZodForm({
    schema: ProductSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: ProductType) => {
      const { data, serverError } = isCreate
        ? await createProductAction(values)
        : await updateProductAction({
            id: props.productId ?? "-",
            data: values,
          });

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }
      toast.success("Product updated!");
      router.push(`/products/${data.id}`);
    },
  });

  const submitImage = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.set("file", file);
      const { data, serverError } = await uploadImageAction(formData);
      if (serverError || !data) {
        toast.error(serverError);
        return;
      }

      const url = data.url;
      form.setValue("image", url);
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create product"
            : `Edit product: ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          className="flex flex-col gap-4"
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Name</FormLabel>
                <FormControl>
                  <Input placeholder="iPhone 15" {...field} />
                </FormControl>
                <FormDescription>The name of the product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Slug</FormLabel>
                <FormControl>
                  <Input
                    placeholder="iphone-15"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value
                        .replaceAll(" ", "-")
                        .toLowerCase();

                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The slug is used in the URL of the review page.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="backgroundColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Background color</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue></SelectValue>
                    </SelectTrigger>
                    <SelectContent className="flex flex-col gap-1">
                      {GRADIENTS_CLASSES.map((gradient) => (
                        <SelectItem
                          value={gradient}
                          key={gradient}
                          className={cn(
                            gradient,
                            "block w-86 h-8 rounded-md flex-1 mb-2 cursor-pointer"
                          )}
                        ></SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>The product background color</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-4">Image</FormLabel>
                <div className="flex items-center gap-2">
                  <FormControl className="flex-1">
                    <Input
                      type="file"
                      placeholder="Your product image"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        if (file.size > 1024 * 1024) {
                          toast.error("Image too big");
                          return;
                        }

                        //if file is not png or jpg or jpeg
                        if (!file.type.includes("image")) {
                          toast.error("File is not an image");
                          return;
                        }
                        submitImage.mutate(file)
                      }}
                    />
                  </FormControl>
                  {field.value ? (
                    <Avatar>
                      <AvatarImage src={field.value!} />
                    </Avatar>
                  ) : null}
                </div>
                <FormDescription>Image of the product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button> {isCreate ? "Create product" : `Edit product`}</Button>
        </Form>
      </CardContent>
    </Card>
  );
};
