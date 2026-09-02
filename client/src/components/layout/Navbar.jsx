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
                onClick={() => setWorkoutOpen(!workoutOpen)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  workoutOpen
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


              {workoutOpen && (
                <div className="absolute left-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">

                  <DropdownItem
                    label="All Workouts"
                    onClick={() => handleNavigation("/workouts")}
                  />

                  <DropdownItem
                    label="Workout Plans"
                    onClick={() => handleNavigation("/workout-plans")}
                  />

                  <DropdownItem
                    label="Exercises"
                    onClick={() => handleNavigation("/exercises")}
                  />

                  <DropdownItem
                    label="My Workouts"
                    onClick={() => handleNavigation("/my-workouts")}
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
              className="rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>


            {/* Notification */}
            <button
              className="relative rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              aria-label="Notifications"
            >
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
                  <User
                    size={18}
                    className="text-slate-950"
                  />
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
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/profile");
                    }}
                  />

                  <DropdownItem
                    label="Settings"
                    onClick={() => {
                      setProfileOpen(false);
                      navigate("/settings");
                    }}
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
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
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


              {/* Workouts */}
              <MobileNavItem
                label="Workouts"
                to="/workouts"
                active={location.pathname === "/workouts"}
                navigate={handleNavigation}
              />


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
   DROPDOWN ITEM
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
      className={`rounded-xl px-4 py-3 text-left font-medium transition ${
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