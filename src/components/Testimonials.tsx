import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "The best coffee I've ever tasted! The Ethiopian blend is absolutely divine.",
      location: "San Francisco, CA"
    },
    {
      name: "David Chen", 
      rating: 5,
      text: "Exceptional quality and fast delivery. My morning routine is now perfect.",
      location: "Portland, OR"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "Love the ethical sourcing. Great taste with a clear conscience!",
      location: "Austin, TX"
    }
  ]

  return (
    <section className="py-20 bg-coffee-dark text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-golden text-golden" />
              ))}
            </div>
            <span className="text-4xl font-bold ml-4">4.9</span>
          </div>
          <p className="text-xl text-cream/80">
            Over 10,000 Coffee Lovers Trust Us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-coffee-medium/50 border-coffee-light/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>
                <p className="text-cream/90 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-cream">{testimonial.name}</p>
                  <p className="text-sm text-cream/60">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-cream/60">
            Join thousands of satisfied customers who start their day right
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials