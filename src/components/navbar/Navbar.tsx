import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Music2,
  LayoutDashboard,
  Wand2,
  LogIn,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-cyan-400 font-semibold"
      : "text-gray-300 hover:text-cyan-400";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/studio", label: "Studio" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="rounded-xl bg-cyan-500 p-3 shadow-lg shadow-cyan-500/30">
            <Music2 className="h-7 w-7 text-black" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              MixWithDiwa
            </h1>

            <p className="text-xs text-cyan-400">AI Mixing & Mastering</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className={isActive(item.to)}>
              {item.label}
            </Link>
          ))}
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
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-lg px-3 py-2 ${isActive(item.to)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/login"
              className="mt-2 flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white transition hover:border-cyan-400 hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={18} />
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}