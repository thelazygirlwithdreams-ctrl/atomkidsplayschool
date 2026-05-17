import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "FElxJNsJpds", title: "Atom Kids Showcase 1" },
  { id: "nKxw-rFKDoo", title: "Atom Kids Showcase 2" },
  { id: "VQ5ZRDn3W_8", title: "Atom Kids Showcase 3" },
  { id: "-uW-J30eDk8", title: "Atom Kids Showcase 4" },
  { id: "uFPhXTVwvI4", title: "Atom Kids Showcase 5" },
];

export function YouTubeSection() {
  return (
    <section className="relative py-24 px-5 overflow-hidden">
      <div className="absolute top-10 right-10 h-64 w-64 bg-grape/20 blob animate-blob" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Watch & Smile</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            See our kids <span className="text-rainbow">in action</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tiny stars, big moments — straight from our YouTube channel.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-pop transition-all ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" />
                </div>
                <span className="font-semibold text-sm">{v.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
