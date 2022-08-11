import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import Posts from "./Pages/Posts";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
  console.log("oi");
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <Routes>
          <Route path="/signup" element={SignUp}></Route>
          <Route path="/feed" element={<Posts />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}
