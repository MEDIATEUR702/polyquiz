import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import QuizEngine from "./pages/QuizEngine";
import Resultats from "./pages/Resultats";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizEngine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resultats"
          element={
            <ProtectedRoute>
              <Resultats />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}