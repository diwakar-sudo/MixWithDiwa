import { motion } from "framer-motion";
import {
  AudioLines,
  SlidersHorizontal,
  Layers3,
  CircuitBoard,
  Cloud,
  ScanEye,
} from "lucide-react";

const features = [
  {
    title: "AI Mixing",
    description: "Instantly balance levels, EQ, compression, and stereo imaging with smart mastering assistance.",
    icon: AudioLines,
  },
  {
    title: "AI Mastering",
    description: "Deliver polished, release-ready tracks with adaptive loudness and tonal refinement.",
    icon: SlidersHorizontal,
  },
  {
    title: "Stem Separation",
    description: "Isolate vocals, drums, and instruments for deeper editing and remix workflows.",
    icon: Layers3,
  },
  {
    title: "Plugin Rack",
    description: "Build flexible signal chains with premium effects and instant recallable presets.",
    icon: CircuitBoard,
  },
  {
    title: "Cloud Projects",
    description: "Collaborate seamlessly from anywhere with secure cloud storage and version history.",
    icon: Cloud,
  },
  {
    title: "Real-Time Audio Analysis",
    description: "Visualize spectral balance, loudness, and clarity as your project evolves live.",
    icon: ScanEye,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Studio Features
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need To Mix Like A Pro
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">
            From AI-assisted mastering to real-time analytics, MixWithDiwa gives creators a premium production suite built for speed, clarity, and quality.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
