import { Check, X, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "1,500",
    description: "Perfect for beginners starting their fitness journey.",
    icon: "🏋️",
    popular: false,
    features: [
      { text: "Full Gym Access", available: true },
      { text: "Cardio Equipment", available: true },
      { text: "Locker Access", available: true },
      { text: "Group Classes", available: false },
      { text: "Personal Trainer", available: false },
      { text: "Nutrition Plan", available: false },
    ],
  },
  {
    name: "Pro",
    price: "2,500",
    description: "Everything you need to reach your fitness goals faster.",
    icon: "🔥",
    popular: true,
    features: [
      { text: "Full Gym Access", available: true },
      { text: "Cardio Equipment", available: true },
      { text: "Locker Access", available: true },
      { text: "Group Classes", available: true },
      { text: "Personal Trainer", available: false },
      { text: "Nutrition Plan", available: true },
    ],
  },
  {
    name: "Premium",
    price: "4,000",
    description: "The ultimate fitness experience with personalized coaching.",
    icon: "👑",
    popular: false,
    features: [
      { text: "Full Gym Access", available: true },
      { text: "Cardio Equipment", available: true },
      { text: "Locker Access", available: true },
      { text: "Group Classes", available: true },
      { text: "Personal Trainer", available: true },
      { text: "Nutrition Plan", available: true },
    ],
  },
];

const Membership = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Choose Your Plan
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            Membership <span className="text-red-500">Plans</span>
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">
            Choose the membership that fits your goals, lifestyle, and
            training needs. No matter your level, we've got a plan for you.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid gap-7 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-red-500 bg-zinc-900 shadow-2xl shadow-red-500/10"
                  : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-600"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-red-500 px-5 py-2 text-xs font-black uppercase tracking-wider">
                  <Crown size={14} />
                  Most Popular
                </div>
              )}

              {/* Plan Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-black uppercase">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-400">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-7 border-b border-zinc-800 pb-7">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black">
                    Rs. {plan.price}
                  </span>

                  <span className="mb-2 text-sm text-zinc-500">
                    / month
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-7 space-y-4">

                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                  >
                    {feature.available ? (
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <Check size={13} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-600">
                        <X size={13} />
                      </div>
                    )}

                    <span
                      className={`text-sm ${
                        feature.available
                          ? "text-zinc-300"
                          : "text-zinc-600 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}

              </div>

              {/* Button */}
              <button
                className={`mt-9 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-black uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "border border-zinc-700 bg-transparent text-white hover:border-red-500 hover:bg-red-500"
                }`}
              >
                Choose {plan.name}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            ✓ No hidden fees &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓
            Flexible payment options
          </p>
        </div>

      </div>
    </section>
  );
};

export default Membership;