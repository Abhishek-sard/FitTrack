import React from "react";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Award,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Dumbbell,
  Flame,
  Footprints,
  Goal,
  HeartPulse,
  Medal,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Weight,
  Zap,
} from "lucide-react";

const Progress = () => {
  const stats = [
    {
      title: "Current Weight",
      value: "72.5",
      unit: "kg",
      change: "-2.5 kg",
      description: "Since starting",
      icon: Weight,
      trend: "down",
    },
    {
      title: "Body Fat",
      value: "18.5",
      unit: "%",
      change: "-2.1%",
      description: "Since last month",
      icon: HeartPulse,
      trend: "down",
    },
    {
      title: "Workouts",
      value: "24",
      unit: "",
      change: "+8",
      description: "This month",
      icon: Dumbbell,
      trend: "up",
    },
    {
      title: "Day Streak",
      value: "12",
      unit: "days",
      change: "🔥 Active",
      description: "Keep going!",
      icon: Flame,
      trend: "up",
    },
  ];

  const strengthData = [
    {
      exercise: "Bench Press",
      start: "40 kg",
      current: "60 kg",
      progress: "+50%",
      percentage: 75,
    },
    {
      exercise: "Squat",
      start: "50 kg",
      current: "80 kg",
      progress: "+60%",
      percentage: 82,
    },
    {
      exercise: "Deadlift",
      start: "60 kg",
      current: "100 kg",
      progress: "+66%",
      percentage: 90,
    },
    {
      exercise: "Shoulder Press",
      start: "20 kg",
      current: "30 kg",
      progress: "+50%",
      percentage: 70,
    },
  ];

  const weeklyActivity = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 60 },
    { day: "Wed", value: 95 },
    { day: "Thu", value: 45 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 30 },
  ];

  const goals = [
    {
      title: "Lose 5 kg",
      current: "2.5 kg lost",
      target: "5 kg",
      percentage: 50,
      icon: TrendingDown,
    },
    {
      title: "Bench Press 70 kg",
      current: "60 kg",
      target: "70 kg",
      percentage: 86,
      icon: Dumbbell,
    },
    {
      title: "Complete 100 Workouts",
      current: "82 workouts",
      target: "100 workouts",
      percentage: 82,
      icon: Target,
    },
  ];

  const records = [
    {
      exercise: "Bench Press",
      value: "60 kg",
      icon: Dumbbell,
    },
    {
      exercise: "Squat",
      value: "80 kg",
      icon: Activity,
    },
    {
      exercise: "Deadlift",
      value: "100 kg",
      icon: Zap,
    },
    {
      exercise: "5K Run",
      value: "27:42",
      icon: Footprints,
    },
    {
      exercise: "Plank",
      value: "3:25",
      icon: Clock3,
    },
  ];

  const achievements = [
    {
      title: "7 Day Streak",
      description: "Worked out for 7 consecutive days",
      icon: Flame,
    },
    {
      title: "50 Workouts",
      description: "Completed your first 50 workouts",
      icon: Dumbbell,
    },
    {
      title: "100kg Deadlift",
      description: "Reached your first 100kg deadlift",
      icon: Trophy,
    },
    {
      title: "First 5K",
      description: "Completed your first 5 kilometer run",
      icon: Medal,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background Glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
              <BarChart3 size={16} />
              Your Fitness Dashboard
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Your{" "}
              <span className="text-lime-400">
                Progress
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Every workout counts. Every improvement matters.
              Track your journey, celebrate your achievements,
              and keep pushing yourself forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-lime-300">
                <Target size={18} />
                Update Progress
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-lime-400/40 hover:bg-white/10">
                <CalendarDays size={18} />
                View History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* =====================================================
            STATS
        ====================================================== */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Overview
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Your Current Stats
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                      <Icon className="text-lime-400" size={23} />
                    </div>

                    <div
                      className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                        stat.trend === "up"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : "bg-lime-400/10 text-lime-400"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUp size={13} />
                      ) : (
                        <ArrowDown size={13} />
                      )}
                      {stat.change}
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-slate-400">
                    {stat.title}
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-3xl font-black">
                      {stat.value}
                    </span>

                    <span className="mb-1 text-sm text-slate-400">
                      {stat.unit}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            WEIGHT PROGRESS
        ====================================================== */}
        <section className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10">
                    <TrendingDown
                      className="text-lime-400"
                      size={21}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      Weight Progress
                    </h2>

                    <p className="text-sm text-slate-400">
                      Your weight over the last 6 months
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-lime-400/10 px-4 py-3">
                <p className="text-xs text-slate-400">
                  Total Change
                </p>

                <p className="text-xl font-bold text-lime-400">
                  -2.5 kg
                </p>
              </div>
            </div>

            {/* Fake Chart */}
            <div className="mt-10">
              <div className="relative h-72">

                {/* Horizontal Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[75, 74, 73, 72, 71].map((weight) => (
                    <div
                      key={weight}
                      className="flex items-center gap-3"
                    >
                      <span className="w-8 text-xs text-slate-500">
                        {weight}
                      </span>

                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="absolute bottom-8 left-12 right-0 top-2">
                  <svg
                    viewBox="0 0 600 220"
                    className="h-full w-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#a3e635"
                          stopOpacity="0.3"
                        />

                        <stop
                          offset="100%"
                          stopColor="#a3e635"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 35 L100 55 L200 75 L300 95 L400 125 L500 150 L600 175 L600 220 L0 220 Z"
                      fill="url(#progressGradient)"
                    />

                    <path
                      d="M0 35 L100 55 L200 75 L300 95 L400 125 L500 150 L600 175"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-lime-400"
                    />

                    {[
                      [0, 35],
                      [100, 55],
                      [200, 75],
                      [300, 95],
                      [400, 125],
                      [500, 150],
                      [600, 175],
                    ].map(([cx, cy], index) => (
                      <circle
                        key={index}
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="#a3e635"
                        stroke="#020617"
                        strokeWidth="3"
                      />
                    ))}
                  </svg>
                </div>
              </div>

              <div className="ml-12 mt-3 grid grid-cols-7 text-center text-xs text-slate-500">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STRENGTH + WEEKLY ACTIVITY
        ====================================================== */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Strength Progress */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Dumbbell
                    className="text-emerald-400"
                    size={21}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Strength Progress
                  </h2>

                  <p className="text-sm text-slate-400">
                    Your biggest strength improvements
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {strengthData.map((item) => (
                <div key={item.exercise}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      {item.exercise}
                    </span>

                    <span className="text-sm font-bold text-lime-400">
                      {item.progress}
                    </span>
                  </div>

                  <div className="mb-2 flex justify-between text-xs text-slate-500">
                    <span>Start: {item.start}</span>
                    <span>Current: {item.current}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-400"
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/10">
                  <Activity
                    className="text-orange-400"
                    size={21}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Weekly Activity
                  </h2>

                  <p className="text-sm text-slate-400">
                    Your workout activity this week
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-64 items-end justify-between gap-3">
              {weeklyActivity.map((item) => (
                <div
                  key={item.day}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                >
                  <div className="relative flex h-full w-full items-end justify-center">
                    <div
                      className="w-full max-w-10 rounded-t-xl bg-gradient-to-t from-lime-500 to-lime-300 transition-all duration-500 hover:from-emerald-500 hover:to-lime-300"
                      style={{
                        height: `${item.value}%`,
                      }}
                    />
                  </div>

                  <span className="text-xs font-medium text-slate-500">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GOALS
        ====================================================== */}
        <section className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Goals
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Keep Moving Forward
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {goals.map((goal) => {
              const Icon = goal.icon;

              return (
                <div
                  key={goal.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/30"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10">
                      <Icon
                        className="text-lime-400"
                        size={21}
                      />
                    </div>

                    <span className="text-2xl font-black text-lime-400">
                      {goal.percentage}%
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold">
                    {goal.title}
                  </h3>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-400"
                      style={{
                        width: `${goal.percentage}%`,
                      }}
                    />
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-slate-500">
                    <span>{goal.current}</span>
                    <span>Goal: {goal.target}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            PERSONAL RECORDS + ACHIEVEMENTS
        ====================================================== */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Personal Records */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10">
                <Trophy
                  className="text-yellow-400"
                  size={21}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Personal Records
                </h2>

                <p className="text-sm text-slate-400">
                  Your best performances
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {records.map((record) => {
                const Icon = record.icon;

                return (
                  <div
                    key={record.exercise}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-lime-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400/10">
                        <Icon
                          size={17}
                          className="text-lime-400"
                        />
                      </div>

                      <span className="text-sm font-medium">
                        {record.exercise}
                      </span>
                    </div>

                    <span className="font-bold text-lime-400">
                      {record.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10">
                <Award
                  className="text-purple-400"
                  size={21}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Achievements
                </h2>

                <p className="text-sm text-slate-400">
                  Milestones you've unlocked
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;

                return (
                  <div
                    key={achievement.title}
                    className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-400/10">
                      <Icon
                        size={20}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">
                          {achievement.title}
                        </h3>

                        <CheckCircle2
                          size={15}
                          className="text-emerald-400"
                        />
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            WEEKLY SUMMARY
        ====================================================== */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-emerald-400/5 to-transparent p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                  Weekly Summary
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Great work this week! 🔥
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  You're building a strong habit. Keep your
                  momentum going and you'll reach your goals
                  faster than you think.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center">
                  <Dumbbell
                    className="mx-auto text-lime-400"
                    size={20}
                  />
                  <p className="mt-2 text-xl font-black">
                    5
                  </p>
                  <p className="text-xs text-slate-500">
                    Workouts
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center">
                  <Clock3
                    className="mx-auto text-lime-400"
                    size={20}
                  />
                  <p className="mt-2 text-xl font-black">
                    6h
                  </p>
                  <p className="text-xs text-slate-500">
                    Training
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center">
                  <Flame
                    className="mx-auto text-orange-400"
                    size={20}
                  />
                  <p className="mt-2 text-xl font-black">
                    2,840
                  </p>
                  <p className="text-xs text-slate-500">
                    Calories
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-center">
                  <TrendingUp
                    className="mx-auto text-emerald-400"
                    size={20}
                  />
                  <p className="mt-2 text-xl font-black">
                    +8%
                  </p>
                  <p className="text-xs text-slate-500">
                    Strength
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOTIVATION
        ====================================================== */}
        <section className="mt-12 pb-8 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10">
              <Goal
                className="text-lime-400"
                size={27}
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Keep Showing Up.
            </h2>

            <p className="mt-3 text-slate-400">
              The results will follow. Stay consistent,
              stay focused, and become stronger every day.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Progress;