import {
  Dumbbell,
  HeartPulse,
  Users,
  Timer,
  ShowerHead,
  Car,
  Utensils,
  LockKeyhole,
} from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and improve your overall fitness with modern equipment.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Training",
    description:
      "Improve your heart health and endurance with treadmills, cycles, and cardio machines.",
  },
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Get professional guidance and customized workout plans from experienced trainers.",
  },
  {
    icon: Timer,
    title: "Group Classes",
    description:
      "Stay motivated with energetic group workouts and fitness training sessions.",
  },
];

const facilities = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "Professional machines and high-quality fitness equipment.",
  },
  {
    icon: ShowerHead,
    title: "Clean Showers",
    description: "Clean and comfortable shower and changing facilities.",
  },
  {
    icon: Car,
    title: "Parking Area",
    description: "Convenient and secure parking space for our members.",
  },
  {
    icon: Utensils,
    title: "Nutrition Support",
    description: "Guidance and advice to help you maintain a healthy diet.",
  },
  {
    icon: LockKeyhole,
    title: "Personal Lockers",
    description: "Secure lockers to safely store your personal belongings.",
  },
  {
    icon: Timer,
    title: "Flexible Hours",
    description: "Convenient opening hours designed for your busy lifestyle.",
  },
];

const Services = () => {
  return (
    <section className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            What We Offer
          </p>

          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Our <span className="text-red-500">Services</span>
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">
            Everything you need to achieve your fitness goals and become
            the strongest version of yourself.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-xl border border-zinc-800 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-red-500"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-500/10 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Facilities Heading */}
        <div className="mt-24 mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Premium Experience
          </p>

          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Our <span className="text-red-500">Facilities</span>
          </h2>
        </div>

        {/* Facilities */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                key={index}
                className="flex gap-5 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-600"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;