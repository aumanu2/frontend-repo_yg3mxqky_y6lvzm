import { GraduationCap, Rocket, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-300 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/20">
            <Rocket className="h-4 w-4" />
            <span className="text-sm">Modeled after the Open University</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            University of Artemis
          </h1>
          <p className="max-w-2xl text-white/90 text-lg">
            A modern, open university built for flexible, high-quality learning. Study
            anywhere, research everywhere, and join a global community of learners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#colleges" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow hover:shadow-md transition">
              <GraduationCap className="h-5 w-5" /> Explore Colleges
            </a>
            <a href="#research" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/30 px-5 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-indigo-500/40 transition">
              <Globe className="h-5 w-5" /> Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
