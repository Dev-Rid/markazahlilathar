export default function Programs() {
  const programs = [
    {
      title: "Qur'an Memorization",
      description: "Structured program for memorizing the Noble Qur'an."
    },
    {
      title: "Arabic Language",
      description: "Learn classical Arabic to understand the Qur'an."
    },
    {
      title: "Aqeedah",
      description: "Study the correct Islamic creed based on the Sunnah."
    },
    {
      title: "Fiqh",
      description: "Understanding Islamic rulings and jurisprudence."
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#0B2545]">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="border-2 border-[#0B2545] bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#0B2545]">
                {program.title}
              </h3>

              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}