import Navbar from "../components/navbar/Navbar";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <AnimatedBackground />

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-400">
              🎵 AI-Powered Mixing • Mastering • Audio Intelligence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl text-5xl font-black leading-tight md:text-7xl"
          >
            Create
            <span className="text-cyan-400"> Professional </span>
            Mixes &
            <span className="text-cyan-400"> Masters </span>
            With AI
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl"
          >
            MixWithDiwa Studio combines professional audio engineering,
            intelligent AI processing, mastering tools, and modern cloud
            technology into one powerful production platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
              Start Free
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 transition hover:border-cyan-400 hover:bg-white/5">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
              <p className="mt-2 text-gray-400">AI Tools</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">100+</h2>
              <p className="mt-2 text-gray-400">Audio Effects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">Unlimited</h2>
              <p className="mt-2 text-gray-400">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">24/7</h2>
              <p className="mt-2 text-gray-400">Cloud Access</p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="mt-24 grid max-w-7xl gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40">
              <h3 className="mb-4 text-2xl font-bold">
                AI Mixing
              </h3>

              <p className="text-gray-400">
                Automatic EQ, Compression, Gain Staging,
                Stereo Imaging and intelligent balancing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40">
              <h3 className="mb-4 text-2xl font-bold">
                Mastering Engine
              </h3>

              <p className="text-gray-400">
                Loudness optimization, streaming normalization,
                multiband processing and final mastering.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40">
              <h3 className="mb-4 text-2xl font-bold">
                Cloud Studio
              </h3>

              <p className="text-gray-400">
                Upload, organize, mix, collaborate and export
                your projects from anywhere.
              </p>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}