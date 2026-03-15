import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Get in Touch
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-16">
            <span className="text-gradient">Contact</span> Us
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="space-y-8">
              <div className="glass-surface p-6 rounded-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">SK Carz Detailing Studio</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      215, ZP Rd<br />
                      Valmiki Ambedkar Awas Yojana<br />
                      Sriramana Colony, Hastinapuram<br />
                      Hyderabad, Telangana 500079
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-surface p-6 rounded-sm">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-mono text-foreground">8:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monday – Saturday</span>
                        <span className="font-mono text-foreground">8:30 AM – 9:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-surface p-6 rounded-sm">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors border border-border"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/sk_carz._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors border border-border"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="rounded-sm overflow-hidden border border-border h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.7231554808354!2d78.54026967493327!3d17.328901583548348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3007edd4829%3A0xc7def1ceb423ef37!2sSK%20Carz%20Detaling%20Studio!5e0!3m2!1sen!2sin!4v1773553937351!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Carz Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
