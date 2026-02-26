const ExperienceSec = () => {
  const projects = [
    {
      period: "12/2025 – 01/2026",
      title: "LuxeGear – Ecommerce Backend",
      type: "Personal Project",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "Render"],
      description:
        "MERN-based e-commerce application with JWT authentication and RBAC. REST APIs for products, cart, and orders. MongoDB schema design with protected routes and password hashing. Deployed on Vercel (frontend) and Render (backend).",
    },
    {
      period: "09/2025 – 10/2025",
      title: "Ecrime-Sentinel – Cyber Crime Reporting Platform",
      type: "Personal Project",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      description:
        "Admin panel with RBAC and JWT authentication. Complaint management system (Pending / Resolved / Denied). REST APIs for complaint submission and status updates. MongoDB-based data handling and validation.",
    },
    {
      period: "10/2024 – 03/2025",
      title: "Film Craft – Desktop Video Editor",
      type: "Personal Project",
      tech: ["C++", "Qt", "QML"],
      description:
        "UI development using C++, Qt, and QML. Modular interface for timeline and editing tools. Discontinued due to academic priorities and increasing system complexity.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Projects</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {projects.map((proj, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Left: Period + Title */}
                <div>
                  <h3 className="font-bold mb-2 text-black text-base">{proj.period}</h3>
                  <h4 className="text-lg font-normal">{proj.title}</h4>
                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {proj.type}
                  </span>
                </div>

                {/* Center: Tech + Timeline */}
                <div className="relative">
                  {index < projects.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < projects.length - 1 ? "h-40" : "h-30"} bg-muted`}
                    />
                  )}
                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>
                  <div className="pl-4 lg:pl-7">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded border border-muted text-muted-foreground bg-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
