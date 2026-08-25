import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="p-10 text-white">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-lime-400">FitTrack</span>
        </h1>
      </main>
    </div>
  );
}

export default App;