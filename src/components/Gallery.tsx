import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, Image as ImageIcon, X } from "lucide-react";
import ad1 from "@/assets/annual-day-1.jpeg"; import ad2 from "@/assets/annual-day-2.jpeg"; import ad3 from "@/assets/annual-day-3.jpeg"; import ad4 from "@/assets/annual-day-4.jpeg"; import ad5 from "@/assets/annual-day-5.jpeg"; import ad6 from "@/assets/annual-day-6.jpeg"; import ad7 from "@/assets/annual-day-7.jpeg"; import ad8 from "@/assets/annual-day-8.jpeg"; import ad9 from "@/assets/annual-day-9.jpeg"; import ad10 from "@/assets/annual-day-10.jpeg";
import cd1 from "@/assets/colors-day-1.jpeg"; import cd2 from "@/assets/colors-day-2.jpeg"; import cd3 from "@/assets/colors-day-3.jpeg"; import cd4 from "@/assets/colors-day-4.jpeg"; import cd5 from "@/assets/colors-day-5.jpeg";
import fd1 from "@/assets/fancy-dress-1.jpeg"; import fd2 from "@/assets/fancy-dress-2.jpeg"; import fd3 from "@/assets/fancy-dress-3.jpeg"; import fd4 from "@/assets/fancy-dress-4.jpeg"; import fd5 from "@/assets/fancy-dress-5.jpeg";
import cb1 from "@/assets/celebrations-1.jpeg"; import cb2 from "@/assets/celebrations-2.jpeg"; import cb3 from "@/assets/celebrations-3.jpeg"; import cb4 from "@/assets/celebrations-4.jpeg"; import cb5 from "@/assets/celebrations-5.jpeg"; import cb6 from "@/assets/celebrations-6.jpeg"; import cb7 from "@/assets/celebrations-7.jpeg";
import vj1 from "@/assets/vijayadashami-1.jpeg"; import vj2 from "@/assets/vijayadashami-2.jpeg"; import vj3 from "@/assets/vijayadashami-3.jpeg";
import wa1 from "@/assets/weekly-activity-1.jpeg"; import wa2 from "@/assets/weekly-activity-2.jpeg"; import wa3 from "@/assets/weekly-activity-3.jpeg"; import wa4 from "@/assets/weekly-activity-4.jpeg"; import wa5 from "@/assets/weekly-activity-5.jpeg"; import wa6 from "@/assets/weekly-activity-6.jpeg"; import wa7 from "@/assets/weekly-activity-7.jpeg"; import wa8 from "@/assets/weekly-activity-8.jpeg";

// The user can add up to 10 images into the `images` array for each category.
const albums = [
  { id: "annual-day", title: "Annual Day", cover: ad1, images: [ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10] },
  { id: "colors-day", title: "Colors Day", cover: cd1, images: [cd1, cd2, cd3, cd4, cd5] },
  { id: "fancy-dress", title: "Fancy Dress", cover: fd1, images: [fd1, fd2, fd3, fd4, fd5] },
  { id: "celebrations", title: "Celebrations", cover: cb1, images: [cb1, cb2, cb3, cb4, cb5, cb6, cb7] },
  { id: "vijayadashami", title: "Vijayadashami", cover: vj1, images: [vj1, vj2, vj3] },
  { id: "weekly-activity", title: "Weekly Activity", cover: wa1, images: [wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8] },
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

              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setActiveAlbum(null)}
                  className="inline-flex items-center gap-2 text-sm font-bold bg-primary text-primary-foreground px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-soft"
                >
                  <ArrowLeft size={16} /> Back to Albums
                </button>
              </div>
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
