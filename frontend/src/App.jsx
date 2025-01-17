import { Routes, Route } from "react-router-dom";
import Pages from "./pages";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
