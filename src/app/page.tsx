import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Statistics } from "@/components/sections/statistics"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { Newsletter } from "@/components/common/newsletter"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <TestimonialsCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Newsletter />
        </div>
    </>
  )
}
