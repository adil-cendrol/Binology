import { Coffee, Leaf, Award } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Roasting",
      description: "Artisan roasted to perfection for optimal flavor extraction"
    },
    {
      icon: Leaf,
      title: "Ethical Sourcing", 
      description: "Direct trade relationships with sustainable coffee farms"
    },
    {
      icon: Award,
      title: "Exceptional Learning",
      description: "Expert knowledge and brewing techniques shared with passion"
    }
  ]

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
          OUR UNIQUE BREW
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover the art of exceptional coffee through our commitment to quality, 
          sustainability, and craftsmanship.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="w-20 h-20 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-golden transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-coffee-dark" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features