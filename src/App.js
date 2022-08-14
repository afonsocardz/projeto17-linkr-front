import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./Contexts/MenuContext";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import { AuthProvider } from "./hooks/useAuth";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Timeline from "./Pages/Timeline";

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <GlobalStyle />
        <UserContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/" element={<SignIn />} />
            </Routes>
          </AuthProvider>
        </UserContextProvider>
      </BrowserRouter>
    </MenuProvider>
  );
}
