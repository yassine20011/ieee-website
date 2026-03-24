import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Team from "@/sections/Team";
import Supervisors from "@/sections/Supervisors";
import Events from "@/sections/Events";
import Achievements from "@/sections/Achievements";
import Cells from "@/sections/Cells";
import Contact from "@/sections/Contact";

function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Supervisors />
        <Events />
        <Cells />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;