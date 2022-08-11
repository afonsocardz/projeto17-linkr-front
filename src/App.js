import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={SignUp}></Route>
      </Routes>
    </BrowserRouter>
  );
}
