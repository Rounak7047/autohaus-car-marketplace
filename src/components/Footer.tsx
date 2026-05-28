import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">AutoHaus</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The premium marketplace for buying and selling exceptional cars. Trusted by thousands.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Branches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Mumbai · Bandra West</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Delhi · Connaught Place</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Bengaluru · Indiranagar</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Pune · Koregaon Park</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2 items-center"><Mail className="h-4 w-4 text-primary shrink-0" /> rounakkarmakar2812@gmail.com</li>
              <li className="flex gap-2 items-center"><Phone className="h-4 w-4 text-primary shrink-0" /> +91 70476 29867</li>
              <li className="flex gap-2 items-center"><Phone className="h-4 w-4 text-primary shrink-0" /> +91 80017 79184</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AutoHaus. Crafted with precision.
        </div>
      </div>
    </footer>
  );
}
