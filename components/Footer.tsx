import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Teachers", href: "/teachers" },
  { name: "Donate", href: "/donations" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white/65">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-[19px] font-bold text-white mb-3">
              <span className="text-[#C8A44A]">Markaz</span> Ahlil Athar
            </h3>
            <p className="text-[13.5px] leading-relaxed">
              A centre of authentic Islamic education, teaching the Qur&apos;an and
              Sunnah upon the manhaj of the Salaf as-Saalih since 2010.
            </p>
            <p className="mt-4 text-[#C8A44A] text-[22px] tracking-[8px]">✦ ✦ ✦</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[12px] uppercase tracking-wider mb-4 font-bold">
              Quick Links
            </h4>
            {quickLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="block text-white/55 hover:text-[#C8A44A] text-[13.5px] mb-2 transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[12px] uppercase tracking-wider mb-4 font-bold">
              Contact
            </h4>
            <p className="text-[13.5px] mb-2">14 Ahlus-Sunnah St, Surulere, Lagos</p>
            <p className="text-[13.5px] mb-2">+234 801 234 5678</p>
            <p className="text-[13.5px] mb-4">info@markazahlilAthar.org</p>
            <div className="bg-[#C8A44A]/10 border border-[#C8A44A]/20 rounded p-3">
              <p className="text-[11.5px] text-white/45">Office Hours</p>
              <p className="text-[13px] text-white/65 mt-1">Mon–Fri: 9AM – 6PM</p>
              <p className="text-[13px] text-white/65">Saturday: 9AM – 1PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between text-[12.5px]">
          <p>© 2025 Markaz Ahlil Athar. All rights reserved.</p>
          <p className="text-white/35 mt-2 md:mt-0">Designed with sincerity for the sake of Allāh</p>
        </div>
      </div>
    </footer>
  );
}