import { useParams, Link } from "react-router-dom";
import { useState } from "react"; // Tambahkan useState untuk galeri dan zoom
import { motion, AnimatePresence } from "framer-motion"; // Tambahkan AnimatePresence
import { ArrowLeft, MessageCircle, CheckCircle, ZoomIn, X } from "lucide-react"; // Ikon tambahan
import { WA_NUMBER } from "../utils/constants";

export default function ProductDetail() {
  const { id } = useParams();

  // 1. Data Produk Diperbarui dengan Multiple Images
  const products = [
    {
      id: "1",
      name: "Sofa Minimalis Modern",
      category: "Minimalis",
      price: "Rp 3.500.000",
      imgMain:
        "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1200&q=80",
      // Tambahkan 2 gambar tambahan
      imgThumbs: [
        "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=400&q=80", // Thumb dari main
        "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&w=400&q=80", // Contoh angle lain
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=400&q=80", // Contoh angle lain
      ],
      desc: "Sofa minimalis dengan balutan kain premium yang lembut dan rangka kayu jati solid. Cocok untuk ruangan bergaya modern.",
    },
    // ... ulangi untuk produk lain dengan gambar berbeda. Saya beri satu contoh saja untuk efisiensi ...
    {
      id: "3",
      name: "Chesterfield Classic",
      category: "Chesterfield",
      price: "Rp 6.800.000",
      imgMain:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      imgThumbs: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1491926626787-62a44543c131?auto=format&fit=crop&w=400&q=80",
      ],
      desc: "Gaya klasik abadi dengan kancing dalam dan material kulit sintetis premium. Menambah kesan mewah di ruang tamu kamu.",
    },
    // ... produk lain ...
  ];

  const product = products.find((p) => p.id === id);

  // 2. State untuk Gambar Utama dan Zoom
  const [selectedImage, setSelectedImage] = useState(product?.imgMain);
  const [isZoomed, setIsZoomed] = useState(false);

  const waLink = `https://wa.me/${WA_NUMBER}?text=Halo%20Ekana%20Furniture,%20saya%20tertarik%20dengan%20${product?.name}%20(${product?.price})`;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Produk tidak ditemukan
          </h2>
          <Link to="/product" className="text-accent hover:underline">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  // 3. Fungsi untuk menangani klik pada gambar utama (zoom)
  const handleMainImageClick = () => {
    setIsZoomed(true);
  };

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-24 px-4 md:px-6 relative overflow-x-hidden">
      {/* 4. Modal Zoom (Tampilan Penuh) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsZoomed(false)} // Klik luar untuk keluar
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Cegah penutupan modal saat klik ikon close
                  setIsZoomed(false);
                }}
                className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <Link
          to="/product"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Koleksi</span>
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 lg:gap-12 p-6 md:p-10">
          {/* 5. Kolom Kiri: Galeri Gambar */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Gambar Utama */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 cursor-pointer"
              onClick={handleMainImageClick} // Klik untuk Zoom
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Indikator Zoom */}
              <div className="absolute top-4 right-4 p-2 bg-black/40 text-white rounded-full">
                <ZoomIn className="w-5 h-5" />
              </div>
            </motion.div>

            {/* 6. Thumbs (2 atau 3 di bawah main) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {product.imgThumbs?.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)} // Ganti main image
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === thumb
                      ? "border-accent shadow-md scale-105"
                      : "border-gray-100 hover:border-accent/40"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Kolom Kanan: Detail & Order */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-bold text-sm rounded-full w-fit mb-4">
              {product.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-gray-800 mb-6">
              {product.price}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">{product.desc}</p>

            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Bisa custom warna dan material kain</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Garansi busa dan rangka</span>
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-fit px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent to-primary shadow-lg hover:brightness-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan Sekarang via WA
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
