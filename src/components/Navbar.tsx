import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sofa } from "lucide-react";
import { WA_NUMBER } from "../utils/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = `https://wa.me/${WA_NUMBER}`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Product", path: "/product" },
    { name: "Cara Order", path: "/order" },
  ];

  const isHome = location.pathname === "/";
  const useDarkStyle = !isHome || isScrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        useDarkStyle
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className={`p-2 rounded-xl transition-colors duration-300 ${useDarkStyle ? "bg-primary/10 text-primary" : "bg-white/20 text-white group-hover:bg-white/30"}`}
          >
            <Sofa className="w-6 h-6" />
          </div>
          <span
            className={`font-heading font-bold text-2xl tracking-wide transition-colors duration-300 ${useDarkStyle ? "text-primary" : "text-white"}`}
          >
            EKANA
          </span>
        </Link>

        <div
          className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
            useDarkStyle
              ? "bg-gray-100/80 border-gray-200"
              : "bg-white/10 border-white/20"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm transition-all duration-300 hover:text-accent relative ${
                useDarkStyle
                  ? location.pathname === link.path
                    ? "text-accent"
                    : "text-gray-700"
                  : location.pathname === link.path
                    ? "text-accent"
                    : "text-gray-100"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-accent to-primary text-white hover:brightness-95 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-gray-800 w-7 h-7" />
          ) : (
            <Menu
              className={
                useDarkStyle ? "text-primary w-7 h-7" : "text-white w-7 h-7"
              }
            />
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-heading text-2xl font-semibold transition-colors ${
              location.pathname === link.path
                ? "text-accent"
                : "text-gray-800 hover:text-accent"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-accent to-primary text-white px-8 py-3 rounded-full font-bold text-lg mt-4 shadow-lg hover:brightness-95 transition-all"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}
