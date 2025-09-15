import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import RewardsPage from "./pages/RewardsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<RewardsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
