import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/components/SignUp/SignUp";
import Login from "../src/components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
