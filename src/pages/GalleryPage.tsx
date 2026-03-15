import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ppfImg from "@/assets/ppf-install.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import exteriorImg from "@/assets/exterior-polish.jpg";
import foamImg from "@/assets/foam-wash.jpg";
import seatImg from "@/assets/seat-covers.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";
import studio5 from "@/assets/studio-5.jpg";
import heroCar from "@/assets/hero-car.jpg";

const images = [
  { src: studio1, label: "Studio Overview" },
  { src: ceramicImg, label: "Ceramic Coating" },
  { src: studio4, label: "BMW 7 Series Detailing" },
  { src: ppfImg, label: "PPF Installation" },
  { src: interiorImg, label: "Interior Detailing" },
  { src: studio2, label: "Land Rover Defender" },
  { src: foamImg, label: "Premium Foam Wash" },
  { src: studio5, label: "Workshop" },
  { src: exteriorImg, label: "Machine Polishing" },
  { src: seatImg, label: "Seat Cover Installation" },
  { src: studio3, label: "SK Carz Studio Exterior" },
  { src: heroCar, label: "Studio Showpiece" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Our Work
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-16">
            <span className="text-gradient">Gallery</span>
          </motion.h1>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer break-inside-avoid"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                  <span className="p-4 font-display text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selected].src}
              alt={images[selected].label}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
