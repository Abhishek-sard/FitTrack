import {
  Play,
  ArrowRight,
  Dumbbell,
  Target,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const featured = [
  {
    name: "Bench Press",
    muscle: "Chest",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Barbell Squat",
    muscle: "Legs",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Deadlift",
    muscle: "Back",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1598971639058-a4b7c8a0d7b1?auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = [
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
];

function Exercises() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-widest text-lime-400">
              LEARN • TRAIN • IMPROVE
            </span>

            <h1 className="mt-4 text-5xl font-black sm:text-6xl">
              Master Every{" "}
              <span className="text-lime-400">Movement</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Learn proper exercise form, understand which muscles
              you're training, and avoid common mistakes.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 hover:bg-lime-300">
              Explore Exercises
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <Target className="text-lime-400" size={30} />
            <h3 className="mt-5 text-lg font-bold">Target Muscles</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Understand exactly which muscles each movement targets.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <ShieldCheck className="text-lime-400" size={30} />
            <h3 className="mt-5 text-lg font-bold">Perfect Your Form</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Follow proper techniques to train safely and effectively.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <Lightbulb className="text-lime-400" size={30} />
            <h3 className="mt-5 text-lg font-bold">Training Tips</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Get useful tips, common mistakes, and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-bold">Browse by Muscle Group</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-5 font-semibold transition hover:border-lime-400 hover:bg-slate-800"
            >
              <Dumbbell className="mx-auto mb-3 text-lime-400" size={24} />
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-12 pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Popular Exercises</h2>
          <p className="mt-2 text-slate-500">
            Start with these popular movements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((exercise) => (
            <div
              key={exercise.name}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 p-4 text-slate-950">
                  <Play fill="currentColor" size={24} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{exercise.name}</h3>

                  <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                    {exercise.level}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Primary muscle: {exercise.muscle}
                </p>

                <button className="mt-5 flex items-center gap-2 text-sm font-bold text-lime-400">
                  View Exercise Guide
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Exercises;