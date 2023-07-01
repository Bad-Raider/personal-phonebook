import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SharedLayout from "../pages/SharedLayout";
import Contacts from "pages/Contacts ";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { refreshUser } from "redux/auth/operationsAuth";

const App = () => {

  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>}
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route >
    </Routes>
  )
};


export default App;
