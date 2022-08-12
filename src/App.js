import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import SignUp from "./Pages/SignUp";
import Timeline from "./Pages/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}
