import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "15K+", label: "Active Creators" },
    { value: "500K+", label: "Songs Processed" },
    { value: "99.9%", label: "Cloud Uptime" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl">
            <Sparkles size={16} />
            AI Powered Mixing & Mastering
          </div>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Create Professional Mixes & Masters With AI
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
            Elevate your sound with intelligent production workflows, instant mastering,
            cinematic effects, and cloud-powered collaboration built for modern creators.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/studio"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-cyan-400"
            >
              Launch Studio
              <ArrowRight size={18} />
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <PlayCircle size={18} />
              Watch Demo
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/8 p-4 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <p className="text-2xl font-semibold text-cyan-300">{item.value}</p>
                <p className="mt-1 text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6 shadow-inner shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Studio AI</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Live Production Console</h2>
                </div>
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
                  <Cpu size={20} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Mastering engine</span>
                    <span className="font-medium text-cyan-300">98% match</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Cloud sync</span>
                    <span className="font-medium text-cyan-300">Stable</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                    <ShieldCheck size={16} className="text-cyan-300" />
                    Multi-device collaboration enabled
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-8 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-sm text-gray-300">Instant AI suggestions</p>
              <p className="mt-1 text-lg font-semibold text-white">+24% louder mix</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-8 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-sm text-gray-300">Real-time feedback</p>
              <p className="mt-1 text-lg font-semibold text-white">Live mastering</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
