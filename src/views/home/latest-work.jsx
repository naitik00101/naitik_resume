import React, { useState } from "react";
import { workData } from "../../models/workData.js";
import { motion, AnimatePresence } from "framer-motion";

const LatestWork = () => {
  const [activeTab, setActiveTab] = useState("React");

  const filteredProjects = workData.filter(
    (project) => project.category === activeTab
  );

  const tabs = ["React", "PHP"];

  return (
    <section id="work" className="section bg-slate-50/50">
      <div className="container">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Featured Projects</h2>
            </div>
            
            {/* Filter Tabs - Elegant Switcher */}
            <div className="flex bg-muted/30 p-1 rounded-full border border-black/5 backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 relative z-10 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-muted-foreground hover:text-slate-900"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((value, index) => {
                return (
                  <motion.div
                    key={value.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                  >
                    <div className="flex flex-col h-full">
                      {/* Project Header - Could be an image or a decorative element */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                        {value.image ? (
                           <img
                            src={value.image}
                            alt={value.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.src = "https://placehold.co/600x400/f0f0f0/666666?text=" + value.title;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                            <h3 className="text-primary/20 font-bold text-6xl uppercase tracking-tighter opacity-10 select-none">
                              {value.category}
                            </h3>
                          </div>
                        )}
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                           {value.link ? (
                             <a
                              href={value.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                              title="Live Demo"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                           ) : (
                             <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-50 cursor-not-allowed">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>
                             </span>
                           )}
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow p-6 md:p-8 gap-5">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">
                              {value.category}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground/60">{value.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                            {value.title}
                          </h3>
                        </div>
                        
                        <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-3 overflow-hidden">
                          {value.description}
                        </p>

                        <div className="mt-auto">
                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-2 pt-5 border-t border-black/[0.03]">
                            {value.techStack?.map((tech, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {/* View More Placeholder */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-muted-foreground/50 font-medium italic">
              Experience focused on building robust backends and dynamic frontends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
