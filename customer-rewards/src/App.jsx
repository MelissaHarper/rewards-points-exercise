import { Route, Routes } from "react-router-dom";
import RewardsPoints from "./components/RewardsPoints";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<RewardsPoints />} />
      </Routes>
    </>
  );
}

export default App;
