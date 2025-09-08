import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
// import heroImage from "@/assets/HeroImage.png"
import heroVideo from '@/assets/smoke_video.mp4'
import { motion, Variants, easeOut } from "framer-motion"


const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    },
  }


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* gradient overlay to darken video if you like */}
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight"
            variants={fadeUp}
          >
            Experience
            <motion.span className="block text-golden" variants={fadeUp}>
              Coffee
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-cream/90 mb-4 font-light"
            variants={fadeUp}
          >
            Engineered for Flavor & Ethics
          </motion.p>

          <motion.p
            className="text-lg text-cream/80 mb-8 leading-relaxed"
            variants={fadeUp}
          >
            Small-lot beans, precision-roasted to unlock every origin's sweet spot.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-coffee-dark font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Shop Beans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
