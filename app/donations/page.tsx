const donationUses = [
  {
    title: "Scholarships",
    desc: "Sponsor a student who cannot afford tuition. Your sadaqah enables someone to pursue knowledge.",
  },
  {
    title: "Teacher Salaries",
    desc: "Ensure our scholars are compensated fairly so they can dedicate their time fully to teaching.",
  },
  {
    title: "Books & Materials",
    desc: "Fund the printing of Islamic texts, workbooks, and learning materials distributed to all students.",
  },
  {
    title: "Facility Upkeep",
    desc: "Keep our classrooms, library, and masjid well-maintained and welcoming for all who attend.",
  },
];

const tiers = [
  {
    name: "Supporter",
    price: "₦5,000",
    period: "/mo",
    desc: "Contribute to general operations and help keep the markaz running.",
    featured: false,
  },
  {
    name: "Benefactor",
    price: "₦15,000",
    period: "/mo",
    desc: "Sponsor a partial scholarship and contribute to books and teaching resources.",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Patron",
    price: "₦50,000",
    period: "/mo",
    desc: "Fully sponsor a student's education and make a lasting impact on a life of knowledge.",
    featured: false,
  },
  {
    name: "Custom Amount",
    price: "Give What You Can",
    period: "",
    desc: "Any amount given sincerely carries barakah. Every naira counts.",
    featured: false,
    custom: true,
  },
];

export default function DonationsPage() {
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
            Support <span className="text-[#C8A44A]">the Markaz</span>
          </h1>
          <p className="text-white/70 mt-3 text-base">Your sadaqah sustains the light of knowledge.</p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Hadith */}
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            Why Give
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">
            Invest in Sacred Knowledge
          </h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mx-auto mb-10" />

          <div className="bg-[#0B2545] rounded-lg p-7 max-w-xl mx-auto mb-14">
            <p className="text-[#C8A44A] text-xl mb-3 leading-relaxed">
              مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ
            </p>
            <p className="text-white/70 text-sm italic mb-1">
              &ldquo;Whoever guides to good will have a reward similar to the one who does it.&rdquo;
            </p>
            <p className="text-white/40 text-xs">— Sahih Muslim</p>
          </div>

          {/* How your donation helps */}
          <h3 className="font-serif text-[#0B2545] text-2xl mb-7">How Your Donation Helps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {donationUses.map((u, i) => (
              <div key={i} className="bg-[#EEE8D9] rounded-md p-6 text-center">
                <h4 className="font-serif text-[#0B2545] text-base font-bold mb-2">{u.title}</h4>
                <p className="text-[13px] text-[#6B8AB0] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>

          {/* Tiers */}
          <h3 className="font-serif text-[#0B2545] text-2xl mb-2">Choose Your Contribution</h3>
          <p className="text-[#6B8AB0] mb-8 text-[14.5px]">
            All amounts are welcome. No donation is too small in the sight of Allāh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {tiers.map((t, i) => (
              <div
                key={i}
                className={`rounded-md p-7 border-2 transition-all duration-200 hover:-translate-y-1 ${
                  t.featured
                    ? "border-[#C8A44A] bg-[#0B2545]"
                    : "border-[#C8A44A]/25 bg-white hover:border-[#C8A44A]"
                }`}
              >
                {t.badge && (
                  <span className="inline-block bg-[#C8A44A] text-[#0B2545] text-[10.5px] font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                    {t.badge}
                  </span>
                )}
                <h3
                  className={`font-serif text-lg mb-2 ${
                    t.featured ? "text-white" : "text-[#0B2545]"
                  }`}
                >
                  {t.name}
                </h3>
                <div
                  className={`font-serif text-3xl font-bold mb-3 ${
                    t.featured ? "text-[#C8A44A]" : "text-[#0B2545]"
                  } ${t.custom ? "text-xl" : ""}`}
                >
                  {t.price}
                  {t.period && (
                    <span className="text-sm font-normal">{t.period}</span>
                  )}
                </div>
                <p
                  className={`text-[13px] mb-5 leading-relaxed ${
                    t.featured ? "text-white/65" : "text-[#6B8AB0]"
                  }`}
                >
                  {t.desc}
                </p>
                <button
                  className={`w-full font-bold py-2.5 rounded text-sm transition-colors ${
                    t.featured
                      ? "bg-[#C8A44A] hover:bg-[#E2BF6E] text-[#0B2545]"
                      : "bg-[#0B2545] hover:bg-[#163E7C] text-white"
                  }`}
                >
                  {t.custom ? "Enter Amount" : `Donate ${t.price}`}
                </button>
              </div>
            ))}
          </div>

          {/* Bank Details */}
          <div className="bg-[#EEE8D9] rounded-lg p-6 text-center">
            <h4 className="font-serif text-[#0B2545] font-bold mb-2 text-base">Bank Transfer Details</h4>
            <p className="text-[14px] text-[#6B8AB0]">
              Bank: First Bank Nigeria &nbsp;|&nbsp; Account Name: Markaz Ahlil Athar &nbsp;|&nbsp;
              Account No: 3012 3456 78
            </p>
            <p className="text-[12.5px] text-[#6B8AB0] mt-2">
              For zakat-eligible donations or to request a receipt:{" "}
              <span className="text-[#0B2545]">donations@markazahlilAthar.org</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}