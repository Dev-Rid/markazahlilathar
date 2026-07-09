const missionPoints = [
  "Preserve and disseminate authentic Islamic knowledge based on the Qur'an and authentic Sunnah.",
  "Raise a generation firmly grounded in correct 'aqeedah and sound manhaj.",
  "Make Islamic education accessible to all — children, youth, and adults.",
  "Connect students to the living tradition of scholarship through authentic isnād.",
];

const values = [
  {
    title: "The Qur'an First",
    desc: "Every discipline references back to the Book of Allāh — the primary source of all Islamic knowledge.",
  },
  {
    title: "Authentic Sunnah",
    desc: "We teach students to distinguish authentic narrations from weak ones, following the Prophet ﷺ as understood by his Companions.",
  },
  {
    title: "Clarity in 'Aqeedah",
    desc: "The 'aqeedah of Ahlus-Sunnah is at the heart of all programmes, establishing tawheed and warning against shirk and bid'ah.",
  },
  {
    title: "Respect for Scholars",
    desc: "We honour the great scholars of Islam and strive to transmit their knowledge faithfully with proper reference.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section
        className="bg-[#0B2545] py-34"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='0.6' stroke-opacity='0.08' d='M40 2L49 29 78 40 49 51 40 78 31 51 2 40 31 29Z M40 18L46 35 62 40 46 45 40 62 34 45 18 40 34 35Z'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            About <span className="text-[#C8A44A]">Markaz Ahlil Athar</span>
          </h1>
          <p className="text-white/70 mt-3 text-base">Our story, mission, and the path we walk upon.</p>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-4 leading-tight">
              From Humble Beginnings to a Beacon of Knowledge
            </h2>
            <div className="w-4 h-[3px] bg-[#C8A44A] mb-6" />
            <p className="text-gray-600 mb-10 leading-relaxed text-xl">
              Markaz Ahlil Athar was established in 2019 by a group of students of knowledge who
              returned from the Islamic universities of Saudi Arabia and Mauritania, carrying a deep
              desire to serve their community with authentic deen.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-xl">
              What began as weekly circles in a small masjid has grown into a structured institute
              offering full-time and part-time programmes for hundreds of students across multiple
              age groups.
            </p>
            <p className="text-gray-600 leading-relaxed text-xl">
              Our name — <em>Ahlil Athar</em> (People of the Narrations) — reflects our commitment
              to following the Qur&apos;an and Sunnah upon the understanding of the Companions and
              those who followed them in goodness.
            </p>
          </div>

      </div>
      </section>


    </main>
  );
}