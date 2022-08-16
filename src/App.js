import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagsContextProvider from "./Contexts/HashtagsContext";
import { MenuProvider } from "./Contexts/MenuContext";
import UpdateContextProvider from "./Contexts/UpdateContext";
import UserContextProvider from "./Contexts/UserContext";
import GlobalStyle from "./globalStyle";
import { AuthProvider } from "./hooks/useAuth";
import Hashtag from "./Pages/Hashtags";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Timeline from "./Pages/Timeline";
import UserPosts from "./Pages/UserPosts";

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <GlobalStyle />
        <UpdateContextProvider>
          <HashtagsContextProvider>
            <UserContextProvider>
              <AuthProvider>
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/timeline" element={<Timeline />} />
                  <Route path="/user/:id" element={<UserPosts />} />
                  <Route path="/hashtag/:hashtag" element={<Hashtag />} />
                </Routes>
              </AuthProvider>
            </UserContextProvider>
          </HashtagsContextProvider>
        </UpdateContextProvider>
      </BrowserRouter>
    </MenuProvider>
  );
}
