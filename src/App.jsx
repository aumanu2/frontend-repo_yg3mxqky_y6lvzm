import Hero from "./components/Hero";
import Colleges from "./components/Colleges";
import Research from "./components/Research";
import Schools from "./components/Schools";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-600 to-fuchsia-600" />
            <span className="font-bold tracking-tight">University of Artemis</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#colleges" className="hover:text-indigo-700">Colleges</a>
            <a href="#research" className="hover:text-indigo-700">Research</a>
            <a href="#schools" className="hover:text-indigo-700">Schools</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Colleges />
        <Research />
        <Schools />

        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Join the Artemis community</h3>
                <p className="text-gray-600 mt-1">Flexible, high-quality degrees designed around your life.</p>
              </div>
              <a href="#" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">Apply Now</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} University of Artemis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Accessibility</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
