import { educationData } from "../../models/pageData.js";

const EducationSkills = () => {
  return (
    <section>
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <img
            src="/images/home/education-skill/edu-skill-vector.svg"
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education &amp; Skills</h2>
              <p className="text-xl text-primary">( 03 )</p>
            </div>

            <div className="flex flex-col gap-10 xl:gap-16">
              {/* Education */}
              <div className="flex flex-col gap-6 xl:gap-8 max-w-2xl">
                {educationData?.education?.map((value, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h5>{value?.title}</h5>
                      <p className="font-normal">{value?.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills — horizontal scrollable row */}
              <div className="w-full overflow-x-auto pb-4">
                <div className="flex flex-row gap-4 xl:gap-5 min-w-max">
                  {educationData?.skills?.map((value, index) => (
                    <div
                      key={index}
                      className="p-4 xl:p-5 border border-muted rounded-lg flex flex-col gap-4 items-center justify-between hover:border-primary hover:shadow-md transition-all duration-300"
                      style={{ minWidth: "110px", maxWidth: "130px" }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-[52px] h-[52px] flex items-center justify-center">
                          <img
                            src={value?.icon}
                            alt={value?.name}
                            width={52}
                            height={52}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-black font-medium text-center text-xs leading-tight">
                          {value?.name}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="8"
                            height="8"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
