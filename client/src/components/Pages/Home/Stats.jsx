import React from "react";
import { Users, Dumbbell, Award, CalendarDays } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5K+",
    title: "Happy Members",
  },
  {
    icon: CalendarDays,
    number: "10+",
    title: "Years Experience",
  },
  {
    icon: Dumbbell,
    number: "25+",
    title: "Expert Trainers",
  },
  {
    icon: Award,
    number: "15+",
    title: "Fitness Programs",
  },
];

const Stats = () => {
  return (
    <section className="border-y border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="group flex items-center justify-center gap-4 border-zinc-800 px-5 py-6
              first:border-r
              last:border-l
              sm:border-r
              lg:border-r
              lg:last:border-r-0"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                <Icon size={24} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  {stat.number}
                </h3>

                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Stats;