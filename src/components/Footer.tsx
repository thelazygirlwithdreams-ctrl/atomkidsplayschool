import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-5">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white grid place-items-center shadow-pop ring-2 ring-primary/40 overflow-hidden flex-shrink-0">
              <img src={logo} alt="Atom Kids Play School logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
            </div>
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl">Atom Kids Play School</div>
              <div className="text-xs md:text-sm uppercase tracking-widest opacity-60">Urapakkam, Tamil Nadu</div>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-70 max-w-md">
            A safe, joyful and nurturing space where every little learner discovers the magic of growing up.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/people/ATOM-KIDS-PLAY-School-Urapakkam/100077316188570/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/atom_kids_play_school/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@Atom_play_school_guduvancherry/featured" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="font-display font-bold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm opacity-80">
            {["About", "Programs", "Facilities", "Gallery", "Admissions", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold mb-4">Reach Us</div>
          <ul className="space-y-2 text-sm opacity-80">
            <li>464, Arul Nagar, MG Nagar 1A</li>
            <li>Urapakkam - 603211</li>
            <li><a href="mailto:kanchanamunu@gmail.com" className="hover:text-primary">kanchanamunu@gmail.com</a></li>
            <li><a href="tel:+918610392184" className="hover:text-primary">+91 86103 92184</a></li>
            <li><a href="tel:+917904960286" className="hover:text-primary">+91 79049 60286</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-background/10 text-xs opacity-60 text-center">
        © {new Date().getFullYear()} Atom Kids Play School. Made with 💛 for little dreamers.
      </div>
    </footer>
  );
}
