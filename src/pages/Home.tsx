import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SofaConfigurator3D from "../components/SofaConfigurator3D";
import ProductShowcase from "../components/ProductShowcase";
import ProcessQuality from "../components/ProcessQuality";
import WhyChooseUs from "../components/WhyChooseUs";

const heroImages = [
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background overflow-hidden">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-0"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-accent italic font-heading text-2xl md:text-3xl mb-6 tracking-wide"
          >
            Produsen Sofa Premium Semarang
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-white font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
          >
            Kemewahan dan Kenyamanan di Setiap Jahitan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-200 font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Wujudkan ruang tamu impian dengan sofa custom berkualitas tinggi.
            Material premium, desain eksklusif, dan garansi kenyamanan untuk
            rumah kamu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("3d-configurator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-lg bg-gradient-to-r from-accent to-primary text-white shadow-lg hover:brightness-95 hover:shadow-accent/40 hover:-translate-y-1 transition-all"
            >
              Rancang Sofa 3D
            </button>
            <button className="w-full sm:w-auto backdrop-blur-sm bg-white/10 border border-white/50 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:-translate-y-1">
              Katalog Produk
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors z-10"
          onClick={() =>
            document
              .getElementById("3d-configurator")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      <section
        id="3d-configurator"
        className="py-24 bg-background flex flex-col items-center justify-center px-6 relative z-20"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">
            Interaktif
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Rancang Sofa Impianmu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Sesuaikan warna kain dan material kaki sofa dengan gaya interior
            ruangan kamu. Putar model 3D untuk melihat setiap detail jahitan dan
            rangka.
          </motion.p>
        </div>
        <SofaConfigurator3D />
      </section>
      <ProductShowcase />
      <ProcessQuality />
      <WhyChooseUs />
    </div>
  );
}
