import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RewardsPoints from "./components/RewardsPoints";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/rewardsPoints" element={<RewardsPoints />} />
      </Routes>
    </>
  );
}

export default App;
