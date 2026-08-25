import { useState } from "react";
import {
  Activity,
  Bell,
  ChevronDown,
  Dumbbell,
  Menu,
  Search,
  User,
  X,
} from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workoutOpen, setWorkoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg shadow-lime-500/20">
              <Activity className="h-6 w-6 text-slate-950" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              Fit<span className="text-lime-400">Track</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            <NavItem label="Home" active />

            {/* Workout Dropdown */}
            <div className="relative">
              <button
                onClick={() => setWorkoutOpen(!workoutOpen)}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-lime-400"
              >
                <Dumbbell size={18} />
                Workouts
                <ChevronDown
                  size={16}
                  className={`transition ${
                    workoutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {workoutOpen && (
                <div className="absolute left-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
                  <DropdownItem label="All Workouts" />
                  <DropdownItem label="Workout Plans" />
                  <DropdownItem label="Exercises" />
                  <DropdownItem label="My Workouts" />
                </div>
              )}
            </div>

            <NavItem label="Nutrition" />
            <NavItem label="Progress" />
            <NavItem label="Community" />
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Search */}
            <button className="rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white">
              <Search size={20} />
            </button>

            {/* Notification */}
            <button className="relative rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-lime-400 ring-2 ring-slate-950" />
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-lime-400/50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500">
                  <User size={18} className="text-slate-950" />
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    Abhishek
                  </p>
                  <p className="text-xs text-slate-400">
                    Fitness Member
                  </p>
                </div>

                <ChevronDown size={16} className="text-slate-400" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-16 w-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
                  <DropdownItem label="My Profile" />
                  <DropdownItem label="Settings" />

                  <div className="my-2 border-t border-white/10" />

                  <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-3 text-white lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              <MobileNavItem label="Home" />
              <MobileNavItem label="Workouts" />
              <MobileNavItem label="Nutrition" />
              <MobileNavItem label="Progress" />
              <MobileNavItem label="Community" />

              <div className="mt-3 border-t border-white/10 pt-4">
                <button className="flex w-full items-center gap-3 rounded-xl bg-lime-400 px-4 py-3 font-semibold text-slate-950">
                  <User size={18} />
                  My Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ label, active }) => {
  return (
    <button
      className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-lime-400/10 text-lime-400"
          : "text-slate-300 hover:bg-white/5 hover:text-lime-400"
      }`}
    >
      {label}

      {active && (
        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400" />
      )}
    </button>
  );
};

const DropdownItem = ({ label }) => {
  return (
    <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-lime-400/10 hover:text-lime-400">
      {label}
    </button>
  );
};

const MobileNavItem = ({ label }) => {
  return (
    <button className="rounded-xl px-4 py-3 text-left font-medium text-slate-300 transition hover:bg-lime-400/10 hover:text-lime-400">
      {label}
    </button>
  );
};

export default Navbar;