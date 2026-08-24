import React from "react";
import { Helmet } from "react-helmet";
import { Loader, ScrollProgress, MouseGlow, BackgroundGradients } from "@/components/portfolio/Effects";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import { About, Skills, Projects, Experience, Leadership } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/toaster";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Gowreesh S S — AI & Full-Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Gowreesh S S, an IT graduate specializing in AI and full-stack development, with three live business platforms deployed across Tamil Nadu." />
        <meta name="theme-color" content="#080808" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gowreesh S S — AI & Full-Stack Developer" />
        <meta property="og:description" content="Building digital experiences that create real business impact." />
        <meta property="og:image" content="https://images.hostinger.com/4ddc1a20-0c38-4cb3-8920-1a9f4e9ca951.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Loader />
      <ScrollProgress />
      <MouseGlow />
      <BackgroundGradients />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
