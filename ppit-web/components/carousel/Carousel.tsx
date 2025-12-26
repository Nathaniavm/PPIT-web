import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarouselDemo() {
  return (
    <UiCarousel className="w-full max-w-10xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full flex items-center justify-center gap-2 p-1">
              <Card>
               <CardContent className="flex h-70 w-60 items-center justify-center p-8">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex h-80 w-70 items-center justify-center p-8">
                  <span className="text-4xl font-semibold">{index + 2}</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex h-70 w-60 items-center justify-center p-8">
                  <span className="text-4xl font-semibold">{index + 3}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full shadow hover:bg-white/40 z-50">
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </CarouselPrevious>

      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full shadow hover:bg-white/40 z-50">
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </CarouselNext>

    </UiCarousel>
  )
}
