import { motion } from "framer-motion";
import { ShieldCheck, Palette, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Desain Kustom",
      desc: "Bebas tentukan model dan warna.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Material Premium",
      desc: "Busa density tinggi dan rangka jati.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Dikerjakan Ahli",
      desc: "Pengrajin lokal berpengalaman puluhan tahun.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Garansi Penuh",
      desc: "Jaminan perbaikan rangka dan busa.",
    },
  ];

  return (
    <section className="py-24 bg-background px-6 relative overflow-hidden">
      {/* decorative blobs to make layout less 'pasaran' */}
      <svg
        className="absolute -left-32 -top-10 opacity-10 rotate-12 w-80 h-80 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#60a5fa"
          d="M43.6,-60.9C56.8,-51.8,69.3,-42.3,73.4,-29.3C77.5,-16.3,73.2,0.4,65.2,15.2C57.2,30,45.5,43,31.9,48.9C18.3,54.8,2.9,53.6,-11.5,50.1C-25.9,46.6,-39.3,40.9,-47.8,30.9C-56.3,20.9,-59.9,6.6,-56.8,-6.6C-53.6,-19.9,-43.7,-32.2,-32.3,-41.5C-20.9,-50.9,-10.4,-57.2,1,-58.2C12.4,-59.2,24.8,-54.1,43.6,-60.9Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute -right-32 -bottom-10 opacity-8 -rotate-6 w-96 h-96 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#34d399"
          d="M33.4,-55.4C44.8,-48.9,56,-41.3,63.8,-29.9C71.7,-18.5,76.2,-3.3,71.2,9.9C66.2,23,51.8,34.3,38,44.9C24.2,55.4,12.1,65.1,-0.9,66C-13.9,66.9,-27.8,58.9,-37.2,48.6C-46.6,38.3,-51.6,25.7,-57.6,12.2C-63.6,-1.3,-70.7,-15.6,-66.9,-27C-63.1,-38.4,-48.3,-46.9,-33.2,-53.1C-18.1,-59.3,-2.9,-63.1,11.8,-62.9C26.5,-62.7,35.9,-58,33.4,-55.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Mengapa Memilih Ekana?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk kenyamanan rumah kamu — kualitas, estetika, dan
            layanan yang ramah.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-full shadow-lg"
          >
            Pesan Sekarang
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => {
            const offset = i % 2 === 0 ? -8 : 8; // visual stagger
            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: offset,
                  rotate: i % 2 === 0 ? -2 : 2,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 90 }}
                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -1 : 1 }}
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow transform"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="text-accent bg-accent/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                >
                  {item.icon}
                </motion.div>

                <h3 className="font-bold text-xl mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>

                <div className="flex justify-center">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent hover:bg-accent/20 transition"
                  >
                    Pesan Sekarang
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
