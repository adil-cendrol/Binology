import { Button } from "@/components/ui/button"
import beansBg from "@/assets/Group 8.png"   // beans background
import bookImg from "@/assets/Group 2.png"    // dummy book

const Newsletter = () => {
  return (
    <section className="relative bg-white overflow-hidden py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-coffee-dark mb-4 leading-snug">
              GET A FREE BREW GUIDE PDF <br />
              <span className="text-golden">+ 10% OFF</span> YOUR FIRST BAG
            </h2>

            <Button className="bg-golden text-white hover:bg-coffee-dark px-6 py-3 rounded-full font-medium">
              Join the BrewLetter
            </Button>
          </div>

          {/* Right Image (Bag + Book) */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Book */}
              <img
                src={bookImg}
                alt="Coffee Book"
                className="absolute right-0 top-0 w-40 md:w-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Beans Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <img
          src={beansBg}
          alt="Coffee Beans Background"
          className="w-full object-cover"
        />
      </div>

      {/* Bottom Text + CTA */}
      <div className="relative z-10 text-center mt-16">
        <h3 className="text-2xl font-bold text-coffee-dark mb-2">
          TASTE, LEARN, MASTER
        </h3>
        <p className="text-muted-foreground mb-6">
          Elevate Your Coffee Skills Live in Dubai
        </p>
        <Button className="bg-golden text-white hover:bg-coffee-dark px-8 py-3 rounded-full font-semibold">
          Reserve My Seat
        </Button>
      </div>
    </section>
  )
}

export default Newsletter
