import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  const products = [
    {
      name: "Sofa Minimalis",
      price: "Rp 3.500.000",
      img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa L-Shape",
      price: "Rp 5.200.000",
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa Chesterfield",
      price: "Rp 6.800.000",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa Minimalis",
      price: "Rp 3.500.000",
      img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa L-Shape",
      price: "Rp 5.200.000",
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa Chesterfield",
      price: "Rp 6.800.000",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa Minimalis",
      price: "Rp 3.500.000",
      img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sofa L-Shape",
      price: "Rp 5.200.000",
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">
            Katalog Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
            Koleksi Terlaris
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Pilihan favorit pelanggan kami untuk mewujudkan ruang tamu modern
            yang elegan dan nyaman.
          </p>
        </div>

        {/* Modern product grid: large cards on desktop, denser on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 120 }}
              className="group relative bg-gradient-to-b from-white via-white to-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-[3/2]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* soft gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

                {/* price badge */}
                <div className="absolute left-4 top-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-sm font-semibold text-primary shadow-sm">
                  Mulai {item.price}
                </div>
              </div>

              <div className="p-4 md:p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-primary">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Kualitas terjamin & desain modern
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <button
                    aria-label={`Pesan ${item.name}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-primary text-white shadow-md hover:brightness-95 transition"
                  >
                    Pesan Sekarang
                  </button>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
                    aria-label={`Detail ${item.name}`}
                  >
                    Detail
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
