import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, Image as ImageIcon, X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g7 from "@/assets/gallery-7.jpg";

// The user can add up to 10 images into the `images` array for each category.
const albums = [
  { id: "annual-day", title: "Annual Day", cover: g1, images: [g1] },
  { id: "colors-day", title: "Colors Day", cover: g2, images: [g2] },
  { id: "fancy-dress", title: "Fancy Dress", cover: g3, images: [g3] },
  { id: "celebrations", title: "Celebrations", cover: g7, images: [g7] },
  { id: "sports-day", title: "Sports Day", cover: g4, images: [g4] },
  { id: "weekly-activity", title: "Weekly Activity", cover: g5, images: [g5] },
];

export function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState<typeof albums[0] | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-5 overflow-hidden">
      <div className="absolute top-20 -left-16 h-72 w-72 bg-coral/20 blob animate-blob" />
      <div className="absolute bottom-20 -right-16 h-72 w-72 bg-sky/20 blob animate-blob [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl min-h-[500px]">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-primary">
            <Sparkles size={14} /> {activeAlbum ? "Albums" : "Glimpses"}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            {activeAlbum ? (
              <span className="text-rainbow">{activeAlbum.title} Gallery</span>
            ) : (
              <>Little moments, <span className="text-rainbow">big smiles</span></>
            )}
          </h2>
          {!activeAlbum && (
            <p className="mt-4 text-muted-foreground">A peek into our colorful days filled with laughter, learning and love.</p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!activeAlbum ? (
            <motion.div
              key="albums"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setActiveAlbum(album)}
                  className="cursor-pointer relative overflow-hidden rounded-3xl shadow-card hover:shadow-pop group ring-2 ring-transparent hover:ring-primary/40 transition-all aspect-[4/3]"
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="font-display text-xl md:text-2xl font-bold translate-y-2 group-hover:translate-y-0 transition-all">
                      {album.title}
                    </div>
                    <div className="text-sm text-white/80 flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all delay-75">
                      <ImageIcon size={16} /> {album.images.length} Photos
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              <button
                onClick={() => setActiveAlbum(null)}
                className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to Albums
              </button>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activeAlbum.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedImg(img)}
                    className="cursor-pointer relative overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-md transition-shadow group bg-black/5"
                  >
                    <img
                      src={img}
                      alt={`${activeAlbum.title} ${i + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Sparkles className="text-white opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100 duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {activeAlbum.images.length === 1 && (
                <div className="mt-12 text-center text-muted-foreground bg-card rounded-3xl p-10 border border-border border-dashed">
                  <ImageIcon className="mx-auto mb-4 opacity-30 text-primary" size={56} />
                  <p className="text-lg text-foreground font-medium mb-2">Ready for your photos!</p>
                  <p>You can add your 10 photos for the <strong>{activeAlbum.title}</strong> album here.</p>
                  <p className="text-sm mt-2 opacity-80">Update the <code>images</code> array in the Gallery component to display them.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox for viewing individual photos */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md grid place-items-center p-5"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 z-10 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImg}
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
