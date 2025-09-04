import { Star } from "lucide-react"
import testimonial1 from "@/assets/testimonial-1.jpg"
import testimonial2 from "@/assets/testimonial-2.jpg"
import testimonial3 from "@/assets/testimonial-3.jpg"
import testimonial4 from "@/assets/testimonial-4.jpg"

const Testimonials = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(60, 15%, 35%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Rating Section */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <span className="text-6xl md:text-7xl font-bold text-cream mr-2">4.9</span>
              <Star className="w-8 h-8 fill-golden text-golden" />
            </div>
            <p className="text-cream/80 text-lg">
              from 2,140
            </p>
            <p className="text-cream/80 text-lg">
              UAE coffee lovers
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large photo - friends enjoying coffee */}
            <div className="col-span-2 lg:col-span-2 row-span-2">
              <div className="h-80 lg:h-64 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial1} 
                  alt="Friends enjoying coffee together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top right - coffee shop counter */}
            <div className="hidden lg:block">
              <div className="h-32 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial3} 
                  alt="Coffee shop atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom right - hands with coffee */}
            <div className="hidden lg:block">
              <div className="h-28 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial4} 
                  alt="Enjoying warm coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom left - latte art */}
            <div className="col-span-2 lg:col-span-1">
              <div className="h-32 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial2} 
                  alt="Beautiful latte art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile-only additional photos */}
            <div className="lg:hidden">
              <div className="h-32 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={testimonial3} 
                  alt="Coffee shop atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials