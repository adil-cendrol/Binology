import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import heroImage from "@/assets/hero-coffee.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
            Experience
            <span className="block text-golden">Coffee</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-4 font-light">
            Engineered for Flavor & Ethics
          </p>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed">
            Small-lot beans, precision-roasted to unlock every origin's sweet spot.
          </p>
          
          <Button 
            size="lg" 
            className="bg-golden hover:bg-golden/90 text-coffee-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Shop Beans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero