import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";
import Footer from "./components/footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/login.jsx";
import Courses from "./pages/Courses.jsx";
import ProtectedRoute from "./components/protectRoute.jsx";


function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">


      <div className="carosel">


      </div>


      <Navbar />
      <main>
        <Routes>
          {/* home page with the welcome card */}
          <Route
            path="/"
            element={
              <Card
                title="Welcome to EduTrack"
                description="Your personalized learning companion. Track your progress, explore courses, and achieve your educational goals with ease."
                actionText="Get Started"
                onAction={() => navigate('/login')}
                className="card"
              />
            }
          />

          {/* authentication route */}
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;