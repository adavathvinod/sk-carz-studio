import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="SK Carz" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              The Art of the Detail.<br />
              Premium car detailing and interior customization in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "Gallery", "Reviews", "Booking", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary mb-6">Contact</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>215, ZP Rd, Sriramana Colony</p>
              <p>Hastinapuram, Hyderabad</p>
              <p>Telangana 500079</p>
              <p className="mt-4">Mon–Sat: 8:30 AM – 9:30 PM</p>
              <p>Sunday: 8:30 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} SK Carz Detailing Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
