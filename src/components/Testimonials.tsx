import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Priya R.", role: "Parent of Aarav", text: "My son looks forward to school every single day! The teachers are like family. Atom Kids has been a blessing for our family." },
  { name: "Karthik M.", role: "Parent of Diya", text: "Safe, clean, and incredibly caring. We can see Diya's confidence growing day by day. Highly recommended in Urapakkam." },
  { name: "Lakshmi S.", role: "Parent of Vihaan", text: "The summer abacus program was amazing. Loving teachers, joyful environment — couldn't ask for more for our little one." },
  { name: "Anand K.", role: "Parent of Ira", text: "Beautiful classrooms, brilliant curriculum and the warmest staff. Our daughter has truly blossomed here." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 px-5 bg-warm/30 relative overflow-hidden">
      <div className="absolute top-10 left-10 h-40 w-40 bg-grape/20 blob animate-blob" />
      <div className="absolute bottom-10 right-10 h-52 w-52 bg-sky/30 blob animate-float-soft" />

      <div className="mx-auto max-w-4xl relative">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Loved by Parents</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Words from our <span className="text-rainbow">happy families</span>
          </h2>
        </div>

        <div className="mt-12 relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-4xl bg-card p-8 md:p-12 shadow-pop"
            >
              <Quote className="text-primary/30" size={48} />
              <p className="mt-4 text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                "{reviews[i].text}"
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-lg">{reviews[i].name}</div>
                  <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
                </div>
                <div className="flex gap-1 text-sunny">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, j) => (
            <button key={j} onClick={() => setI(j)} className={`h-2 rounded-full transition-all ${j === i ? "w-8 bg-primary" : "w-2 bg-foreground/20"}`} aria-label={`Review ${j + 1}`} />
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="mt-12 flex justify-center">
          <a href="#" className="inline-flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-card hover:shadow-pop transition-shadow">
            <span className="font-display font-bold text-lg">G</span>
            <span className="text-sm font-semibold">4.9 on Google Reviews</span>
            <div className="flex gap-0.5 text-sunny">
              {Array.from({ length: 5 }).map((_, j) => (<Star key={j} size={14} fill="currentColor" />))}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
