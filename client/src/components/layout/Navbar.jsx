import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [workoutOpen, setWorkoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Navigate and close menus
  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
    setWorkoutOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg shadow-lime-500/20">
              <Activity className="h-6 w-6 text-slate-950" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              Fit<span className="text-lime-400">Track</span>
            </h1>
          </button>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden items-center gap-2 lg:flex">

            {/* Home */}
            <NavItem
              label="Home"
              to="/"
              active={location.pathname === "/"}
              navigate={navigate}
            />

            {/* =================================================
                WORKOUT DROPDOWN
            ================================================== */}
            <div className="relative">
              <button
                onClick={() => {
                  setWorkoutOpen(!workoutOpen);
                  setProfileOpen(false);
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  workoutOpen ||
                  location.pathname.startsWith("/workouts/")
                    ? "bg-lime-400/10 text-lime-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-lime-400"
                }`}
              >
                <Dumbbell size={18} />

                Workouts

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    workoutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Workout Dropdown */}
              {workoutOpen && (
                <div className="absolute left-0 top-14 w-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">

                  {/* All Exercises */}
                  <NavDropdownItem
                    label="All Exercises"
                    active={
                      location.pathname === "/workouts/all-exercises"
                    }
                    onClick={() =>
                      handleNavigation("/workouts/all-exercises")
                    }
                  />

                  {/* Exercises */}
                  <NavDropdownItem
                    label="Exercises"
                    active={
                      location.pathname === "/workouts/exercises"
                    }
                    onClick={() =>
                      handleNavigation("/workouts/exercises")
                    }
                  />

                  {/* My Workouts */}
                  <NavDropdownItem
                    label="My Workouts"
                    active={
                      location.pathname === "/workouts/my-workouts"
                    }
                    onClick={() =>
                      handleNavigation("/workouts/my-workouts")
                    }
                  />

                  {/* Workout Plans */}
                  <NavDropdownItem
                    label="Workout Plans"
                    active={
                      location.pathname === "/workouts/plans"
                    }
                    onClick={() =>
                      handleNavigation("/workouts/plans")
                    }
                  />
                </div>
              )}
            </div>

            {/* Nutrition */}
            <NavItem
              label="Nutrition"
              to="/nutrition"
              active={location.pathname === "/nutrition"}
              navigate={navigate}
            />

            {/* Progress */}
            <NavItem
              label="Progress"
              to="/progress"
              active={location.pathname === "/progress"}
              navigate={navigate}
            />

            {/* Community */}
            <NavItem
              label="Community"
              to="/community"
              active={location.pathname === "/community"}
              navigate={navigate}
            />
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* Search */}
            <button
              onClick={() => {
                // You can add a search page later
                console.log("Search clicked");
              }}
              className="rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Notification */}
            <button
              onClick={() => {
                // Notification functionality can be added later
                console.log("Notifications clicked");
              }}
              className="relative rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Notifications"
            >
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-lime-400 ring-2 ring-slate-950" />
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setWorkoutOpen(false);
                }}
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

                <ChevronDown
                  size={16}
                  className={`text-slate-400 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-16 w-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">

                  <DropdownItem
                    label="My Profile"
                    onClick={() => handleNavigation("/profile")}
                  />

                  <DropdownItem
                    label="Settings"
                    onClick={() => handleNavigation("/settings")}
                  />

                  <div className="my-2 border-t border-white/10" />

                  <button
                    onClick={() => setProfileOpen(false)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-3 text-white transition hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {mobileOpen && (
          <div className="border-t border-white/10 py-5 lg:hidden">
            <div className="flex flex-col gap-2">

              {/* Home */}
              <MobileNavItem
                label="Home"
                to="/"
                active={location.pathname === "/"}
                navigate={handleNavigation}
              />

              {/* =================================================
                  MOBILE WORKOUTS
              ================================================== */}
              <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-2">

                <div className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Dumbbell
                      size={16}
                      className="text-lime-400"
                    />

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Workouts
                    </p>
                  </div>
                </div>

                {/* All Exercises */}
                <MobileNavItem
                  label="All Exercises"
                  to="/workouts/all-exercises"
                  active={
                    location.pathname === "/workouts/all-exercises"
                  }
                  navigate={handleNavigation}
                />

                {/* Exercises */}
                <MobileNavItem
                  label="Exercises"
                  to="/workouts/exercises"
                  active={
                    location.pathname === "/workouts/exercises"
                  }
                  navigate={handleNavigation}
                />

                {/* My Workouts */}
                <MobileNavItem
                  label="My Workouts"
                  to="/workouts/my-workouts"
                  active={
                    location.pathname === "/workouts/my-workouts"
                  }
                  navigate={handleNavigation}
                />

                {/* Workout Plans */}
                <MobileNavItem
                  label="Workout Plans"
                  to="/workouts/plans"
                  active={
                    location.pathname === "/workouts/plans"
                  }
                  navigate={handleNavigation}
                />
              </div>

              {/* Nutrition */}
              <MobileNavItem
                label="Nutrition"
                to="/nutrition"
                active={location.pathname === "/nutrition"}
                navigate={handleNavigation}
              />

              {/* Progress */}
              <MobileNavItem
                label="Progress"
                to="/progress"
                active={location.pathname === "/progress"}
                navigate={handleNavigation}
              />

              {/* Community */}
              <MobileNavItem
                label="Community"
                to="/community"
                active={location.pathname === "/community"}
                navigate={handleNavigation}
              />

              {/* Mobile Profile */}
              <div className="mt-3 border-t border-white/10 pt-4">
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="flex w-full items-center gap-3 rounded-xl bg-lime-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
                >
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

/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

const NavItem = ({
  label,
  active = false,
  to,
  navigate,
}) => {
  return (
    <button
      onClick={() => navigate(to)}
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

/* =========================================================
   WORKOUT DROPDOWN ITEM
========================================================= */

const NavDropdownItem = ({
  label,
  onClick,
  active = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-lime-400/10 text-lime-400"
          : "text-slate-300 hover:bg-lime-400/10 hover:text-lime-400"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>

        {active && (
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
        )}
      </div>
    </button>
  );
};

/* =========================================================
   PROFILE DROPDOWN ITEM
========================================================= */

const DropdownItem = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-lime-400/10 hover:text-lime-400"
    >
      {label}
    </button>
  );
};

/* =========================================================
   MOBILE NAV ITEM
========================================================= */

const MobileNavItem = ({
  label,
  to,
  active = false,
  navigate,
}) => {
  return (
    <button
      onClick={() => navigate(to)}
      className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
        active
          ? "bg-lime-400/10 text-lime-400"
          : "text-slate-300 hover:bg-lime-400/10 hover:text-lime-400"
      }`}
    >
      {label}
    </button>
  );
};

export default Navbar;