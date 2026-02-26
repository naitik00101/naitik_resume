const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I&apos;m Naitik</h1>
                <div className="wave">
                  <img
                    src="/images/home/banner/wave-icon.svg"
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>Backend Engineer</h1>
            </div>
            <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
              Skilled in Java and Node.js with strong DSA fundamentals and
              hands-on DevOps exposure including CI/CD and cloud deployment.
              Building robust, scalable backends with clean API design.
            </p>
          </div>
          <img
            src="/images/home/banner/banner-img.png"
            alt="Naitik Morker"
            width={685}
            height={650}
            className="block lg:hidden rounded-xl"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <img
          src="/images/home/banner/banner-img.png"
          alt="Naitik Morker"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default HeroSection;
