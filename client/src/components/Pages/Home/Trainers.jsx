
const trainers = [
  {
    name: "Alex Johnson",
    role: "Strength & Conditioning Coach",
    experience: "8 Years Experience",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Fitness & Weight Loss Coach",
    experience: "6 Years Experience",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Michael Carter",
    role: "Bodybuilding Coach",
    experience: "10 Years Experience",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emma Wilson",
    role: "Yoga & Mobility Coach",
    experience: "7 Years Experience",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  },
];

const Trainers = () => {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Meet The Experts
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              Our <span className="text-red-500">Trainers</span>
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Train with experienced professionals who will push you,
              motivate you, and help you reach your fitness goals.
            </p>
          </div>

          <button className="w-fit rounded-md border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:border-red-500 hover:bg-red-500">
            View All Trainers →
          </button>

        </div>

        {/* Trainer Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-950"
            >

              {/* Trainer Image */}
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Experience */}
                <div className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-2 text-xs font-bold uppercase">
                  {trainer.experience}
                </div>

                {/* Social Icons */}
                <div className="absolute right-4 top-4 flex translate-x-16 flex-col gap-2 transition duration-300 group-hover:translate-x-0">


                </div>

                {/* Trainer Info */}
                <div className="absolute bottom-0 left-0 w-full p-6">

                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-500">
                    {trainer.role}
                  </p>

                  <h3 className="text-2xl font-black uppercase">
                    {trainer.name}
                  </h3>

                </div>

              </div>

              {/* Bottom Red Line */}
              <div className="h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Trainers;