import DashboardLayout from "../layouts/DashboardLayout";
import { ArrowRight, AudioLines, Sparkles, TrendingUp, UploadCloud } from "lucide-react";

const stats = [
  { label: "Projects", value: "24", accent: "from-cyan-400 to-blue-500" },
  { label: "Mixes Ready", value: "18", accent: "from-purple-500 to-pink-500" },
  { label: "AI Suggestions", value: "132", accent: "from-emerald-500 to-cyan-500" },
  { label: "Storage Used", value: "83%", accent: "from-amber-500 to-orange-500" },
];

const recentProjects = [
  { name: "Neon Echoes", type: "Mastering", status: "Ready to export" },
  { name: "Midnight Pulse", type: "Mixing", status: "In review" },
  { name: "Velvet Static", type: "Stem Separation", status: "Processing" },
];

const quickActions = [
  { label: "Upload Track", icon: UploadCloud },
  { label: "Launch Studio", icon: AudioLines },
  { label: "Run AI Review", icon: Sparkles },
];

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-[24px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-black/20 to-blue-500/10 p-6 shadow-[0_20px_70px_rgba(34,211,238,0.12)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Welcome back
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Your studio is ready for another polished release.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Jump into your latest projects, refine mixes with AI feedback, and export your next masterpiece with confidence.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-[1.01] hover:bg-cyan-400">
              Open Studio
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[22px] border border-white/10 bg-black/20 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${stat.accent}`} />
              <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
                <p className="mt-1 text-sm text-gray-400">Your latest work in progress</p>
              </div>
              <button className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                View all
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {recentProjects.map((project) => (
                <div key={project.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div>
                    <p className="font-medium text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-gray-400">{project.type}</p>
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
            <div className="mt-5 space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button key={action.label} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10">
                    <span className="flex items-center gap-3">
                      <Icon size={18} className="text-cyan-300" />
                      {action.label}
                    </span>
                    <ArrowRight size={16} className="text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-black/20 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">AI Assistant Insight</h2>
              <p className="mt-1 text-sm text-gray-400">Suggested improvements for your latest session</p>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              Live
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Mastering Suggestion</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Your latest mix would benefit from a subtle high-frequency lift and tighter low-mid control.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-300">
                <TrendingUp size={16} />
                <span className="text-sm font-medium">Energy Boost</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                The chorus is currently the strongest section and could be used as a reference for the rest of the track.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;