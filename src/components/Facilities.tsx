import { motion } from "framer-motion";
import { ToyBrick, Camera, Sparkles, Building2 } from "lucide-react";

const facilities = [
  { icon: ToyBrick, title: "Safe Play Area", desc: "Soft, secure equipment for endless fun.", color: "text-coral" },
  { icon: Camera, title: "CCTV & Security", desc: "24×7 monitoring for total peace of mind.", color: "text-grape" },
  { icon: Sparkles, title: "Hygienic Environment", desc: "Daily sanitization and clean spaces.", color: "text-mint" },
  { icon: Building2, title: "Child-Friendly Spaces", desc: "Bright, vibrant rooms designed for little ones.", color: "text-sunny" },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-24 px-5 bg-cool/40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Our Campus</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Built with <span className="text-rainbow">love & care</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Every corner is designed to keep your child safe, engaged and happy.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-card p-7 shadow-card hover:shadow-pop transition-all flex gap-5 items-start"
            >
              <div className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background ${f.color}`}>
                <f.icon size={26} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
