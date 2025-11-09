import { BookOpen, School, Users } from "lucide-react";

const schools = [
  {
    name: "School of Foundational Studies",
    desc: "Undergraduate pathways and access modules built for flexible entry.",
  },
  {
    name: "School of Professional Practice",
    desc: "Work-based learning, certification, micro-credentials, and CPD.",
  },
  {
    name: "School of Advanced Studies",
    desc: "Masters and doctoral routes with global supervision networks.",
  },
  {
    name: "School of Online Teaching & Learning",
    desc: "Pedagogy, instructional design, and educational technology.",
  },
  {
    name: "School of Community & Global Engagement",
    desc: "Outreach, partnerships, and widening participation initiatives.",
  },
];

export default function Schools() {
  return (
    <section id="schools" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
            <School className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Schools</h2>
            <p className="text-gray-600 mt-1">Five cross-cutting schools that connect teaching and research.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((s) => (
            <div key={s.name} className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-indigo-50 p-2 text-indigo-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
