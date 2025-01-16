import { Routes, Route } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
