import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";
import SignOutPage from "./pages/SignOutPage";
import ProjectsPages from "./pages/ProjectsPages";
import AboutPage from "./pages/AboutPage";
// import DarkMode from "./components/DarkMode";

import Header from "./components/Header";
// import PaginationPage from "./components/PaginationPage";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
// const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <QueryClientProvider client={queryClient}>
        <PaginationPage />
      </QueryClientProvider> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-out" element={<SignOutPage />} />
        <Route path="/projects" element={<ProjectsPages />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/*
 import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
}
*/
