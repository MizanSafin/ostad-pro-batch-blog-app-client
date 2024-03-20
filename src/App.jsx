import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";
import ProjectsPages from "./pages/ProjectsPages";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-out" element={<SignOutPage />} />
        <Route path="/projects" element={<ProjectsPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
