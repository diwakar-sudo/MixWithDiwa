import { Link, useLocation } from "react-router-dom";
import {
  Music2,
  LayoutDashboard,
  Wand2,
  LogIn,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-cyan-400 font-semibold"
      : "text-gray-300 hover:text-cyan-400";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500 p-3 shadow-lg shadow-cyan-500/30">
            <Music2 className="h-7 w-7 text-black" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              MixWithDiwa
            </h1>

            <p className="text-xs text-cyan-400">
              AI Mixing & Mastering
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/studio" className={isActive("/studio")}>
            Studio
          </Link>

          <Link to="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-white transition hover:border-cyan-400 hover:bg-white/5"
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            to="/studio"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            <Wand2 size={18} />
            Launch Studio
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg border border-white/20 p-2 text-white transition hover:border-cyan-400 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}