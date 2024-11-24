import { useState } from "react";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AptitudePage from "./Pages/AptitudePage";
import CodingPage from "./Pages/CodePage";
import InterviewPage from "./Pages/InterviewPage";
import CodingUpload from "./Components/CodingComponents/CodingUpload";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/signup" />} />
          <Route path="/aptitudePage" element={<AptitudePage />} />
          <Route path="/codingExam" element={<CodingPage />} />
          <Route path="/interviewPage" element={<InterviewPage />} />
          <Route path="/codingQuestionUpload" element={<CodingUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
