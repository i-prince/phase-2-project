import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Recipes from "./Components/Recipes";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Recipes" element={<Recipes />} />
        <Route exact path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
