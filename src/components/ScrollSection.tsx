import { motion } from "framer-motion";

interface ScrollSectionProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const ScrollSection = ({ title, description, image, index }: ScrollSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className={`max-w-xl ${isEven ? "" : "ml-auto"}`}>
          <motion.span
            {...fadeInUp}
            className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block"
          >
            0{index + 1} — Service
          </motion.span>
          <motion.h2
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
