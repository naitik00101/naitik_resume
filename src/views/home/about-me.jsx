import { Badge } from "../shared/badge.jsx";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <img
            src="/images/home/about-me/resume-bg-img.svg"
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full opacity-30"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex rounded-xl overflow-hidden">
                <img
                  src="/images/home/about-me/about-banner-img.png"
                  alt="Naitik Morker"
                  width={303}
                  height={440}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I&apos;m a Backend Engineer passionate about building secure,
                  scalable, and performant server-side applications. I specialize
                  in Java and Node.js, with a strong foundation in Data
                  Structures &amp; Algorithms and hands-on experience designing
                  RESTful APIs, implementing JWT-based authentication, and
                  working with MongoDB. I also have exposure to DevOps
                  practices — setting up CI/CD pipelines with GitHub Actions
                  and deploying to Vercel and Render.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-300">
                  {[
                    { count: "3+", label: "Projects Built" },
                    { count: "2+", label: "Years Coding" },
                    { count: "BCA", label: "Pursuing" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Languages</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Hindi", "Gujarati"].map((lang, index) => (
                      <Badge key={index} className="h-full bg-white rounded-full">
                        <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 text-base xl:text-xl text-muted-foreground">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
