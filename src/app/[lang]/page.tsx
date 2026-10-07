"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ScrollRevealText } from "@/components/ScrollRevealText";
import { Services } from "@/components/Services";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Thoughts } from "@/components/Thoughts";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useTranslations } from "@/lib/i18n";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <section className="px-6 py-20 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollRevealText text={t.scrollReveal} />
          </div>
        </section>
        <Marquee />
        <Services />
        <Projects />
        <Testimonials />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
