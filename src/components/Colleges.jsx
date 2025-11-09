import { Building2, GraduationCap } from "lucide-react";

const colleges = [
  {
    name: "College of Artemisian Arts & Humanities",
    focus: "History, Philosophy, Languages, Cultural Studies",
  },
  {
    name: "College of Computational Sciences",
    focus: "Computer Science, Data, AI, Cybersecurity",
  },
  {
    name: "College of Earth & Environmental Studies",
    focus: "Geography, Ecology, Climate, Sustainability",
  },
  {
    name: "College of Health & Life Sciences",
    focus: "Biology, Public Health, Nutrition, Psychology",
  },
  {
    name: "College of Business & Global Management",
    focus: "Leadership, Finance, Marketing, Operations",
  },
  {
    name: "College of Education & Teaching Innovation",
    focus: "Teacher Training, EdTech, Curriculum Design",
  },
  {
    name: "College of Engineering & Design",
    focus: "Systems, Mechanical, Electrical, UX Design",
  },
  {
    name: "College of Law & Public Policy",
    focus: "Legal Studies, Governance, Human Rights",
  },
  {
    name: "College of Media & Creative Technologies",
    focus: "Film, Journalism, Game Design, Creative Coding",
  },
  {
    name: "College of Space & Planetary Sciences",
    focus: "Astronomy, Space Systems, Remote Sensing",
  },
];

export default function Colleges() {
  return (
    <section id="colleges" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ten Member Colleges
            </h2>
            <p className="text-gray-600 mt-2">
              Distinct academic communities offering world-class open learning.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-indigo-700 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>Study your way</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {colleges.map((c) => (
            <div
              key={c.name}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    {c.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{c.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
