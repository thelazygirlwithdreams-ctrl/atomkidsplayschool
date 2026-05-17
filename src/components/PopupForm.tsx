import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen && !submitted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm grid place-items-center p-5"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-card rounded-4xl p-8 shadow-pop relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="font-display text-2xl font-bold mb-2">Hello there! 👋</h3>
            <p className="text-sm text-muted-foreground mb-6">Let us know how we can help your little one grow.</p>
            <form action="https://formsubmit.co/kanchanamunu@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_next" value="https://atomkidsplayschoolguduvanchery.in" />
              <input type="hidden" name="_subject" value="New Website Enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="text-sm font-semibold block mb-1.5">Your Name</label>
                  <input name="name" placeholder="Parent's Name" className="w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1.5">Contact Number</label>
                  <input name="contact" type="tel" placeholder="+91" className="w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1.5">Enquire About</label>
                  <select name="enquiry" defaultValue="" className="w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                    <option value="" disabled>Select a program...</option>
                    <option value="Daycare">Daycare</option>
                    <option value="Pre-KG">Pre-KG</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Tuitions">Tuitions</option>
                    <option value="Summer Classes">Summer Classes</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-bold shadow-soft flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform mt-2">
                  <Send size={18} /> Send Enquiry
                </button>
              </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
