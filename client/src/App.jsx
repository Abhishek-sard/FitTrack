import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./components/Pages/Home/Home.jsx";
import Membership from "./components/Pages/Home/Membership.jsx";
import Programs from "./components/Pages/Home/Programs.jsx";
import Services from "./components/Pages/Home/Services.jsx";
import Stats from "./components/Pages/Home/stats.jsx";
import Trainers from "./components/Pages/Home/Trainers.jsx";

import Community from "./components/Pages/Community/Community.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Stats />
                <Services />
                <Programs />
                <Trainers />
                <Membership />
              </>
            }
          />

          {/* Community Page */}
          <Route
            path="/community"
            element={<Community />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;