import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
      <nav className="w-full bg-slate-950/80 border border-white/10 rounded-2xl shadow-lg shadow-black/40 px-4 sm:px-6 py-3 relative">
        {/* container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-lg font-semibold cursor-pointer">
            Code<span className="text-blue-500">Indicator</span>
          </a>
          {/* desktop */}
          <ul className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {navItems.map((nav) => (
              <li key={nav.href}>
                <a
                  href={nav.href}
                  className="text-slate-400 hover:text-blue-400
                         hover:underline hover:underline-offset-8 transition-colors duration-200 focus-visible:outline"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#"
              className="text-sm flex items-center gap-2 bg-linear-to-r
             from-blue-600 to-blue-400 px-4 py-2 rounded-xl hover:brightness-110 transition-all
              duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              Apply Now
              <ArrowRight size={15} />
            </a>
          </div>
          <button
            className="md:hidden flex items-center justify-end p-4 
            cursor-pointer hover:text-blue-400 transition duration-200"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {/* mobile */}
        <div
          className={`${
            menu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          } 
          md:hidden absolute top-full left-0 mt-2 p-4  w-full z-50 bg-slate-950/95 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-300 ease-in`}
        >
          <ul>
            {navItems.map((nav) => (
              <li key={nav.href} className="w-full text-center space-y-4 p-4">
                <a
                  href={nav.href}
                  onClick={() => setMenu(false)}
                  className="text-slate-400 hover:text-blue-400 font-medium hover:underline hover:underline-offset-8 transition-colors"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-sm flex items-center justify-center gap-2 bg-linear-to-r
             from-blue-600 to-blue-400 px-4 py-2 rounded-xl hover:brightness-110 transition-all
              duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-400 mx-4"
          >
            Apply Now
            <ArrowRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
