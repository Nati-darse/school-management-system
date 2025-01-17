import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative z-40">
        <Navbar />
        <Banner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
