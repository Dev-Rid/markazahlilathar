// export default function AboutPage() {
//   return (
//     <main className="bg-white text-gray-800">

//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             About Our Madrasah
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             A place dedicated to nurturing knowledge, character, and the love
//             of Islam through authentic teachings and disciplined learning.
//           </p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h2 className="text-3xl font-bold mb-4">
//               Who We Are
//             </h2>

//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Our Madrasah is committed to providing authentic Islamic
//               education based on the Qur'an and the Sunnah upon the
//               understanding of the righteous predecessors (Salaf).
//             </p>

//             <p className="text-gray-600 leading-relaxed">
//               We aim to develop students who possess strong Islamic knowledge,
//               excellent character, and the ability to contribute positively to
//               their communities.
//             </p>
//           </div>

//           <div className="bg-gray-100 h-72 rounded-lg flex items-center justify-center">
//             <span className="text-gray-500">Madrasah Image</span>
//           </div>

//         </div>
//       </section>


//       {/* Mission & Vision */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

//           <div className="p-8 bg-white shadow rounded-lg">
//             <h3 className="text-2xl font-semibold mb-3 text-blue-600">
//               Our Mission
//             </h3>

//             <p className="text-gray-600 leading-relaxed">
//               To provide high-quality Islamic education that helps students
//               understand their religion correctly and apply it in their daily
//               lives.
//             </p>
//           </div>

//           <div className="p-8 bg-white shadow rounded-lg">
//             <h3 className="text-2xl font-semibold mb-3 text-blue-600">
//               Our Vision
//             </h3>

//             <p className="text-gray-600 leading-relaxed">
//               To nurture a generation of knowledgeable Muslims who uphold the
//               teachings of Islam and become positive leaders in society.
//             </p>
//           </div>

//         </div>
//       </section>


//       {/* Programs */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">

//           <h2 className="text-3xl font-bold mb-10">
//             What Students Learn
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">

//             <div className="p-6 border rounded-lg">
//               <h4 className="font-semibold text-xl mb-2">Qur'an Studies</h4>
//               <p className="text-gray-600">
//                 Memorization, recitation (Tajweed), and understanding of the
//                 Qur'an.
//               </p>
//             </div>

//             <div className="p-6 border rounded-lg">
//               <h4 className="font-semibold text-xl mb-2">Hadith Studies</h4>
//               <p className="text-gray-600">
//                 Learning authentic sayings and teachings of the Prophet ﷺ.
//               </p>
//             </div>

//             <div className="p-6 border rounded-lg">
//               <h4 className="font-semibold text-xl mb-2">Arabic Language</h4>
//               <p className="text-gray-600">
//                 Understanding the language of the Qur'an to strengthen Islamic
//                 knowledge.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* Call to Action */}
//       <section className="bg-blue-600 text-white py-16 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Join Our Madrasah
//         </h2>

//         <p className="mb-6">
//           Become part of a learning environment dedicated to knowledge and
//           character development.
//         </p>

//         <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//           Enroll Now
//         </button>
//       </section>

//     </main>
//   );
// }


































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
        className="bg-[#0B2545] py-14"
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
            <div className="w-14 h-[3px] bg-[#C8A44A] mb-6" />
            <p className="text-gray-600 mb-4 leading-relaxed">
              Markaz Ahlil Athar was established in 2010 by a group of students of knowledge who
              returned from the Islamic universities of Saudi Arabia and Mauritania, carrying a deep
              desire to serve their community with authentic deen.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              What began as weekly circles in a small masjid has grown into a structured institute
              offering full-time and part-time programmes for hundreds of students across multiple
              age groups.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name — <em>Ahlil Athar</em> (People of the Narrations) — reflects our commitment
              to following the Qur&apos;an and Sunnah upon the understanding of the Companions and
              those who followed them in goodness.
            </p>
          </div>

          <div className="bg-[#EEE8D9] rounded-lg p-7">
            <h3 className="font-serif text-xl text-[#0B2545] mb-5">Our Mission</h3>
            <ul className="space-y-1">
              {missionPoints.map((pt, i) => (
                <li key={i} className="flex gap-3 py-3 border-b border-[#C8A44A]/25 last:border-0">
                  <span className="text-[#C8A44A] text-base mt-0.5 shrink-0">✦</span>
                  <span className="text-gray-600 text-[14px] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">
            The Salafi Manhaj — The Straight Path
          </h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mx-auto mb-6" />
          <p className="text-[#6B8AB0] max-w-xl mx-auto mb-12 text-base leading-relaxed">
            We teach upon the methodology of the Salaf as-Saalih — the Companions, the
            Tābi&apos;een, and those who followed them — as understood by the major scholars of
            Ahlus-Sunnah.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                className="border-t-4 border-[#C8A44A] bg-[#FAF7EF] rounded-b-md p-5 text-left"
              >
                <h4 className="font-serif text-[#0B2545] font-bold mb-2">{v.title}</h4>
                <p className="text-[13px] text-[#6B8AB0] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}