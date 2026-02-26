import Logo from "./logo.jsx";

const Logo2 = () => {
  return (
    <span className="text-xl font-semibold text-black tracking-tight">
      Naitik<span className="text-primary">.</span>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <p className="text-muted-foreground">
            2026 © Built by{" "}
            <span className="text-black font-medium">Naitik Morker</span>
            {" "}— Backend Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
