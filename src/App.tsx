import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Order from "./pages/Order";

const Contact = () => (
  <div className="pt-24 min-h-screen text-center">Halaman Kontak</div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-body text-gray-800 flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </Router>
  );
}
