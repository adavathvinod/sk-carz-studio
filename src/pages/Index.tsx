import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Droplets, Sparkles, Car, Star, User, Check, ChevronRight } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";
import heroCar from "@/assets/hero-car.jpg";
import ppfImg from "@/assets/ppf-install.jpg";
import ceramicImg from "@/assets/ceramic-coating.jpg";
import interiorImg from "@/assets/interior-detail.jpg";
import exteriorImg from "@/assets/exterior-polish.jpg";
import foamImg from "@/assets/foam-wash.jpg";
import seatImg from "@/assets/seat-covers.jpg";
import floorImg from "@/assets/floor-matting.jpg";
import mudImg from "@/assets/mud-flaps.jpg";
import tintImg from "@/assets/window-tinting.jpg";

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
  { title: "Car Floor Matting", description: "Custom-fit floor mats for complete interior protection and a clean look.", image: floorImg },
  { title: "Mud Flaps Installation", description: "Professional mud flap fitting to protect your car body from road debris and splashes.", image: mudImg },
  { title: "Legal Black Tinting", description: "High-quality window tinting within legal limits for UV protection and privacy.", image: tintImg },
];

const reviews = [
  { name: "Naveen Kella", text: "Very professional work and the service is awesome at affordable price.", rating: 5 },
  { name: "Ramavath Ganesh", text: "Good communication and great skills on bike and cars.", rating: 5 },
  { name: "Depavath Narender", text: "Excellent service and quality work.", rating: 5 },
  { name: "Srinivas Reddy", text: "Best detailing studio in Hyderabad. My BMW looks brand new after ceramic coating!", rating: 5 },
  { name: "Arjun Kumar", text: "PPF installation was flawless. Highly recommend SK Carz for paint protection.", rating: 5 },
  { name: "Priya Sharma", text: "Interior detailing was beyond expectations. The car smells and looks amazing.", rating: 5 },
];

/* ─── Pricing Data ─── */
const pricingCards = [
  {
    icon: Shield,
    title: "Paint Protection Film (PPF)",
    desc: "Ultimate protection against stone chips, scratches, and road debris. Our premium PPF maintains your car's showroom finish.",
    features: ["Upto 10 years warranty", "200mm thickness", "Hydrophobic", "Easy removable"],
    price: "₹60,000",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    desc: "Long-lasting hydrophobic coating that provides deep gloss and protection against environmental contaminants.",
    features: ["3 years warranty", "Hydrophobic effect", "Enhanced gloss", "Easy maintenance"],
    price: "₹10,000",
  },
  {
    icon: Sparkles,
    title: "Graphene Coating",
    desc: "Next-generation nano coating with superior durability and heat dissipation properties.",
    features: ["5 years warranty", "Heat resistant", "Anti-static", "Ultra-hydrophobic"],
    price: "₹15,000",
  },
  {
    icon: Car,
    title: "Exterior Detailing",
    desc: "Complete exterior restoration including paint correction, polishing, and protection.",
    features: ["Paint correction", "Swirl removal", "Clay bar treatment", "Wax protection"],
    price: "₹3,500",
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    desc: "Deep cleaning and conditioning of all interior surfaces including leather, fabric, and plastics.",
    features: ["Foam wash", "AC foam cleaning", "Leather conditioning", "Sanitization"],
    price: "₹2,500",
  },
  {
    icon: Car,
    title: "Car Decor & Accessories",
    desc: "Custom wraps, alloy wheels, accessories, and wheel alignment services.",
    features: ["Custom wraps", "Alloy wheels", "Accessories", "Wheel alignment"],
    price: "Contact",
  },
];

const vehicleTypes = ["Hatchback", "Sedan", "SUV / MUV", "Luxury Sedan", "Sports / Supercar"] as const;
const vehicleMultiplier: Record<string, number> = {
  Hatchback: 1,
  Sedan: 1.15,
  "SUV / MUV": 1.35,
  "Luxury Sedan": 1.6,
  "Sports / Supercar": 2,
};

const calcServices = [
  { id: "wash", label: "Premium Wash", desc: "Foam wash + interior vacuum", base: 500 },
  { id: "exterior", label: "Exterior Detailing", desc: "Paint correction + polish", base: 3500 },
  { id: "interior", label: "Interior Detailing", desc: "Deep clean + conditioning", base: 2500 },
  { id: "ceramic", label: "Ceramic Coating", desc: "3-year protection", base: 10000 },
  { id: "graphene", label: "Graphene Coating", desc: "5-year protection", base: 15000 },
  { id: "ppf-front", label: "PPF (Front Only)", desc: "Hood, bumper, fenders", base: 60000 },
  { id: "ppf-full", label: "PPF (Full Body)", desc: "Complete body coverage", base: 120000 },
];

const packages = [
  {
    name: "Essential",
    price: "₹4,999",
    features: ["Trim restorer", "Interior vacuum", "Dashboard polish", "Tire dressing"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹9,999",
    features: ["Full exterior detail", "Interior deep clean", "Paint correction (2 stage)", "Ceramic spray coating", "Engine bay cleaning"],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₹34,999",
    features: ["Complete PPF package", "Ceramic coating", "Full interior restoration", "Headlight restoration", "1-year maintenance"],
    popular: false,
  },
];

const heroServices = [
  "Paint Protection Film",
  "Ceramic Coating",
  "Interior Detailing",
  "Exterior Detailing",
  "Premium Car Wash",
  "Seat Covers & Customization",
  "Car Floor Matting",
  "Mud Flaps Installation",
  "Legal Black Tinting",
];

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % heroServices.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    if (!selectedVehicle || selectedServices.length === 0) return null;
    const mult = vehicleMultiplier[selectedVehicle] || 1;
    const total = selectedServices.reduce((sum, id) => {
      const svc = calcServices.find((s) => s.id === id);
      return sum + (svc ? svc.base : 0);
    }, 0);
    return Math.round(total * mult);
  }, [selectedVehicle, selectedServices]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <img src={heroCar} alt="SK Carz Detailing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative z-10 text-center section-container">
          <motion.h1
            {...fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-none"
          >
            Premium Car<br />
            <span className="text-gradient">Detailing Experience</span>
          </motion.h1>

          {/* Cinematic service cycling */}
          <div className="h-12 md:h-14 relative overflow-hidden mb-6">
            {heroServices.map((service, i) => (
              <motion.div
                key={service}
                initial={false}
                animate={{
                  opacity: activeService === i ? 1 : 0,
                  y: activeService === i ? 0 : activeService > i ? -30 : 30,
                  scale: activeService === i ? 1 : 0.9,
                  filter: activeService === i ? "blur(0px)" : "blur(6px)",
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-mono text-sm md:text-base uppercase tracking-[0.35em] text-primary">
                  {String(i + 1).padStart(2, "0")} — {service}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {heroServices.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: activeService === i ? 28 : 8 }}
              >
                <span className="absolute inset-0 bg-muted-foreground/30 rounded-full" />
                {activeService === i && (
                  <motion.span
                    className="absolute inset-0 bg-primary rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    key={`bar-${i}`}
                  />
                )}
              </button>
            ))}
          </div>

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

      {/* ─── Pricing Section ─── */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Our Pricing
          </motion.span>
          <motion.h2 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-6xl font-bold text-foreground text-center mb-16">
            Service <span className="text-gradient">Pricing</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-surface p-8 rounded-sm group hover:border-primary/40 transition-colors duration-300"
              >
                <card.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{card.desc}</p>
                <ul className="space-y-2 mb-6">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="font-display text-2xl font-bold text-primary">
                  {card.price === "Contact" ? "Contact for pricing" : <>Starting {card.price}</>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ─── Price Calculator ─── */}
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-2 block">Instant Quote</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Get Your <span className="text-gradient">Estimate</span>
              </h3>
              <p className="text-muted-foreground text-sm">Price Calculator</p>
            </div>

            {/* Step 1 - Vehicle */}
            <div className="mb-10">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                Select Your Vehicle Type
              </h4>
              <div className="flex flex-wrap gap-3">
                {vehicleTypes.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVehicle(v)}
                    className={`px-5 py-3 rounded-sm font-display text-sm uppercase tracking-wider transition-all duration-300 border ${
                      selectedVehicle === v
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 - Services */}
            <div className="mb-10">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                Select Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {calcServices.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => toggleService(svc.id)}
                    className={`text-left p-5 rounded-sm border transition-all duration-300 ${
                      selectedServices.includes(svc.id)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">{svc.label}</p>
                        <p className="text-muted-foreground text-xs mt-1">{svc.desc}</p>
                      </div>
                      <span className="text-primary font-mono text-sm font-bold">From ₹{svc.base.toLocaleString("en-IN")}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate */}
            <div className="glass-surface p-8 rounded-sm text-center">
              <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-3">Estimated Price</p>
              {estimate ? (
                <div className="font-display text-5xl font-bold text-gradient mb-4">
                  ₹{estimate.toLocaleString("en-IN")}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">Select your vehicle type and services to see the estimate</p>
              )}
              {estimate && (
                <Link to="/booking" className="btn-primary shimmer mt-4 inline-flex">
                  Book Now <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </motion.div>

          {/* ─── Packages ─── */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-2 block">Value Packages</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Detailing <span className="text-gradient">Packages</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 rounded-sm border transition-colors duration-300 relative ${
                  pkg.popular
                    ? "border-primary bg-primary/5"
                    : "border-border glass-surface"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold uppercase tracking-widest px-4 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{pkg.name}</h4>
                <p className="font-display text-4xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className={pkg.popular ? "btn-primary w-full shimmer" : "btn-outline w-full"}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews Section ─── */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.span {...fadeInUp} className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block text-center">
            Testimonials
          </motion.span>
          <motion.h2 {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Customer <span className="text-gradient">Reviews</span>
          </motion.h2>

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
