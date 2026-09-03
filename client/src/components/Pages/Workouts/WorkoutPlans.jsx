import  { useState } from "react";
import {
  CalendarDays,
  Clock,
  Dumbbell,
  Flame,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

const plans = [
  {
    title: "Beginner Fitness",
    description:
      "Build a strong foundation and develop healthy training habits.",
    level: "Beginner",
    duration: "4 Weeks",
    days: "3 Days / Week",
    goal: "General Fitness",
    calories: "300-450",
    rating: "4.9",
    featured: true,
  },
  {
    title: "Muscle Builder",
    description:
      "A progressive strength program designed to build lean muscle.",
    level: "Intermediate",
    duration: "8 Weeks",
    days: "5 Days / Week",
    goal: "Muscle Gain",
    calories: "400-600",
    rating: "4.9",
    featured: true,
  },
  {
    title: "Fat Loss Program",
    description:
      "Combine strength and cardio sessions to increase calorie burn.",
    level: "Intermediate",
    duration: "6 Weeks",
    days: "5 Days / Week",
    goal: "Fat Loss",
    calories: "450-700",
    rating: "4.8",
    featured: false,
  },
  {
    title: "Strength Builder",
    description:
      "Improve your major lifts and build serious full-body strength.",
    level: "Advanced",
    duration: "10 Weeks",
    days: "4 Days / Week",
    goal: "Strength",
    calories: "400-650",
    rating: "4.9",
    featured: false,
  },
  {
    title: "Home Workout",
    description:
      "Effective workouts that require little or no gym equipment.",
    level: "Beginner",
    duration: "4 Weeks",
    days: "4 Days / Week",
    goal: "Home Fitness",
    calories: "300-500",
    rating: "4.7",
    featured: false,
  },
  {
    title: "Athletic Performance",
    description:
      "Improve power, speed, mobility, and overall athletic performance.",
    level: "Advanced",
    duration: "8 Weeks",
    days: "5 Days / Week",
    goal: "Performance",
    calories: "500-750",
    rating: "4.9",
    featured: false,
  },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced"];

function WorkoutPlans() {
  const [filter, setFilter] = useState("All");

  const filteredPlans =
    filter === "All"
      ? plans
      : plans.filter((plan) => plan.level === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="rounded-full bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-400">
              TRAINING PROGRAMS
            </span>

            <h1 className="mt-6 text-5xl font-black sm:text-6xl">
              Workout <span className="text-lime-400">Plans</span>
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Follow structured programs designed around your goals,
              experience level, and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                filter === item
                  ? "bg-lime-400 text-slate-950"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative overflow-hidden rounded-2xl border bg-slate-900 p-6 transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-lime-400/50"
                  : "border-slate-800"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-lime-400 px-4 py-2 text-xs font-black text-slate-950">
                  POPULAR
                </div>
              )}

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/10">
                <Dumbbell className="text-lime-400" size={27} />
              </div>

              <h2 className="mt-6 text-2xl font-black">{plan.title}</h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm">
                <Star
                  size={16}
                  className="fill-lime-400 text-lime-400"
                />
                <span className="font-bold">{plan.rating}</span>
                <span className="text-slate-500">rating</span>
              </div>

              <div className="my-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-950 p-4">
                  <CalendarDays
                    size={18}
                    className="text-lime-400"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Duration
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {plan.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <Clock size={18} className="text-lime-400" />
                  <p className="mt-2 text-xs text-slate-500">
                    Schedule
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {plan.days}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <Flame size={18} className="text-lime-400" />
                  <p className="mt-2 text-xs text-slate-500">
                    Calories
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {plan.calories}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <Dumbbell size={18} className="text-lime-400" />
                  <p className="mt-2 text-xs text-slate-500">
                    Goal
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {plan.goal}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">
                <Check size={17} className="text-lime-400" />
                Personalized progression
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 font-bold text-slate-950 transition hover:bg-lime-300">
                View Plan
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WorkoutPlans;