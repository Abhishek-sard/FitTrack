import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

// Home Components
import Home from "./components/Pages/Home/Home.jsx";
import Stats from "./components/Pages/Home/stats.jsx";
import Services from "./components/Pages/Home/Services.jsx";
import Programs from "./components/Pages/Home/Programs.jsx";
import Trainers from "./components/Pages/Home/Trainers.jsx";
import Membership from "./components/Pages/Home/Membership.jsx";

// Other Pages
import Community from "./components/Pages/Community/Community.jsx";

import Progress from "./components/Pages/Progress/Progress.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        
        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= MAIN CONTENT ================= */}
        <main>
          <Routes>

            {/* ================= HOME PAGE ================= */}
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

            {/* ================= COMMUNITY PAGE ================= */}
            <Route
              path="/community"
              element={<Community />}
            />


            <Route path="/progress" element={<Progress/>}/>

            {/* ================= 404 PAGE ================= */}
            <Route
              path="*"
              element={
                <div className="flex min-h-[70vh] items-center justify-center px-4">
                  <div className="text-center">
                    <h1 className="text-7xl font-extrabold text-lime-400">
                      404
                    </h1>

                    <h2 className="mt-4 text-3xl font-bold text-white">
                      Page Not Found
                    </h2>

                    <p className="mt-3 text-slate-400">
                      The page you are looking for does not exist.
                    </p>

                    <a
                      href="/"
                      className="mt-6 inline-flex rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
                    >
                      Go Back Home
                    </a>
                  </div>
                </div>
              }
            />

          </Routes>
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;