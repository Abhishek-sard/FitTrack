
const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">

        <div className="max-w-3xl">

          {/* Small Heading */}
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Train Hard. Stay Strong.
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Build Your
            <span className="block text-red-500">
              Best Body
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Push your limits, build your strength, and transform your body
            with professional trainers, modern equipment, and a community
            that keeps you motivated.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <button className="group rounded-md bg-red-600 px-8 py-4 font-bold uppercase tracking-wide transition duration-300 hover:bg-red-700">
              Join Now
              <span className="ml-3 transition group-hover:ml-5">
                →
              </span>
            </button>

            <button className="rounded-md border border-white/40 px-8 py-4 font-bold uppercase tracking-wide backdrop-blur-sm transition duration-300 hover:border-red-500 hover:bg-red-500">
              Explore Programs
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/20 pt-7">

            <div>
              <h3 className="text-3xl font-black">
                10+
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">
                5K+
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Happy Members
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black">
                25+
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Expert Trainers
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center md:flex">

        <span className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-400">
          Scroll
        </span>

        <div className="h-10 w-px animate-pulse bg-red-500" />

      </div>

    </main>
  );
};

export default Home;