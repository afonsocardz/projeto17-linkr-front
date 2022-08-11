import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import Posts from "./Pages/Posts";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/feed" element={<Posts />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}
