/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0z2hgRWZ8gm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ChocolateCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            alt="Chocolate Card"
            className="w-full h-[300px] object-cover"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold">Chocolate Card</h2>
            <p className="text-lg">A delicious piece of chocolate in the form of a greeting card</p>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <div className="flex justify-between items-baseline">
            <div className="font-bold text-lg">Price</div>
            <div className="text-2xl font-bold">$5.99</div>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="font-bold text-lg">Stock</div>
            <div className="text-lg">123 available</div>
          </div>
          <Button className="w-full">Add to Cart</Button>
        </div>
      </Card>
    </div>
  )
}