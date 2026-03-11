export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to Markaz Ahlil Athar
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          A center dedicated to teaching the Qur'an, Sunnah, Arabic language
          and authentic Islamic knowledge for students of all ages.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
            Apply for Admission
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}