import Link from "next/link";

type Level = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

interface Course {
  arabic: string;
  title: string;
  duration: string;
  schedule: string;
  desc: string;
  levels: Level[];
  dark: boolean;
}

const courses: Course[] = [
  {
    arabic: "تجويد القرآن",
    title: "Qur'an & Tajweed",
    duration: "6 months / level",
    schedule: "Mon & Thu",
    desc: "Comprehensive recitation covering tajweed rules, makharij al-huruf, and practical application throughout the Qur'an with a certified teacher.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    dark: true,
  },
  {
    arabic: "حفظ القرآن",
    title: "Qur'an Memorisation (Hifz)",
    duration: "2–4 years",
    schedule: "Daily",
    desc: "Full-time intensive hifz for students aged 8+. Memorise the entire Qur'an under a certified hafiz with daily new memorisation and revision.",
    levels: ["All Levels"],
    dark: false,
  },
  {
    arabic: "علوم الحديث",
    title: "Hadeeth Sciences",
    duration: "1 year",
    schedule: "Sat & Sun",
    desc: "Arba'een an-Nawawiyyah, Buloogh al-Maraam, and Mustalah al-Hadeeth — the science of evaluating narrations and their chains.",
    levels: ["Intermediate"],
    dark: true,
  },
  {
    arabic: "العقيدة والتوحيد",
    title: "Tawheed & 'Aqeedah",
    duration: "6 months",
    schedule: "Tue & Fri",
    desc: "Kitāb at-Tawheed and Al-'Aqeedah al-Wāsitiyyah — the foundational texts of correct Islamic creed taught by scholars of Ahlus-Sunnah.",
    levels: ["Beginner"],
    dark: false,
  },
  {
    arabic: "اللغة العربية",
    title: "Arabic Language",
    duration: "1 year / level",
    schedule: "Mon, Wed & Fri",
    desc: "Classical Nahw and Sarf using Al-Ājurrūmiyyah and Qatr an-Nadā. Vocabulary, comprehension, and reading Islamic texts with understanding.",
    levels: ["Beginner", "Intermediate"],
    dark: true,
  },
  {
    arabic: "الفقه وأصوله",
    title: "Fiqh & Usool al-Fiqh",
    duration: "1 year",
    schedule: "Wed & Sat",
    desc: "'Umdat al-Fiqh and Al-Mulakhkhas al-Fiqhee — covering purification, prayer, fasting, zakāt, hajj, and contemporary jurisprudential issues.",
    levels: ["Intermediate"],
    dark: false,
  },
];

const levelStyles: Record<Level, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
  "All Levels": "bg-blue-100 text-blue-700",
};

export default function CoursesPage() {
  return (
    <main>
      {/* Header */}
      <section
        className="bg-[#0B2545] py-14"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='0.6' stroke-opacity='0.08' d='M40 2L49 29 78 40 49 51 40 78 31 51 2 40 31 29Z M40 18L46 35 62 40 46 45 40 62 34 45 18 40 34 35Z'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Courses & <span className="text-[#C8A44A]">Programmes</span>
          </h1>
          <p className="text-white/70 mt-3 text-base">
            Structured Islamic education from beginner to advanced levels.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            All Disciplines
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">What We Offer</h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-[#C8A44A]/20 rounded-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                {/* Card Header */}
                <div className={`px-6 py-5 ${c.dark ? "bg-[#0B2545]" : "bg-[#163E7C]"}`}>
                  <p className="text-[#C8A44A] text-base mb-1">{c.arabic}</p>
                  <h3 className="font-serif text-white text-lg">{c.title}</h3>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-4 mb-3">
                    <span className="text-[12.5px] text-[#6B8AB0]">⏱ {c.duration}</span>
                    <span className="text-[12.5px] text-[#6B8AB0]">📅 {c.schedule}</span>
                  </div>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed flex-1 mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.levels.map((lvl) => (
                      <span
                        key={lvl}
                        className={`text-[11.5px] font-bold px-2.5 py-1 rounded-full ${levelStyles[lvl]}`}
                      >
                        {lvl}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/admissions"
                    className="bg-[#0B2545] hover:bg-[#163E7C] text-white text-[12.5px] font-bold px-4 py-2 rounded transition-colors inline-block text-center"
                  >
                    Enroll →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}