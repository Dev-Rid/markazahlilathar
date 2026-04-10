interface Teacher {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

const teachers: Teacher[] = [
  {
    initials: "أ",
    name: "Shaykh Abu 'Abdillah Ahmad",
    role: "Founder & Head of Qur'an Dept.",
    bio: "Graduate of the Islamic University of Madinah, Faculty of Qur'an. Over 20 years teaching tajweed and tafseer with an unbroken chain.",
  },
  {
    initials: "م",
    name: "Ustādh Muhammad al-Amin",
    role: "Hadeeth & Fiqh Department",
    bio: "Student of Shaykh 'Ubayd al-Jābirī (raḥimahullāh). Specialises in hadeeth sciences and Hanbali fiqh with isnād in major collections.",
  },
  {
    initials: "إ",
    name: "Ustādh Ibrāheem Yusuf",
    role: "Arabic Language Department",
    bio: "Holds an ijāzah in Arabic grammar from Egypt. Teaches classical Nahw and Sarf using traditional texts with 10+ years experience.",
  },
  {
    initials: "أ",
    name: "Ustādhah Umm Hafsah",
    role: "Sisters' Programme Lead",
    bio: "Certified hafizhah of the Qur'an. Leads women's hifz and tajweed circles as well as sisters' 'aqeedah and fiqh classes.",
  },
  {
    initials: "ع",
    name: "Ustādh 'AbdurRahmān Bilal",
    role: "Tawheed & 'Aqeedah",
    bio: "Studied under senior scholars in Saudi Arabia and Nigeria. Specialises in 'aqeedah, seerah, and refutation of modern deviant ideologies.",
  },
  {
    initials: "ح",
    name: "Ustādh Hamzah al-Fulāni",
    role: "Youth Programme Coordinator",
    bio: "Leads the youth education programme, integrating Islamic studies with mentorship and character development for ages 10–18.",
  },
];

export default function TeachersPage() {
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
            Our <span className="text-[#C8A44A]">Teachers & Scholars</span>
          </h1>
          <p className="text-white/70 mt-3 text-base">
            Qualified scholars dedicated to guiding you in your studies.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            Faculty
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">Those Who Teach</h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {teachers.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-[#C8A44A]/20 rounded-lg px-6 pt-8 pb-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-20 h-20 rounded-full bg-[#163E7C] border-[3px] border-[#C8A44A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C8A44A] font-serif text-2xl">{t.initials}</span>
                </div>
                <h3 className="font-serif text-[#0B2545] text-base font-bold mb-1">{t.name}</h3>
                <p className="text-[#C8A44A] text-[11.5px] uppercase tracking-wider mb-3">{t.role}</p>
                <p className="text-[13px] text-[#6B8AB0] leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}