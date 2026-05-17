import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  age: z.string().trim().max(20),
  message: z.string().trim().max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"), phone: fd.get("phone"), age: fd.get("age"), message: fd.get("message"),
    });
    if (!result.success) {
      setStatus(result.error.issues[0].message);
      return;
    }
    
    // Send email via FormSubmit ajax
    fetch("https://formsubmit.co/ajax/kanchanamunu@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: result.data.name,
        contact: result.data.phone,
        age: result.data.age,
        message: result.data.message,
        _subject: `New Website Contact Form Message`
      })
    });

    setStatus("Thank you! We'll get back to you very soon. 💛");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary">Get in Touch</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Let's <span className="text-rainbow">say hello</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-4xl bg-card p-8 shadow-card space-y-5"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/30 text-coral"><MapPin /></div>
              <div>
                <div className="font-display font-bold">Visit Us</div>
                <p className="text-sm text-muted-foreground">463, Arul Nagar, MG Nagar 1A,<br />Urapakkam, Guduvancheri,<br />Tamil Nadu - 603211</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/40 text-sky"><Mail /></div>
              <div>
                <div className="font-display font-bold">Email</div>
                <a href="mailto:kanchanamunu@gmail.com" className="text-sm text-muted-foreground hover:text-primary">kanchanamunu@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/40 text-mint"><Phone /></div>
              <div>
                <div className="font-display font-bold">Call / WhatsApp</div>
                <a href="tel:+918610392184" className="text-sm text-muted-foreground hover:text-primary block">+91 86103 92184</a>
                <a href="tel:+917904960286" className="text-sm text-muted-foreground hover:text-primary block">+91 79049 60286</a>
                <a href="https://wa.me/918610392184" className="text-sm text-muted-foreground hover:text-primary block">WhatsApp Chat</a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden mt-6">
              <iframe
                title="Atom Kids Play School Map"
                className="w-full h-64 border-0"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=atom kids play school guduvancherry&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-4xl bg-card p-8 shadow-card space-y-4"
          >
            <h3 className="font-display text-2xl font-bold">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your Name" placeholder="Parent's name" />
              <Field name="phone" label="Phone" placeholder="+91" type="tel" />
            </div>
            <Field name="age" label="Child's Age" placeholder="e.g. 3 years" />
            <div>
              <label className="text-sm font-semibold block mb-1.5">Message</label>
              <textarea name="message" rows={4} maxLength={1000} placeholder="Tell us how we can help..." className="w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-4 font-bold shadow-soft hover:scale-[1.02] transition-transform">
              Send Message →
            </button>
            {status && <p className="text-sm text-center text-foreground/80 pt-2">{status}</p>}
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918610392184"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-pop hover:scale-110 transition-transform animate-float-soft"
      >
        <MessageCircle size={26} />
      </a>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold block mb-1.5">{label}</label>
      <input name={name} type={type} placeholder={placeholder} maxLength={255} className="w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}
