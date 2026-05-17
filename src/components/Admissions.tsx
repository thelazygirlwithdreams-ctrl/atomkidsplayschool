import { motion } from "framer-motion";
import { MapPin, ClipboardList, Users, PartyPopper } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Visit School", desc: "Tour our campus and meet our team." },
  { icon: ClipboardList, title: "Fill the Form", desc: "Quick & simple admission form." },
  { icon: Users, title: "Friendly Interaction", desc: "A relaxed chat with parent & child." },
  { icon: PartyPopper, title: "Welcome Aboard!", desc: "Begin a joyful learning journey." },
];

export function Admissions() {
  return (
    <section id="admissions" className="py-24 px-5 bg-rainbow/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" />
      <div className="mx-auto max-w-6xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Join Our Family</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Admissions made <span className="text-rainbow">simple</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Four easy steps to begin your child's adventure with Atom Kids.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-3xl bg-card p-7 shadow-card text-center hover:shadow-pop transition-shadow"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display font-bold shadow-pop">
                {i + 1}
              </div>
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rainbow text-white shadow-soft mb-4 mt-3">
                <s.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-9 py-4 font-bold text-lg shadow-pop hover:scale-105 transition-transform">
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  );
}
