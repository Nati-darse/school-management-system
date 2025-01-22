import { Routes, Route } from "react-router-dom";
import Pages from "./pages";
import Navbar from "./components/navbar";
import BackToTop from "./components/ui/backToTop";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/signup" element={<Pages.RegistrationPage />} />
        <Route path="/login" element={<Pages.LoginPage />} />
        <Route path="/about" element={<Pages.AboutPage />} />
        <Route path="/livingStatus" element={<Pages.LivingSituationPage />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
