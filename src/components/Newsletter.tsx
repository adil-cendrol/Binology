import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Mail } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Welcome to Beanology!",
        description: "Check your email for your free brew guide and discount code.",
      })
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-coffee-dark" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            GET A FREE BREW GUIDE PDF
          </h2>
          <p className="text-2xl font-semibold text-golden mb-8">
            + 10% OFF YOUR FIRST BAG
          </p>
          
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Master the art of brewing with our comprehensive guide and save on your first order. 
            Join our community of coffee enthusiasts today!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-12 bg-background border-coffee-light"
                required
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="bg-coffee-dark hover:bg-coffee-medium text-cream px-8 h-12"
            >
              Get My Guide
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            No spam, just great coffee content. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter