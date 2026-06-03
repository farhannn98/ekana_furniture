import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProcessQuality() {
  const features = [
    "Material Premium Bersertifikat",
    "Tepat Waktu Terjamin",
    "Harga Pabrik Kompetitif",
    "Kenyamanan Diutamakan",
    "Pengerjaan Presisi",
    "Layanan Purna Jual",
  ];

  return (
    <section className="py-24 bg-background px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[500px] md:h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-4/5 h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80"
              alt="Interior ruang tamu elegan"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 w-3/5 h-[250px] md:h-[320px] border-[10px] border-background rounded-xl overflow-hidden shadow-2xl z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80"
              alt="Detail tekstur kain sofa"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-[30%] md:top-[40%] -left-4 md:-left-8 bg-accent w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-primary shadow-xl z-20"
          >
            <span className="font-heading font-bold text-3xl md:text-4xl">
              10+
            </span>
            <span className="text-[10px] md:text-xs text-center font-bold uppercase tracking-wider leading-tight mt-1">
              Tahun
              <br />
              Pengalaman
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-accent font-bold tracking-widest text-sm uppercase">
              Proses & Kualitas
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Standar Kualitas <span className="text-accent">Sofa Premium</span>
          </h2>

          <p className="text-gray-600 mb-6 font-body leading-relaxed">
            PT Ekana Furniture adalah produsen sofa profesional yang berfokus
            pada kualitas jahitan, kekuatan rangka, dan kenyamanan busa. Kami
            memproduksi berbagai model sofa custom untuk melengkapi ruang tamu
            kamu.
          </p>

          <p className="text-gray-600 mb-8 font-body leading-relaxed">
            Setiap produk dikerjakan langsung di workshop kami. Kami menerapkan
            standar tinggi mulai dari tahap pemilihan bahan baku hingga proses
            pengiriman ke lokasi kamu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-primary font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button className="self-start flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wider bg-gradient-to-r from-accent to-primary text-white shadow-md hover:brightness-95 transition">
            KONSULTASI SEKARANG <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
