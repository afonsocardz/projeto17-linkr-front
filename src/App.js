import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import Posts from "./Pages/Posts";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Posts />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}
