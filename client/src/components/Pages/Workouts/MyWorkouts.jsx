import {
  Play,
  Plus,
  Clock,
  Dumbbell,
  Flame,
  MoreVertical,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const workouts = [
  {
    name: "Push Day",
    description: "Chest, shoulders & triceps",
    exercises: 8,
    duration: "52 min",
    calories: 420,
    progress: 100,
    status: "Completed",
  },
  {
    name: "Pull Day",
    description: "Back & biceps",
    exercises: 7,
    duration: "48 min",
    calories: 390,
    progress: 65,
    status: "In Progress",
  },
  {
    name: "Leg Day",
    description: "Quads, hamstrings & calves",
    exercises: 9,
    duration: "60 min",
    calories: 510,
    progress: 0,
    status: "Not Started",
  },
];

function MyWorkouts() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold tracking-widest text-lime-400">
                YOUR TRAINING
              </span>

              <h1 className="mt-3 text-4xl font-black sm:text-5xl">
                My Workouts
              </h1>

              <p className="mt-3 max-w-xl text-slate-400">
                Manage your saved workouts, track your sessions, and
                continue where you left off.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-bold text-slate-950 hover:bg-lime-300">
              <Plus size={20} />
              Create Workout
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Dumbbell className="text-lime-400" size={25} />
            <p className="mt-4 text-sm text-slate-500">Total Workouts</p>
            <h3 className="mt-1 text-3xl font-black">24</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <CheckCircle2 className="text-lime-400" size={25} />
            <p className="mt-4 text-sm text-slate-500">Completed</p>
            <h3 className="mt-1 text-3xl font-black">18</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Clock className="text-lime-400" size={25} />
            <p className="mt-4 text-sm text-slate-500">Training Time</p>
            <h3 className="mt-1 text-3xl font-black">19h</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <Flame className="text-lime-400" size={25} />
            <p className="mt-4 text-sm text-slate-500">Calories Burned</p>
            <h3 className="mt-1 text-3xl font-black">8.4K</h3>
          </div>
        </div>
      </section>

      {/* Workout Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Your Workouts</h2>

          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <CalendarDays size={17} />
            View History
          </button>
        </div>

        <div className="space-y-4">
          {workouts.map((workout) => (
            <div
              key={workout.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-lime-400/40"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
                  <Dumbbell className="text-lime-400" size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{workout.name}</h3>

                    {workout.status === "Completed" && (
                      <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs text-lime-400">
                        Completed
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {workout.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-5 text-xs text-slate-400">
                    <span>{workout.exercises} exercises</span>
                    <span>{workout.duration}</span>
                    <span>{workout.calories} kcal</span>
                  </div>
                </div>

                <div className="w-full lg:w-48">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-slate-500">Progress</span>
                    <span className="font-bold text-lime-400">
                      {workout.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-lime-400"
                      style={{ width: `${workout.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-lime-300">
                    <Play size={16} fill="currentColor" />
                    {workout.progress > 0 && workout.progress < 100
                      ? "Continue"
                      : "Start"}
                  </button>

                  <button className="rounded-xl border border-slate-700 p-3 text-slate-400 hover:text-white">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MyWorkouts;