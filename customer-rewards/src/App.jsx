import { Route, Routes } from "react-router-dom";
import RewardsPoints from "./components/RewardsPoints";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<RewardsPoints />} />
      </Routes>
    </>
  );
}

export default App;
