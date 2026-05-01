import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import LandingPage from "@/pages/LandingPage";
import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import CourseList from "@/pages/CourseList";
import StudyRoom from "@/pages/StudyRoom";
import Community from "@/pages/Community";
import AdminPage from "@/pages/AdminPage";
import RebuildWorkspace from "@/pages/RebuildWorkspace";

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
        <Route
          path="/rebuild/dashboard"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="dashboard" />
            </AppLayout>
          }
        />
        <Route
          path="/rebuild/decks"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="decks" />
            </AppLayout>
          }
        />
        <Route
          path="/rebuild/decks/:deckId"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="deck-detail" />
            </AppLayout>
          }
        />
        <Route
          path="/rebuild/study/:deckId"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="study" />
            </AppLayout>
          }
        />
        <Route
          path="/rebuild/review"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="review" />
            </AppLayout>
          }
        />
        <Route
          path="/rebuild/mistakes"
          element={
            <AppLayout requireAuth={false}>
              <RebuildWorkspace mode="mistakes" />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}
