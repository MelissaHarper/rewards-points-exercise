import { Route, Routes } from "react-router-dom";
import RewardsPoints from "./components/RewardsPoints";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<RewardsPoints />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
