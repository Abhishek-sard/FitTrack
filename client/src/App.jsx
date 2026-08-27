import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./components/Pages/Home/Home.jsx";
import Services from "./components/Pages/Home/Services.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Home/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;