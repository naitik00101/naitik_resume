import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section relative overflow-hidden bg-white min-h-[85vh] flex items-center pt-32 md:pt-40">
      {/* Background blobs for modern feel */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Available for projects</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] md:leading-[1.05]">
                Crafting <span className="text-primary">Scalable</span> <br className="hidden md:block" /> Digital Core.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
            >
              I&apos;m Naitik, a Backend Engineer specialized in building high-performance systems and seamless user experiences. Turning complex logic into elegant solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
              >
                Let&apos;s Connect
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/20"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
             <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-black/5 shadow-2xl">
              <img
                src="/images/home/banner/banner-img.png"
                alt="Naitik Morker"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x800/f8fafc/64748b?text=Naitik+Morker";
                }}
              />
            </div>
            {/* Decorative elements around image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
