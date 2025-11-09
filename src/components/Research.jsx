import { Beaker, FlaskConical, Microscope } from "lucide-react";

const researchThemes = [
  {
    icon: Beaker,
    title: "Open Research Labs",
    desc: "Collaborative, cross-college labs tackling real-world challenges with open data and reproducible methods.",
  },
  {
    icon: FlaskConical,
    title: "Impact & Innovation",
    desc: "From climate action to digital inclusion, research that delivers measurable outcomes for society.",
  },
  {
    icon: Microscope,
    title: "Student Research Pathways",
    desc: "Mentored routes from undergraduate inquiry to doctoral work, fully online and flexible.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Research at Artemis
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            We blend openness with excellence—publishing in the open, sharing datasets, and inviting
            global collaboration across disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchThemes.map((t) => (
            <div key={t.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="inline-flex items-center justify-center rounded-lg bg-indigo-50 p-3 text-indigo-700">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{t.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
