import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Minimalis", "L-Shape", "Chesterfield", "Retro"];

  const products = [
    {
      id: 1,
      name: "Sofa Minimalis Modern",
      category: "Minimalis",
      price: "Rp 3.500.000",
      img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Sofa L-Shape Premium",
      category: "L-Shape",
      price: "Rp 5.200.000",
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Chesterfield Classic",
      category: "Chesterfield",
      price: "Rp 6.800.000",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Sofa Retro Vintage",
      category: "Retro",
      price: "Rp 4.100.000",
      img: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Sofa Bed Minimalis",
      category: "Minimalis",
      price: "Rp 3.800.000",
      img: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "L-Shape Scandinavian",
      category: "L-Shape",
      price: "Rp 5.500.000",
      img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Chesterfield Royal",
      category: "Chesterfield",
      price: "Rp 7.500.000",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Retro Modern Wood",
      category: "Retro",
      price: "Rp 3.900.000",
      img: "https://images.unsplash.com/photo-1491926626787-62a44543c131?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "Semua" || product.category === activeCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="product" className="w-full">
      <div className="w-full min-h-screen bg-background pt-32 pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Koleksi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-700">
                Sofa Premium
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Temukan desain sofa yang paling cocok untuk gaya ruang tamu kamu
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Cari model sofa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-accent outline-none transition-all text-gray-700"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-accent to-primary text-white shadow-md"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-medium">
                Sofa yang kamu cari belum tersedia nih
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
              <AnimatePresence>
                {filteredProducts.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="overflow-hidden aspect-square relative">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="font-heading font-bold text-lg text-primary mb-1 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-accent font-medium text-sm md:text-base mb-6 flex-grow">
                        Mulai {item.price}
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="flex items-center justify-between w-full mt-auto py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm md:text-base group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm"
                      >
                        <span>Detail</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
