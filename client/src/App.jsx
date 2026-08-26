import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./components/Pages/Home.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;