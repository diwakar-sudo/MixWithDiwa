import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Mic2,
  FolderOpen,
  Sparkles,
  PlugZap,
  Download,
  Settings,
  Search,
  Bell,
  MoonStar,
  ChevronRight,
  Bot,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutGrid },
  { label: "Studio", to: "/studio", icon: Mic2 },
  { label: "Projects", to: "/projects", icon: FolderOpen },
  { label: "AI Tools", to: "/ai-tools", icon: Sparkles },
  { label: "Plugins", to: "/plugins", icon: PlugZap },
  { label: "Export", to: "/export", icon: Download },
  { label: "Settings", to: "/settings", icon: Settings },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#04070d] text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-4 lg:px-6 xl:px-8">
        <aside className="fixed left-4 top-4 hidden h-[calc(100vh-2rem)] w-[280px] flex-col rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:flex">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.15)]">
              <Mic2 size={20} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">MixWithDiwa</p>
              <p className="text-sm text-cyan-300">Creator Workspace</p>
            </div>
          </div>

          <nav className="mt-6 flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      : "text-gray-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />
                    {item.label}
                  </span>
                  <ChevronRight size={16} className={isActive ? "opacity-100" : "opacity-60"} />
                </Link>
              );
            })}
          </nav>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
            <p className="text-sm font-semibold text-cyan-200">AI Session Ready</p>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Let your assistant suggest fixes, enhancements, and mastering ideas.
            </p>
          </div>
        </aside>

        <div className="ml-0 flex-1 lg:ml-[304px] xl:mr-[320px]">
          <header className="rounded-[24px] border border-white/10 bg-white/8 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-400 md:min-w-[320px]">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search tracks, presets, projects..."
                  className="w-full bg-transparent outline-none placeholder:text-gray-500"
                />
              </label>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/8 p-3 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300">
                  <Bell size={18} />
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/8 p-3 text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-300">
                  <MoonStar size={18} />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold text-black">
                    D
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold">Diwa</p>
                    <p className="text-xs text-gray-400">Producer</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="mt-6 rounded-[28px] border border-white/10 bg-white/8 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-6 lg:p-8">
            {children}
          </main>
        </div>

        <aside className="fixed right-4 top-4 hidden h-[calc(100vh-2rem)] w-[280px] rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:flex xl:flex-col">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
              <Bot size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold">AI Assistant</p>
              <p className="text-xs text-cyan-300">Live guidance</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-gray-300">Suggested next move</p>
              <p className="mt-2 text-sm font-medium text-white">
                Balance the vocal chain and tighten the choruses for a brighter mix.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-gray-300">Mastering insight</p>
              <p className="mt-2 text-sm font-medium text-white">
                Your current loudness curve is close to release-ready with slight EQ refinement.
              </p>
            </div>
          </div>

          <div className="mt-auto rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
            <p className="text-sm font-semibold text-cyan-200">Need help?</p>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Ask your AI assistant for workflow suggestions, mastering tips, or export checks.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
