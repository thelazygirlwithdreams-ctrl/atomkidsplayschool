import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, Sun, Smile } from "lucide-react";

const programs = [
  {
    icon: Smile, bg: "bg-mint", title: "Playgroup", age: "2.5 – 6 yrs",
    benefits: ["Sensory play", "Social skills", "Early learning"],
  },
  {
    icon: Baby, bg: "bg-coral", title: "Daycare", age: "1.5 – 6 yrs",
    benefits: ["Full / Half day care", "Nap time & play"],
  },
  {
    icon: BookOpen, bg: "bg-sky", title: "Pre-KG • LKG • UKG", age: "2.5 – 5 yrs",
    benefits: ["Phonics & numeracy", "Creative arts", "Social skills"],
  },
  {
    icon: GraduationCap, bg: "bg-sunny", title: "Tuition Classes", age: "Class 1 – 8",
    benefits: ["Concept clarity", "Homework help", "Small batches"],
  },
  {
    icon: Sun, bg: "bg-primary", title: "Summer Classes", age: "3 - 15 yrs",
    benefits: ["Drawing & Handwriting", "Tamil Writing", "Rubik's Cube", "Abacus", "Vedic Maths"],
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 px-5 overflow-hidden">
      <div className="absolute -top-10 right-0 h-72 w-72 bg-grape/20 blob animate-blob" />
      <div className="mx-auto max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">What We Offer</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Programs that <span className="text-rainbow">spark joy</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Thoughtfully designed for every stage of your child's wonderful journey.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, rotate: -1 }}
              className="group relative rounded-4xl bg-card p-7 shadow-card hover:shadow-pop transition-all"
            >
              <div className={`absolute -top-6 left-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg} text-white shadow-pop group-hover:animate-wiggle`}>
                <p.icon size={26} />
              </div>
              <div className="pt-7">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{p.age}</div>
                <h3 className="font-display text-xl font-bold mt-1">{p.title}</h3>
                <ul className="mt-4 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
