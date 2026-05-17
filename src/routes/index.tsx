import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Facilities } from "@/components/Facilities";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { YouTubeSection } from "@/components/YouTubeSection";
import { Admissions } from "@/components/Admissions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { PopupForm } from "@/components/PopupForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Testimonials />
      <YouTubeSection />
      <Admissions />
      <Contact />
      <Footer />
      <PopupForm />
    </main>
  );
}
