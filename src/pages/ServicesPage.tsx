import { motion } from "framer-motion";
import { Droplets, Shield, Sparkles, Car, Armchair, Grid3X3, CircleDot, Sun } from "lucide-react";
import ppfImg from "@/assets/ppf-install.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import exteriorImg from "@/assets/exterior-polish.jpg";
import foamImg from "@/assets/foam-wash.jpg";
import seatImg from "@/assets/seat-covers.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio4 from "@/assets/studio-4.jpg";

const services = [
  { icon: Droplets, title: "Car Wash", desc: "Premium foam wash and deep cleaning using safe, pH-balanced products.", img: foamImg },
  { icon: Sparkles, title: "Interior Spa", desc: "Complete interior deep cleaning, sanitization, and leather conditioning.", img: interiorImg },
  { icon: Shield, title: "Ceramic Coating", desc: "9H hardness ceramic coating for ultimate gloss and protection.", img: ceramicImg },
  { icon: Shield, title: "Paint Protection Film", desc: "Self-healing PPF that guards against scratches, chips, and stains.", img: ppfImg },
  { icon: Armchair, title: "Custom Seat Covers", desc: "Premium leather and fabric seat covers tailored to your vehicle.", img: seatImg },
  { icon: Grid3X3, title: "Car Floor Matting", desc: "Custom-fit floor mats for complete interior protection.", img: studio1 },
  { icon: CircleDot, title: "Mud Flaps Installation", desc: "Professional mud flap fitting to protect your car body.", img: studio4 },
  { icon: Sun, title: "Legal Black Tinting", desc: "High-quality window tinting within legal limits for UV protection.", img: exteriorImg },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            What We Offer
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-16">
            Our <span className="text-gradient">Services</span>
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[3/4] bg-secondary overflow-hidden cursor-pointer"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* Orange border top on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <s.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
