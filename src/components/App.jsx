import { Routes, Route } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout";
import Contacts from "pages/Contacts ";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "pages/NotFound";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
      </Route >
    </Routes>
  )
};


export default App;
