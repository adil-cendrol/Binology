import { Coffee, Droplets, Heart } from "lucide-react"

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: Coffee,
      title: "SELECT",
      description: "Choose your perfect blend from our curated collection"
    },
    {
      step: "02", 
      icon: Droplets,
      title: "BREW",
      description: "Follow our expert brewing guide for optimal extraction"
    },
    {
      step: "03",
      icon: Heart,
      title: "SAVOR",
      description: "Enjoy the rich, complex flavors in every sip"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            SIP IN 3 STEPS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your daily ritual with our simple three-step process 
            to coffee perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-golden to-golden/80 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <step.icon className="w-12 h-12 text-coffee-dark" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-coffee-dark text-cream rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting Lines */}
        <div className="hidden md:block relative mt-12">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-coffee-light via-golden to-coffee-light"></div>
        </div>
      </div>
    </section>
  )
}

export default Process