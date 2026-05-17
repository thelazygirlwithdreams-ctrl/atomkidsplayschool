import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#admissions", label: "Admissions" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-pop ring-2 ring-primary/30 grid place-items-center overflow-hidden animate-float-soft flex-shrink-0">
            <img src={logo} alt="Atom Kids Play School logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-2xl md:text-3xl text-foreground">Atom Kids</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">Play School</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#admissions" className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-soft hover:scale-105 transition-transform">
          Enroll Now
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl bg-card shadow-card" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden mx-5 mb-4 rounded-3xl bg-card shadow-pop p-5">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block text-base font-semibold text-foreground">{l.label}</a>
              </li>
            ))}
            <a href="#admissions" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-bold">
              Enroll Now
            </a>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
