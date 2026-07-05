import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]"
      />
    </div>
  );
}