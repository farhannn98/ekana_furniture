import { motion } from "framer-motion";
import {
  Target,
  Award,
  Users,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Premium",
      desc: "Material terbaik dengan standar pengerjaan presisi tinggi.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Desain Custom",
      desc: "Kebebasan penuh untuk menyesuaikan warna, bahan, dan ukuran.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fokus Presisi",
      desc: "Setiap jahitan dan lekukan dikerjakan dengan tingkat detail maksimal.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pengrajin Lokal",
      desc: "Memberdayakan tenaga ahli berpengalaman dari Semarang.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background pt-24 flex flex-col overflow-hidden">
      <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-20 md:mb-32 w-full">
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Showroom Ekana Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-heading font-bold text-4xl md:text-6xl mb-4"
            >
              Kisah di Balik <span className="text-accent italic">Ekana</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-200 font-body text-lg md:text-xl max-w-2xl"
            >
              Dedikasi kami untuk menciptakan ruang tamu yang hangat, elegan,
              dan nyaman melalui karya furniture terbaik.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-accent font-bold tracking-widest text-sm uppercase">
                Tentang Perusahaan
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Lebih Dari Sekadar <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-700">
                Tempat Duduk.
              </span>
            </h2>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
              PT Ekana Furniture bermula dari sebuah visi sederhana di Semarang.
              Kami ingin menghadirkan sofa custom berkualitas premium yang dapat
              diakses oleh semua kalangan. Kami percaya bahwa ruang tamu adalah
              jantung dari sebuah rumah.
            </p>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-10">
              Dengan menggabungkan teknologi modern dan keahlian tangan
              pengrajin lokal, kami memastikan setiap produk memiliki
              durabilitas tinggi dan estetika yang memukau. Kepuasan kamu adalah
              tolok ukur kesuksesan kami.
            </p>
            <Link
              to="/product"
              className="self-start flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wider bg-gradient-to-r from-accent to-primary text-white shadow-md hover:brightness-95 transition"
            >
              LIHAT KOLEKSI KAMI <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                alt="Pengrajin Sofa Ekana"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-full h-full border-2 border-primary/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-12 w-full mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              Komitmen Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Fondasi yang membangun kepercayaan pelanggan terhadap produk PT
              Ekana Furniture.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background border border-gray-100 p-8 rounded-2xl hover:border-primary/20 hover:shadow-xl transition-all duration-300 shadow-sm group"
              >
                <div className="text-accent mb-6 bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-primary font-heading font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
