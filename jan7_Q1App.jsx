import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todos from "./pages/Todos";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
