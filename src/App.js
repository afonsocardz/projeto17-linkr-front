import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
    console.log("oi");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={SignUp}></Route>
      </Routes>
    </BrowserRouter>
  );
}
