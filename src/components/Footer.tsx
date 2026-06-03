import { Link } from "react-router-dom";
// Pastikan semua ikon di bawah ini sudah di-import dengan benar:
import { Sofa, MapPin, Phone } from "lucide-react";
import { COMPANY_NAME, COMPANY_ADDRESS, WA_NUMBER } from "../utils/constants";

export default function Footer() {
  // Inline SVGs for social icons (small, dependency-free)
  const InstagramIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 11.37a4 4 0 11-4.63-4.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 6.5h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const FacebookIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <path
        d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="currentColor"
      />
    </svg>
  );

  const YoutubeIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <path
        d="M22 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C15.8 3.6 12 3.6 12 3.6h0s-3.8 0-6.9.3c-.4 0-1.3.1-2.1 1C2.2 5.6 2 7.2 2 7.2S2 9 2 10.8v2.4C2 16 2.2 17.8 2.2 17.8s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.2 7.1.3 7.1.3s3.8 0 6.9-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.8.2-3.6v-2.4C22 9 22 7.2 22 7.2z"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="currentColor"
      />
      <path d="M10 15V9l5 3-5 3z" fill="#fff" />
    </svg>
  );
  return (
    <footer className="relative bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 text-stone-200 pt-20 pb-8 overflow-hidden">
      {/* Sentuhan dekoratif cahaya abstrak di latar belakang */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Kolom 1: Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg shadow-amber-950/50">
                <Sofa className="w-6 h-6 text-stone-950" />
              </div>
              <span className="font-heading font-black tracking-wider text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                EKANA
              </span>
            </div>
            <p className="font-body text-stone-400 leading-relaxed text-sm lg:text-base">
              Produsen sofa premium di Semarang. Kami mewujudkan ruang tamu
              impian Anda dengan material berkualitas tinggi, keahlian terbaik,
              dan desain eksklusif yang tak lekang oleh waktu.
            </p>
          </div>

          {/* Kolom 2: Tautan Menu */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-amber-300 tracking-wide uppercase mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[2px] after:bg-amber-400">
              Tautan Cepat
            </h3>
            <ul className="flex flex-col gap-3.5 font-body text-stone-300">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Tentang Kami" },
                { to: "/product", label: "Katalog Produk" },
                { to: "/order", label: "Cara Order" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="relative pb-1 text-sm lg:text-base hover:text-amber-300 transition-colors duration-300 group inline-block"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-amber-300 tracking-wide uppercase mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-[2px] after:bg-amber-400">
              Hubungi Kami
            </h3>
            <ul className="flex flex-col gap-5 font-body text-stone-300">
              <li className="flex items-start gap-3.5 group">
                <div className="p-2 bg-stone-900/60 rounded-lg border border-stone-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm lg:text-base leading-relaxed group-hover:text-stone-100 transition-colors">
                  {COMPANY_ADDRESS}
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="p-2 bg-stone-900/60 rounded-lg border border-stone-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm lg:text-base font-medium group-hover:text-stone-100 transition-colors">
                  +{WA_NUMBER.slice(0, 2)} {WA_NUMBER.slice(2, 6)}-
                  {WA_NUMBER.slice(6, 10)}-{WA_NUMBER.slice(10)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="border-t border-stone-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-body text-xs lg:text-sm text-stone-500">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-stone-400 font-medium">{COMPANY_NAME}</span>.
            Hak Cipta Dilindungi.
          </div>

          {/* Sosial Media Grid */}
          <div className="flex items-center gap-4">
            {[
              { icon: InstagramIcon, href: "#" },
              { icon: FacebookIcon, href: "#" },
              { icon: YoutubeIcon, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-900/40 border border-stone-800 text-stone-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-stone-900 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
