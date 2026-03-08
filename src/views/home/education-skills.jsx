import { educationData } from "../../models/pageData.js";

const EducationSkills = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Background</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Education & Skills</h2>
            </div>
            <p className="text-xl text-primary font-medium">( 03 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Education */}
            <div className="flex flex-col gap-8">
              {educationData?.education?.map((value, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="no-print mt-2 w-4 h-4 rounded-full border-2 border-primary bg-white flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h5 className="text-xl font-bold text-slate-900">{value?.title}</h5>
                    <p className="text-muted-foreground leading-relaxed">{value?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {educationData?.skills?.map((value, index) => (
                  <div
                    key={index}
                    className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-4 items-center justify-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <img
                        src={value?.icon}
                        alt={value?.name}
                        width={48}
                        height={48}
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/48x48/f0f0f0/666666?text=" + value.name[0];
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-slate-900 font-bold text-sm text-center">
                        {value?.name}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < value?.rating ? "bg-primary" : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
