import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import LandingPage from "@/pages/LandingPage";
import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import CourseList from "@/pages/CourseList";
import StudyRoom from "@/pages/StudyRoom";
import Community from "@/pages/Community";
import AdminPage from "@/pages/AdminPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        
        {/* Protected Routes inside AppLayout */}
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <AppLayout>
              <CourseList />
            </AppLayout>
          }
        />
        <Route
          path="/study/:courseId"
          element={
            <AppLayout>
              <StudyRoom />
            </AppLayout>
          }
        />
        <Route
          path="/community"
          element={
            <AppLayout>
              <Community />
            </AppLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AppLayout requireAdmin>
              <AdminPage />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}
