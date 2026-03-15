import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollSection from "@/components/ScrollSection";
import heroCar from "@/assets/hero-car.jpg";
import ppfImg from "@/assets/ppf-install.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import exteriorImg from "@/assets/exterior-polish.jpg";
import foamImg from "@/assets/foam-wash.jpg";
import seatImg from "@/assets/seat-covers.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const sections = [
  { title: "Paint Protection Film", description: "Protect your car paint from scratches, stones, and environmental damage with high quality Paint Protection Film.", image: ppfImg },
  { title: "Ceramic Coating", description: "Advanced ceramic coating that creates a glossy finish and long-lasting protection against dust and water.", image: ceramicImg },
  { title: "Interior Detailing", description: "Deep cleaning and interior spa treatment that restores your vehicle's comfort and freshness.", image: interiorImg },
  { title: "Exterior Detailing", description: "Professional polishing and detailing that restores the showroom shine of your vehicle.", image: exteriorImg },
  { title: "Premium Car Wash", description: "Premium foam wash and deep cleaning using safe products.", image: foamImg },
  { title: "Seat Covers & Customization", description: "Custom seat covers and interior upgrades designed for comfort and style.", image: seatImg },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <img src={heroCar} alt="SK Carz Detailing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative z-10 text-center section-container">
          <motion.h1
            {...fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-none"
          >
            Premium Car<br />
            <span className="text-gradient">Detailing Experience</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Professional Car Detailing and Interior Customization in Hyderabad
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/booking" className="btn-primary shimmer">Book Appointment</Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 glass-surface border-t border-border"
        >
          <div className="section-container py-6 grid grid-cols-3 gap-4 text-center">
            {[
              { val: "9H", label: "Hardness Rating" },
              { val: "10yr", label: "Warranty" },
              { val: "0%", label: "Swirl Marks" },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-mono text-2xl md:text-3xl text-primary font-bold">{s.val}</span>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Scroll Story Sections */}
      {sections.map((s, i) => (
        <ScrollSection key={i} {...s} index={i} />
      ))}

      {/* CTA */}
      <section className="section-spacing">
        <div className="section-container text-center">
          <motion.h2 {...fadeInUp} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform <span className="text-gradient">Your Vehicle?</span>
          </motion.h2>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
            <Link to="/booking" className="btn-primary shimmer">Book Your Appointment</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
