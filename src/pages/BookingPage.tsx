import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", vehicleType: "Car", service: "", date: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="section-spacing">
        <div className="section-container max-w-2xl">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Schedule
          </motion.span>
          <motion.h1 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-16">
            Book Your <span className="text-gradient">Service</span>
          </motion.h1>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {[
                  { label: "Name", type: "text", key: "name", required: true },
                  { label: "Phone Number", type: "tel", key: "phone", required: true },
                ].map((f) => (
                  <div key={f.key} className="relative">
                    <input
                      type={f.type}
                      required={f.required}
                      value={(form as Record<string, string>)[f.key]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors peer placeholder-transparent"
                      placeholder={f.label}
                    />
                    <label className="absolute left-0 -top-3 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary transition-all font-display uppercase tracking-widest">
                      {f.label}
                    </label>
                  </div>
                ))}

                {/* Vehicle Type */}
                <div>
                  <label className="text-xs text-muted-foreground font-display uppercase tracking-widest mb-3 block">Vehicle Type</label>
                  <div className="flex gap-4">
                    {["Car", "Bike"].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, vehicleType: v }))}
                        className={`px-6 py-3 border rounded-sm font-display text-sm uppercase tracking-widest transition-all ${
                          form.vehicleType === v
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="relative">
                  <label className="text-xs text-muted-foreground font-display uppercase tracking-widest mb-3 block">Service Required</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors appearance-none"
                  >
                    <option value="" className="bg-card">Select a service</option>
                    {["Car Wash", "Interior Spa", "Ceramic Coating", "Paint Protection Film", "Custom Seat Covers", "Car Floor Matting", "Mud Flaps Installation", "Legal Black Tinting"].map((s) => (
                      <option key={s} value={s} className="bg-card">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="text-xs text-muted-foreground font-display uppercase tracking-widest mb-3 block">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    rows={3}
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground font-body transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label className="absolute left-0 -top-3 text-xs text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary transition-all font-display uppercase tracking-widest">
                    Message (Optional)
                  </label>
                </div>

                <button type="submit" className="btn-primary shimmer w-full">Book My Service</button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-8">We'll contact you shortly to confirm your appointment.</p>
                <a
                  href="https://wa.me/919999999999?text=Hi%20SK%20Carz%2C%20I%20just%20booked%20a%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
