import React from "react";
import {
  Apple,
  Beef,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Droplets,
  Egg,
  Flame,
  Fish,
  GlassWater,
  Leaf,
  Plus,
  Salad,
  Target,
  Utensils,
  Wheat,
  Zap,
} from "lucide-react";

const Nutrition = () => {
  // =========================
  // NUTRITION STATS
  // =========================
  const nutritionStats = [
    {
      title: "Calories",
      current: "1,840",
      target: "2,400",
      unit: "kcal",
      percentage: 77,
      icon: Flame,
      iconBg: "bg-orange-400/10",
      iconColor: "text-orange-400",
      bar: "from-orange-400 to-red-400",
    },
    {
      title: "Protein",
      current: "132",
      target: "160",
      unit: "g",
      percentage: 82,
      icon: Beef,
      iconBg: "bg-lime-400/10",
      iconColor: "text-lime-400",
      bar: "from-lime-400 to-emerald-400",
    },
    {
      title: "Carbohydrates",
      current: "185",
      target: "250",
      unit: "g",
      percentage: 74,
      icon: Wheat,
      iconBg: "bg-yellow-400/10",
      iconColor: "text-yellow-400",
      bar: "from-yellow-400 to-orange-400",
    },
    {
      title: "Fats",
      current: "54",
      target: "70",
      unit: "g",
      percentage: 77,
      icon: Salad,
      iconBg: "bg-emerald-400/10",
      iconColor: "text-emerald-400",
      bar: "from-emerald-400 to-cyan-400",
    },
  ];

  // =========================
  // MEALS
  // =========================
  const meals = [
    {
      name: "Breakfast",
      time: "8:00 AM",
      calories: "420",
      description: "Oatmeal, Banana & Eggs",
      icon: Coffee,
      iconBg: "bg-yellow-400/10",
      iconColor: "text-yellow-400",
      completed: true,
    },
    {
      name: "Lunch",
      time: "1:00 PM",
      calories: "650",
      description: "Chicken, Brown Rice & Vegetables",
      icon: Utensils,
      iconBg: "bg-lime-400/10",
      iconColor: "text-lime-400",
      completed: true,
    },
    {
      name: "Snack",
      time: "4:30 PM",
      calories: "280",
      description: "Greek Yogurt & Almonds",
      icon: Apple,
      iconBg: "bg-red-400/10",
      iconColor: "text-red-400",
      completed: true,
    },
    {
      name: "Dinner",
      time: "8:00 PM",
      calories: "490",
      description: "Grilled Chicken, Salad & Rice",
      icon: Salad,
      iconBg: "bg-emerald-400/10",
      iconColor: "text-emerald-400",
      completed: false,
    },
  ];

  // =========================
  // RECOMMENDED FOODS
  // =========================
  const recommendedFoods = [
    {
      name: "Chicken Breast",
      category: "High Protein",
      calories: "165 kcal",
      icon: Beef,
    },
    {
      name: "Eggs",
      category: "High Protein",
      calories: "155 kcal",
      icon: Egg,
    },
    {
      name: "Brown Rice",
      category: "Healthy Carbs",
      calories: "216 kcal",
      icon: Wheat,
    },
    {
      name: "Greek Yogurt",
      category: "High Protein",
      calories: "100 kcal",
      icon: Salad,
    },
    {
      name: "Tuna",
      category: "High Protein",
      calories: "132 kcal",
      icon: Fish,
    },
    {
      name: "Vegetables",
      category: "Healthy Food",
      calories: "65 kcal",
      icon: Leaf,
    },
  ];

  // =========================
  // MEAL SUGGESTIONS
  // =========================
  const mealSuggestions = [
    {
      title: "High Protein Breakfast",
      description: "Eggs + Oats + Banana",
      calories: "520 kcal",
      protein: "32g protein",
      icon: Coffee,
    },
    {
      title: "Balanced Lunch",
      description: "Chicken + Brown Rice + Vegetables",
      calories: "680 kcal",
      protein: "45g protein",
      icon: Utensils,
    },
    {
      title: "Post Workout",
      description: "Protein Shake + Banana",
      calories: "320 kcal",
      protein: "28g protein",
      icon: Zap,
    },
    {
      title: "Healthy Dinner",
      description: "Chicken + Salad + Sweet Potato",
      calories: "540 kcal",
      protein: "40g protein",
      icon: Salad,
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
              <Apple size={16} />
              Nutrition Dashboard
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Fuel Your{" "}
              <span className="text-lime-400">
                Progress
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Eat smarter. Train harder. Recover better.
              Track your daily nutrition and stay on top of
              your fitness goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-lime-300">
                <Plus size={18} />
                Log Food
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-lime-400/40 hover:bg-white/10">
                <Droplets size={18} />
                Add Water
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
            DAILY OVERVIEW
        ====================================================== */}
        <section>

          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Today's Nutrition
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Daily Overview
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <CalendarDays size={17} />
              September 2, 2026
            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {nutritionStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.05]"
                >

                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}
                    >
                      <Icon
                        size={23}
                        className={stat.iconColor}
                      />
                    </div>

                    <span className="text-sm font-bold text-slate-400">
                      {stat.percentage}%
                    </span>

                  </div>

                  <p className="mt-6 text-sm text-slate-400">
                    {stat.title}
                  </p>

                  <div className="mt-1 flex items-end gap-2">

                    <span className="text-3xl font-black">
                      {stat.current}
                    </span>

                    <span className="mb-1 text-sm text-slate-500">
                      / {stat.target} {stat.unit}
                    </span>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">

                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                      style={{
                        width: `${stat.percentage}%`,
                      }}
                    />

                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.target - stat.current} {stat.unit} remaining
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            CALORIE GOAL + WATER
        ====================================================== */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Calorie Goal */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/10">
                  <Flame
                    size={21}
                    className="text-orange-400"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Daily Calorie Goal
                  </h2>

                  <p className="text-sm text-slate-400">
                    Weight Loss Goal
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
                77%
              </span>

            </div>

            <div className="mt-8 flex items-end justify-between">

              <div>
                <span className="text-5xl font-black">
                  1,840
                </span>

                <span className="ml-2 text-slate-500">
                  kcal
                </span>
              </div>

              <p className="text-sm text-slate-500">
                of 2,400 kcal
              </p>

            </div>

            <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/5">

              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-lime-400"
                style={{ width: "77%" }}
              />

            </div>

            <div className="mt-4 flex justify-between text-sm">

              <span className="text-slate-400">
                Consumed:{" "}
                <span className="font-semibold text-white">
                  1,840
                </span>
              </span>

              <span className="text-lime-400">
                560 kcal remaining
              </span>

            </div>

          </div>

          {/* Water */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                <Droplets
                  size={21}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Water Intake
                </h2>

                <p className="text-sm text-slate-400">
                  Stay hydrated throughout the day
                </p>
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <div>

                <span className="text-4xl font-black">
                  1.8
                </span>

                <span className="ml-2 text-slate-500">
                  / 3.0 L
                </span>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10">
                <GlassWater
                  size={25}
                  className="text-cyan-400"
                />
              </div>

            </div>

            {/* Water glasses */}
            <div className="mt-6 flex gap-2">

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                (glass) => (
                  <div
                    key={glass}
                    className={`h-9 flex-1 rounded-lg border ${
                      glass <= 6
                        ? "border-cyan-400/30 bg-cyan-400/20"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  />
                )
              )}

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-sm text-slate-400">
                6 / 10 glasses
              </span>

              <button className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                <Plus size={15} />
                Add Water
              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            TODAY'S MEALS
        ====================================================== */}
        <section className="mt-12">

          <div className="mb-6 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Food Journal
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Today's Meals
              </h2>
            </div>

            <button className="hidden items-center gap-2 text-sm font-semibold text-lime-400 sm:flex">
              View All
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="grid gap-4">

            {meals.map((meal) => {
              const Icon = meal.icon;

              return (
                <div
                  key={meal.name}
                  className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-lime-400/30 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${meal.iconBg}`}
                    >
                      <Icon
                        size={24}
                        className={meal.iconColor}
                      />
                    </div>

                    <div>

                      <div className="flex items-center gap-2">

                        <h3 className="font-bold">
                          {meal.name}
                        </h3>

                        {meal.completed && (
                          <CheckCircle2
                            size={16}
                            className="text-emerald-400"
                          />
                        )}

                      </div>

                      <p className="mt-1 text-sm text-slate-400">
                        {meal.description}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {meal.time}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center justify-between sm:justify-end sm:gap-6">

                    <div className="text-left sm:text-right">
                      <p className="text-lg font-bold">
                        {meal.calories}
                      </p>

                      <p className="text-xs text-slate-500">
                        kcal
                      </p>
                    </div>

                    <button
                      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        meal.completed
                          ? "border border-white/10 text-slate-400 hover:bg-white/5"
                          : "bg-lime-400 text-slate-950 hover:bg-lime-300"
                      }`}
                    >
                      {meal.completed ? "Edit" : "Add Food"}
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            MACRONUTRIENTS
        ====================================================== */}
        <section className="mt-12">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Nutrition Breakdown
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Macronutrients
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                See how your calories are distributed across
                your macros.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

              {/* Protein */}
              <div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-lime-400" />
                    <span className="font-semibold">
                      Protein
                    </span>
                  </div>

                  <span className="text-sm text-slate-400">
                    132 / 160g
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-lime-400"
                    style={{ width: "82%" }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  82% of daily target
                </p>

              </div>

              {/* Carbs */}
              <div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="font-semibold">
                      Carbohydrates
                    </span>
                  </div>

                  <span className="text-sm text-slate-400">
                    185 / 250g
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-yellow-400"
                    style={{ width: "74%" }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  74% of daily target
                </p>

              </div>

              {/* Fats */}
              <div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="font-semibold">
                      Fats
                    </span>
                  </div>

                  <span className="text-sm text-slate-400">
                    54 / 70g
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: "77%" }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  77% of daily target
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            RECOMMENDED FOODS
        ====================================================== */}
        <section className="mt-12">

          <div className="mb-6">

            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Smart Choices
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Recommended Foods
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {recommendedFoods.map((food) => {
              const Icon = food.icon;

              return (
                <div
                  key={food.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-lime-400/30"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                      <Icon
                        size={22}
                        className="text-lime-400"
                      />
                    </div>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-lime-400/30 hover:text-lime-400">
                      <Plus size={17} />
                    </button>

                  </div>

                  <h3 className="mt-5 font-bold">
                    {food.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {food.category}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-lime-400">
                    {food.calories}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            MEAL SUGGESTIONS
        ====================================================== */}
        <section className="mt-12">

          <div className="mb-6 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Personalized
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Meal Suggestions
              </h2>
            </div>

            <button className="hidden items-center gap-2 text-sm font-semibold text-lime-400 sm:flex">
              Explore Meals
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {mealSuggestions.map((meal) => {
              const Icon = meal.icon;

              return (
                <div
                  key={meal.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/30 hover:bg-white/[0.05]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                      <Icon
                        size={22}
                        className="text-emerald-400"
                      />
                    </div>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-lime-400/30 hover:text-lime-400">
                      <Plus size={17} />
                    </button>

                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {meal.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {meal.description}
                  </p>

                  <div className="mt-5 flex gap-3">

                    <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-400">
                      {meal.calories}
                    </span>

                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      {meal.protein}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* =====================================================
            NUTRITION GOALS
        ====================================================== */}
        <section className="mt-12">

          <div className="overflow-hidden rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-emerald-400/5 to-transparent p-6 sm:p-8">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-md">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                  <Target
                    size={23}
                    className="text-lime-400"
                  />
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  Your Nutrition Goals
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Stay consistent with your nutrition and
                  you'll be one step closer to reaching your
                  fitness goals.
                </p>

              </div>

              <div className="w-full max-w-xl space-y-5">

                {/* Goal 1 */}
                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">
                      Daily Protein
                    </span>

                    <span className="text-lime-400">
                      82%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-lime-400"
                      style={{ width: "82%" }}
                    />
                  </div>

                </div>

                {/* Goal 2 */}
                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">
                      Daily Water
                    </span>

                    <span className="text-cyan-400">
                      60%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: "60%" }}
                    />
                  </div>

                </div>

                {/* Goal 3 */}
                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">
                      Healthy Meals
                    </span>

                    <span className="text-emerald-400">
                      90%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: "90%" }}
                    />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WEEKLY SUMMARY
        ====================================================== */}
        <section className="mt-12 pb-10">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <div className="mb-8">

              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Weekly Nutrition
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                This Week
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <Flame className="text-orange-400" size={22} />

                <p className="mt-4 text-2xl font-black">
                  2,210
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Avg. Calories
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <Beef className="text-lime-400" size={22} />

                <p className="mt-4 text-2xl font-black">
                  145g
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Avg. Protein
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <Droplets className="text-cyan-400" size={22} />

                <p className="mt-4 text-2xl font-black">
                  2.6L
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Avg. Water
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <Salad className="text-emerald-400" size={22} />

                <p className="mt-4 text-2xl font-black">
                  32
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Healthy Meals
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Nutrition;