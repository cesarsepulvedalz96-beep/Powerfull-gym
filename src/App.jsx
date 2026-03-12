import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentResult from "./pages/PaymentResult";
import FakeWebpay from "./pages/FakeWebpay";
import Receipt from "./pages/Receipt";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment-result" element={<PaymentResult />} />
            <Route path="/fake-webpay" element={<FakeWebpay />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
