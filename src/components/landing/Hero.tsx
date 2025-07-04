import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full text-center px-4 min-h-[calc(100vh-64px)] bg-gradient-to-br from-white to-[#fdf1ff] dark:from-black dark:to-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {/* 🔵 Enhanced Blurred Background Blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-400/50 dark:bg-purple-700/30 rounded-full filter blur-[120px] z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-pink-400/50 dark:bg-pink-700/30 rounded-full filter blur-[120px] z-0" />
      
      {/* 🎯 Main Content */}
      <div className="max-w-4xl mx-auto px-2 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Organize Your{" "}
          <span className="text-black dark:text-white">Notes</span>,{" "}
          <span className="text-black dark:text-white">Tasks</span>, and{" "}
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Supercharge your productivity with AI-powered note-taking. Summarize ideas, ask questions, and never lose track of important thoughts again.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" size="lg">
            Learn more
          </Button>
          <Button className="shadow-md text-base" size="lg">
            Get started today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
