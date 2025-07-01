import { Routes, Route } from "react-router-dom";
import Signup from "../src/components/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
