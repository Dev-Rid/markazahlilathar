import Link from "next/link";

const stats = [
  { num: "500+", label: "Students Enrolled" },
  { num: "12+", label: "Courses Offered" },
  { num: "8", label: "Qualified Scholars" },
  { num: "2010", label: "Year Founded" },
];

const disciplines = [
  {
    title: "Qur'an & Tajweed",
    desc: "Proper recitation, memorisation, and tafseer of the Noble Qur'an with qualified teachers.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#C8A44A" strokeWidth="2" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#C8A44A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Hadeeth Sciences",
    desc: "Study of the Prophetic narrations, mustalah, and explanation of major collections.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#C8A44A" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#C8A44A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tawheed & 'Aqeedah",
    desc: "Correct Islamic creed of Ahlus-Sunnah — the unshakeable foundation of every Muslim.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 3L4 9v12h5v-6h6v6h5V9L12 3z" stroke="#C8A44A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fiqh & Usool",
    desc: "Islamic jurisprudence covering 'ibādāt, mu'āmalāt, and contemporary legal questions.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#C8A44A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Arabic Language",
    desc: "Classical Arabic grammar, morphology, and comprehension — the key to all Islamic sciences.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M3 5h18M3 10h18M3 15h12M3 20h8" stroke="#C8A44A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Seerah & History",
    desc: "The biography of the Prophet ﷺ and the living heritage of Islamic civilisation.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#C8A44A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="bg-[#0B2545] text-white py-20 md:py-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='0.6' stroke-opacity='0.08' d='M40 2L49 29 78 40 49 51 40 78 31 51 2 40 31 29Z M40 18L46 35 62 40 46 45 40 62 34 45 18 40 34 35Z'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A44A] text-2xl mb-4 tracking-widest">بسم الله الرحمن الرحيم</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl mb-5">
            Seek Knowledge Upon the{" "}
            <span className="text-[#C8A44A]">Manhaj of the Salaf</span>
          </h1>
          <p className="text-white/70 text-xl max-w-lg mb-8 leading-relaxed">
            A centre dedicated to authentic Islamic education — Qur&apos;an, Hadeeth, Fiqh,
            Tawheed, and Arabic — grounded in the way of Ahlus-Sunnah.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="bg-[#C8A44A] hover:bg-[#E2BF6E] text-[#0B2545] font-bold px-7 py-5 rounded text-md transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              href="/about"
              className="border border-white/50 hover:bg-white/10 text-white font-bold w-53 md:w-50 h-16 px-5 py-5 rounded text-md transition-colors flex text-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <div className="bg-white border-b border-[#C8A44A]/20 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C8A44A]/20">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-2 px-4">
                <div className="font-serif text-3xl font-bold text-[#0B2545]">{s.num}</div>
                <div className="text-[12px] text-[#6B8AB0] mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* About Preview */}
      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#0B2545] mb-4 leading-tight">
              A Legacy of Sacred Knowledge
            </h2>
            <div className="w-14 h-[3px] bg-[#C8A44A] mb-6" />
            <p className="text-gray-600 mb-4 leading-relaxed text-lg leading7">
              Markaz Ahlil Athar was founded with a single mission: to preserve and transmit
              authentic Islamic knowledge in accordance with the Qur&apos;an and the Sunnah, upon
              the understanding of the Salaf as-Saalih.
            </p>
            <p className="text-gray-600 mb-7 leading-relaxed">
              We offer structured programmes for students of all ages, taught by qualified teachers
              connected to the great scholars of Islam.
            </p>
            <Link
              href="/about"
              className="bg-[#0B2545] hover:bg-[#163E7C] text-white font-bold px-6 py-3 rounded text-sm transition-colors inline-block"
            >
              Our Story →
            </Link>
          </div>

          <div className="bg-[#0B2545] rounded-lg p-8 text-white text-center">
            <p className="text-[#C8A44A] text-3xl tracking-widest mb-5">✦ ✦ ✦</p>
            <p className="text-[#C8A44A] text-3xl mb-4 leading-relaxed tracking-wide">
              طَلَبُ العِلمِ فَرِيضَةٌ
              
            </p>
            <p className="text-white/70 text-sm italic mb-2">
              &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo;
            </p>
            <p className="text-white/40 text-xs">— Sunan Ibn Mājah</p>
            <p className="text-[#C8A44A] text-3xl tracking-widest mt-6">✦ ✦ ✦</p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            What We Teach
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">
            Our Core Disciplines
          </h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, i) => (
              <div
                key={i}
                className="border border-[#C8A44A]/20 rounded-md p-7 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-[#FAF7EF]"
              >
                <div className="w-15 h-15 bg-[#0B2545] rounded-full flex items-center justify-center mx-auto mb-4">
                  {d.icon}
                </div>
                <h3 className="font-serif text-[20px] text-[#0B2545] mb-2">{d.title}</h3>
                <p className="text-[15px] text-[#6B8AB0] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/courses"
              className="bg-[#0B2545] hover:bg-[#163E7C] text-white font-bold px-7 py-4 rounded text-sm transition-colors inline-block"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#0B2545] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C8A44A] text-3xl tracking-widest mb-5">✦ ✦ ✦</p>
          <h2 className="font-serif text-5xl md:text-4xl text-white mb-4">
            Begin Your Journey of Knowledge
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-8 text-base leading-relaxed">
            Enrolment for the new academic term is now open. Seats are limited — apply today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-[#C8A44A] hover:bg-[#E2BF6E] text-[#0B2545] font-bold px-7 py-3 rounded text-sm transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/donations"
              className="border border-white/50 hover:bg-white/10 text-white font-bold px-7 py-3 rounded text-sm transition-colors"
            >
              Support the Markaz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}