import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";
import heroKids from "@/assets/hero-kids.png";
import logo from "@/assets/logo.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Floating shapes */}
      <div className="absolute top-24 left-8 h-24 w-24 rounded-full bg-coral/30 blob animate-float-soft" />
      <div className="absolute top-1/3 right-10 h-32 w-32 bg-mint/40 blob animate-blob" />
      <div className="absolute bottom-10 left-1/4 h-16 w-16 rounded-full bg-sunny/50 animate-float-soft [animation-delay:1s]" />
      <div className="absolute bottom-20 right-1/3 h-20 w-20 bg-grape/30 blob animate-blob [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-2 shadow-card mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">7+ Years of Joyful Learning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            A <span className="text-rainbow">Safe & Happy</span> Place for Your Child to Learn & Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            At <strong className="text-foreground">Atom Kids Play School</strong> in Urapakkam, every little explorer
            discovers the joy of learning through play, creativity and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#admissions" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-bold shadow-soft hover:scale-105 transition-transform">
              Enroll Now <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-card text-foreground px-7 py-4 font-bold shadow-card hover:bg-accent transition-colors">
              <Phone size={18} /> Contact Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { n: "500+", l: "Happy Kids" },
              { n: "7+", l: "Years Trusted" },
              { n: "20+", l: "Programs" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-rainbow blob animate-blob opacity-50 blur-2xl" />
          <img src={heroKids} alt="Happy preschool kids playing and learning" width={1024} height={1024} className="relative w-full max-w-xl mx-auto animate-float-soft" />
          <div className="absolute -bottom-4 -left-2 md:bottom-4 md:left-4 bg-white rounded-full shadow-pop ring-4 ring-primary/20 p-2 animate-wiggle">
            <img src={logo} alt="Atom Kids Play School logo" width={96} height={96} className="h-20 w-20 md:h-24 md:w-24 object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
