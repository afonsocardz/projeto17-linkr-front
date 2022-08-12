import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import SignIn from "./Pages/SignIn";
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
          <Route path="/" element={<SignIn />} />
        </Routes >
      </UserContextProvider >
    </BrowserRouter >
  );
}
