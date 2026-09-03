import  { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Dumbbell,
  Clock,
  Flame,
  Star,
  Play,
  Heart,
  ChevronDown,
} from "lucide-react";

const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    muscle: "Chest",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "10 min",
    calories: 80,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Barbell Squat",
    muscle: "Legs",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "12 min",
    calories: 110,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Deadlift",
    muscle: "Back",
    category: "Strength",
    difficulty: "Advanced",
    duration: "12 min",
    calories: 120,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1598971639058-a4b7c8a0d7b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Shoulder Press",
    muscle: "Shoulders",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "10 min",
    calories: 75,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Pull Ups",
    muscle: "Back",
    category: "Bodyweight",
    difficulty: "Advanced",
    duration: "8 min",
    calories: 70,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1598971639058-a4b7c8a0d7b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Bicep Curl",
    muscle: "Arms",
    category: "Strength",
    difficulty: "Beginner",
    duration: "8 min",
    calories: 55,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Plank",
    muscle: "Core",
    category: "Bodyweight",
    difficulty: "Beginner",
    duration: "5 min",
    calories: 35,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Mountain Climbers",
    muscle: "Core",
    category: "HIIT",
    difficulty: "Intermediate",
    duration: "7 min",
    calories: 90,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
];

const muscles = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function AllExercises() {
  const [search, setSearch] = useState("");
  const [muscle, setMuscle] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchesSearch = exercise.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesMuscle =
        muscle === "All" || exercise.muscle === muscle;

      const matchesDifficulty =
        difficulty === "All" || exercise.difficulty === difficulty;

      return matchesSearch && matchesMuscle && matchesDifficulty;
    });
  }, [search, muscle, difficulty]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-400">
              EXERCISE LIBRARY
            </span>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Explore Every{" "}
              <span className="text-lime-400">Exercise</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Discover exercises for every muscle group, fitness level,
              and training goal.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search exercises..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none transition focus:border-lime-400"
              />
            </div>

            <div className="relative">
              <Filter
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="appearance-none rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-12 text-white outline-none"
              >
                {difficulties.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {muscles.map((item) => (
              <button
                key={item}
                onClick={() => setMuscle(item)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  muscle === item
                    ? "bg-lime-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">All Exercises</h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredExercises.length} exercises found
            </p>
          </div>
        </div>

        {filteredExercises.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">
            <Dumbbell className="mx-auto text-slate-600" size={50} />
            <h3 className="mt-4 text-xl font-bold">
              No exercises found
            </h3>
            <p className="mt-2 text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-lime-400/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-3 top-3 rounded-lg bg-slate-950/80 px-3 py-1 text-xs font-semibold text-lime-400">
                    {exercise.muscle}
                  </div>

                  <button className="absolute right-3 top-3 rounded-full bg-slate-950/80 p-2">
                    <Heart size={17} />
                  </button>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-slate-950/80 px-2 py-1 text-xs">
                    <Star size={13} className="fill-lime-400 text-lime-400" />
                    {exercise.rating}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold">{exercise.name}</h3>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-2">
                      <Clock size={14} />
                      {exercise.duration}
                    </span>

                    <span className="flex items-center gap-2">
                      <Flame size={14} />
                      {exercise.calories} kcal
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {exercise.difficulty}
                    </span>

                    <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-3 py-2 text-sm font-bold text-slate-950 hover:bg-lime-300">
                      <Play size={14} />
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default AllExercises;