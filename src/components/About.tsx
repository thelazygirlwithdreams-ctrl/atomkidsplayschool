import { motion } from "framer-motion";
import { Heart, Shield, Smile, Star, Quote, GraduationCap, Award } from "lucide-react";
import principalImg from "@/assets/principal.jpg";

const features = [
  { icon: Shield, color: "bg-mint/40 text-foreground", title: "Safe Environment", desc: "CCTV monitored campus with trained, caring staff." },
  { icon: Heart, color: "bg-coral/30 text-foreground", title: "Loving Care", desc: "Warm, nurturing atmosphere that feels like home." },
  { icon: Smile, color: "bg-sunny/50 text-foreground", title: "Joyful Learning", desc: "Play-based curriculum that sparks curiosity." },
  { icon: Star, color: "bg-sky/40 text-foreground", title: "Holistic Growth", desc: "Mind, body and heart — every child blooms." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-5">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Our Story</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Where little dreams take their <span className="text-rainbow">first big steps</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For over <strong className="text-foreground">seven wonderful years</strong>, Atom Kids Play School has been
            a second home for hundreds of children in Urapakkam. We believe every child is unique — full of curiosity,
            kindness and infinite potential.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is simple: create a safe, joyful space where children fall in love with learning. From their
            first wobbly steps to their first proud "I can do it!" — we're here, cheering them on.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-card p-5 shadow-card">
              <div className="font-display text-lg font-bold text-coral">Our Mission</div>
              <p className="text-sm text-muted-foreground mt-1">Nurture confident, curious and kind little learners.</p>
            </div>
            <div className="rounded-3xl bg-card p-5 shadow-card">
              <div className="font-display text-lg font-bold text-grape">Our Vision</div>
              <p className="text-sm text-muted-foreground mt-1">A joyful childhood that builds lifelong learners.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-card p-6 shadow-card hover:shadow-pop transition-shadow"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.color} mb-4`}>
                <f.icon size={26} />
              </div>
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Principal section */}
      <div className="mx-auto max-w-7xl mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Meet The Founder</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            A message from our <span className="text-rainbow">Principal</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center bg-card rounded-[2.5rem] p-6 md:p-10 shadow-pop">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-3 bg-rainbow blob opacity-60 blur-2xl" />
            <img
              src={principalImg}
              alt="Mrs. Kanchana — Principal & Founder of Atom Kids Play School"
              width={768}
              height={960}
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-soft aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -right-2 bg-card rounded-2xl px-4 py-3 shadow-pop flex items-center gap-2">
              <Award className="text-primary" size={20} />
              <span className="text-xs font-bold">7+ Yrs Leading</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Quote className="text-primary/40" size={48} />
            <p className="mt-3 text-lg md:text-xl leading-relaxed text-foreground/90 italic">
              "Every child who walks through our doors is a little universe of curiosity. My promise to every parent is
              simple — your child will be safe, celebrated and gently guided to discover the joy of learning, every
              single day."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-grape grid place-items-center text-white">
                <GraduationCap size={26} />
              </div>
              <div>
                <div className="font-display text-xl font-bold">Mrs. Kanchana</div>
                <div className="text-sm text-muted-foreground">Principal & Founder · B.Sc B.Ed Montessori Trained</div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-sunny/30 p-4">
                <div className="font-display text-2xl font-bold text-foreground">15+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Years in Early Education</div>
              </div>
              <div className="rounded-2xl bg-mint/30 p-4">
                <div className="font-display text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Children Mentored</div>
              </div>
              <div className="rounded-2xl bg-sky/30 p-4">
                <div className="font-display text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Heart & Dedication</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
