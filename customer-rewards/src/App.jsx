import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import RewardsPage from "./pages/RewardsPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<RewardsPage />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
