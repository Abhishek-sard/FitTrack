import React from "react";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  PersonStanding,
  Swords,
  Zap,
} from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and develop a powerful physique with structured strength workouts.",
    level: "All Levels",
    duration: "60 Min",
  },
  {
    icon: Flame,
    title: "Weight Loss",
    description:
      "Burn calories, improve your fitness, and achieve your ideal body with effective fat-loss workouts.",
    level: "Beginner",
    duration: "45 Min",
  },
  {
    icon: HeartPulse,
    title: "Cardio Fitness",
    description:
      "Improve stamina, heart health, and endurance with high-energy cardio training sessions.",
    level: "All Levels",
    duration: "45 Min",
  },
  {
    icon: Zap,
    title: "HIIT Training",
    description:
      "Push your limits with intense interval workouts designed to burn fat and improve performance.",
    level: "Intermediate",
    duration: "30 Min",
  },
  {
    icon: Swords,
    title: "Boxing",
    description:
      "Learn boxing techniques while improving strength, speed, coordination, and confidence.",
    level: "Intermediate",
    duration: "60 Min",
  },
  {
    icon: PersonStanding,
    title: "Personal Training",
    description:
      "Get one-on-one coaching with a customized workout plan designed around your personal goals.",
    level: "All Levels",
    duration: "60 Min",
  },
];

const Programs = () => {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Train Your Way
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              Fitness <span className="text-red-500">Programs</span>
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Choose a program that matches your goals and fitness level.
              Our expert trainers are here to help you every step of the way.
            </p>
          </div>

          <button className="w-fit rounded-md border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:border-red-500 hover:bg-red-500">
            View All Programs →
          </button>
        </div>

        {/* Program Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition duration-500 hover:-translate-y-2 hover:border-red-500"
              >

                {/* Background Number */}
                <span className="absolute -right-3 -top-8 text-8xl font-black text-white/[0.03]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-black uppercase">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-zinc-400">
                  {program.description}
                </p>

                {/* Details */}
                <div className="relative mt-6 flex items-center gap-3 border-t border-zinc-800 pt-5">

                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                    {program.level}
                  </span>

                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">
                    {program.duration}
                  </span>

                </div>

                {/* Button */}
                <button className="relative mt-6 text-sm font-bold uppercase tracking-wide text-red-500 transition group-hover:text-white">
                  Explore Program
                  <span className="ml-2 transition-all group-hover:ml-4">
                    →
                  </span>
                </button>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Programs;