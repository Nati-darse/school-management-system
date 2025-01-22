import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import BackToTop from "../components/ui/backToTop";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow relative z-40">
        <Navbar isStudentPage={false} isHomePage={true} />
        <Banner />
        <Testimonials />
      </main>
      <BackToTop />
      <Footer />
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#334444] to-transparent pointer-events-none z-50"></div>
    </div>
  );
};

export default HomePage;
