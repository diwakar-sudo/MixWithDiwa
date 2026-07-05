import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <Hero />
        <Features />
      </main>
    </>
  );
}