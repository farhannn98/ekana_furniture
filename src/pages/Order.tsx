import { motion } from "framer-motion";
import {
  Sofa,
  MessageCircle,
  CreditCard,
  Hammer,
  Truck,
  Home,
  PenTool,
} from "lucide-react";
import { WA_NUMBER } from "../utils/constants";

export default function Order() {
  const waLink = `https://wa.me/${WA_NUMBER}`;

  const steps = [
    {
      icon: <Sofa className="w-6 h-6" />,
      title: "Pilih Produk Sofa",
      desc: "Lihat koleksi sofa kami melalui katalog digital atau kunjungi showroom. Pilih model, ukuran, dan warna sesuai keinginan kamu.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Konsultasi & Informasi Harga",
      desc: "Hubungi tim kami via WhatsApp untuk diskusi desain, ukuran ruangan, bahan, dan rincian estimasi harga.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pembayaran Uang Muka (DP)",
      desc: "Setelah detail dan harga disepakati, lakukan pembayaran Uang Muka (DP) minimal 50% untuk memulai proses produksi.",
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Proses Produksi",
      desc: "Sofa diproduksi sesuai spesifikasi. Waktu pengerjaan berkisar 7 hingga 14 hari kerja. Kami akan mengirimkan update progresnya.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Pelunasan & Pengiriman",
      desc: "Setelah selesai dan lolos pengecekan kualitas, silakan lakukan pelunasan. Sofa kemudian dikirim menggunakan ekspedisi terpercaya.",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Sofa Siap Digunakan",
      desc: "Sofa tiba di rumah kamu dengan aman. Kami memastikan setiap pengiriman dilakukan dengan perlindungan yang ekstra.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Cara{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-700">
              Pemesanan
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Ikuti panduan mudah berikut untuk mewujudkan sofa impian di ruang
            tamu kamu.
          </motion.p>
        </div>

        {/* Layout Terbagi: Kiri (Gambar Sticky) & Kanan (Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* Kolom Kiri - Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 hidden lg:block rounded-3xl overflow-hidden shadow-2xl h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
              alt="Proses pembuatan sofa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
              <p className="text-white font-heading text-2xl font-bold leading-relaxed">
                "Kenyamanan kamu dimulai dari pilihan material yang tepat dan
                pengerjaan yang presisi."
              </p>
            </div>
          </motion.div>

          {/* Kolom Kanan - Timeline Langkah */}
          <div className="flex flex-col gap-8 relative">
            {/* Garis vertikal timeline */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 z-0 hidden md:block"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none border border-gray-100 md:border-none group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-accent font-bold text-sm mb-1 uppercase tracking-wider">
                    Langkah 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner Pesan Custom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background dekorasi */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-accent to-primary rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <PenTool className="text-white w-6 h-6" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-heading">
                    Pesan Custom Sofa
                  </h2>
                </div>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  Punya desain sofa impian sendiri? Kirimkan sketsa atau foto
                  referensi desain kamu. Tim kami akan mempelajarinya dan
                  memberikan estimasi harga serta waktu pengerjaan.
                </p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap px-8 py-4 rounded-xl font-bold text-primary bg-white hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Kirim Referensi Desain
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
