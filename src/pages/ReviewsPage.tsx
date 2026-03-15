import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const reviews = [
  { name: "Naveen Kella", text: "Very professional work and the service is awesome at affordable price.", rating: 5 },
  { name: "Ramavath Ganesh", text: "Good communication and great skills on bike and cars.", rating: 5 },
  { name: "Depavath Narender", text: "Excellent service and quality work.", rating: 5 },
  { name: "Srinivas Reddy", text: "Best detailing studio in Hyderabad. My BMW looks brand new after ceramic coating!", rating: 5 },
  { name: "Arjun Kumar", text: "PPF installation was flawless. Highly recommend SK Carz for paint protection.", rating: 5 },
  { name: "Priya Sharma", text: "Interior detailing was beyond expectations. The car smells and looks amazing.", rating: 5 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const ReviewsPage = () => {
  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Testimonials
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-4">
            Customer <span className="text-gradient">Reviews</span>
          </motion.h1>

          {/* Overall rating */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono text-3xl text-primary font-bold">5.0</span>
            <p className="text-muted-foreground text-sm mt-1">Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-surface p-6 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground">{r.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">"{r.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
