import { Button } from "../shared/button.jsx";
import Logo from "./logo.jsx";
import { contactBar } from "../../models/pageData.js";

const Header = () => {
  return (
    <header className="navbar top-0 left-0 z-[999] w-full fixed bg-white/90 backdrop-blur-sm border-b border-muted shadow-sm">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-3 md:py-4">
          {/* Left: Logo + Contact Items */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <Logo />
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              {contactBar?.contactItems?.map((value, index) => (
                <a
                  key={index}
                  href={value?.link}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <img
                    src={value?.icon}
                    alt={value?.type}
                    width={18}
                    height={18}
                    className="min-w-[18px] min-h-[18px]"
                  />
                  <span className="hidden lg:inline">{value?.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Icons + Download Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {contactBar?.socialItems?.map((value, index) => (
                <a key={index} href={value?.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={value?.icon}
                    alt={value?.platform}
                    width={22}
                    height={22}
                    className="hover:opacity-70 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <a
              href="/images/Naitik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden cursor-pointer w-fit py-1.5 sm:py-2 px-4 sm:px-5 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-sm font-medium text-black group-hover:text-white transition-colors duration-300">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
