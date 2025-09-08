// import Image from "next/image"
// import { FlaskConical, Leaf, BookOpen } from "lucide-react"
import FlaskConical from '@/assets/Frame-2.png'
import bean1 from "@/assets/Frame-1.png"

import Leaf from '@/assets/Group 6.png'
import BookOpen from '@/assets/Frame-3.png'
const Features = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Flavor Science"
    },
    {
      icon: Leaf,
      title: "Ethical Roots"
    },
    {
      icon: BookOpen,
      title: "Immersive Learning"
    }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden  z-[10]">
      {/* Right floating beans with animation */}
      <div className="absolute right-0 top-0 h-full flex items-center">
        <img
          src={bean1} // replace with your uploaded beans image
          alt="Coffee Beans"
          width={200}
          height={600}
          className="object-contain animate-float"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
          OUR UNIQUE BREW
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
          Blending science, ethics, and stories into every cup.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x divide-gray-300">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center px-6">
              <div className="w-20 h-20   flex items-center justify-center mb-6">
                {/* <feature.icon className="w-10 h-10 text-coffee-dark" /> */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-coffee-dark">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation CSS */}
      {/* <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  )
}

export default Features
