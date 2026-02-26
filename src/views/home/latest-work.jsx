import { workData } from "../../models/workData.js";

const LatestWork = () => {
  return (
    <section>
      <div className="bg-muted">
        <div className="container">
          <div className="py-16 xl:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Projects</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {workData?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-4 bg-white rounded-xl overflow-hidden border border-muted hover:shadow-lg transition-all duration-300"
                  >
                    {/* Color header band */}
                    <div
                      className="h-2 w-full"
                      style={{
                        background: index === 0
                          ? "#FE4300"
                          : index === 1
                          ? "#3B60E4"
                          : "#6B7280",
                      }}
                    />
                    <div className="flex flex-col gap-3 p-5">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-black">{value?.title}</h5>
                        <img
                          src="/images/icon/right-arrow-icon.svg"
                          alt="arrow"
                          width={22}
                          height={22}
                          className="opacity-40 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transform duration-200"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{value?.period}</p>
                      <p className="text-sm leading-relaxed">{value?.description}</p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-muted">
                        {value?.techStack?.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
