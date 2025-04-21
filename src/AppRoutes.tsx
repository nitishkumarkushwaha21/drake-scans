import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComicsTab from "./pages/ComicsTab";
import Member from "./pages/Member";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout shownav>
            <HomePage />
          </Layout>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/login"
        element={
          <Layout shownav>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout shownav>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/comics"
        element={
          <Layout shownav>
            <ComicsTab />
          </Layout>
        }
      />
      <Route
        path="/membership"
        element={
          <Layout shownav>
            <Member />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
