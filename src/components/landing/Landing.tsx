import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

const features = [
  {
    title: "AI-Powered Summarization",
    description:
      "Let our AI instantly distill long notes or meeting transcripts into clear, concise summaries. Save time and focus only on what matters most.",
  },
  {
    title: "Smart Search & Ask",
    description:
      "Search using keywords or ask the AI a question about your notes — it understands context and gives accurate, intelligent responses.",
  },
  {
    title: "Multi-Modal Note Capture",
    description:
      "Capture notes however you like — with voice input, markdown editor, or direct paste. The AI adapts to all formats and keeps everything organized.",
  },
  {
    title: "Tagging & Organization Magic",
    description:
      "The app suggests tags automatically and groups related notes using AI clustering — so your digital brain stays sorted effortlessly.",
  },
];

const Landing = () => {
  return (
    <div className="w-full">
      <Hero />

      <section className="w-full min-h-screen flex items-center flex-col bg-background px-6 md:px-12 lg:px-24 py-16">
        <div>
          <h2 className="text-center text-4xl font-bold text-foreground mb-10">
            Features
          </h2>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
          {features.map((feature, index) => (
            <Features
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
