// "use client";

// import { useState } from "react";

// export default function AdmissionPage() {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     parentName: "",
//     phone: "",
//     email: "",
//     classApplying: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Application submitted successfully!");
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Madrasah Admission</h1>
//         <p className="mt-3 text-lg">
//           Begin your journey of Islamic knowledge with us
//         </p>
//       </section>

//       <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

//         {/* Admission Info */}
//         <section>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Admission Information
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             Our madrasah welcomes students who are eager to learn the Qur'an,
//             Islamic studies, and academic subjects in a nurturing Islamic
//             environment.
//           </p>
//         </section>

//         {/* Requirements */}
//         <section>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Admission Requirements
//           </h2>

//           <ul className="list-disc pl-6 text-gray-600 space-y-2">
//             <li>Completed admission form</li>
//             <li>Birth certificate</li>
//             <li>Two passport photographs</li>
//             <li>Parent/Guardian contact information</li>
//             <li>Previous school report (if available)</li>
//           </ul>
//         </section>

//         {/* Application Form */}
//         <section>
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">
//             Apply for Admission
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-md rounded-lg p-8 space-y-6"
//           >
//             <div className="grid md:grid-cols-2 gap-6">

//               <input
//                 type="text"
//                 name="studentName"
//                 placeholder="Student Name"
//                 value={formData.studentName}
//                 onChange={handleChange}
//                 required
//                 className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <input
//                 type="text"
//                 name="parentName"
//                 placeholder="Parent/Guardian Name"
//                 value={formData.parentName}
//                 onChange={handleChange}
//                 required
//                 className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <select
//                 name="classApplying"
//                 value={formData.classApplying}
//                 onChange={handleChange}
//                 required
//                 className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 <option value="">Select Class</option>
//                 <option value="Tahfiz">Tahfiz</option>
//                 <option value="Islamic Studies">Islamic Studies</option>
//                 <option value="Primary">Primary</option>
//               </select>

//             </div>

//             <textarea
//               name="message"
//               placeholder="Additional Information"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />

//             <button
//               type="submit"
//               className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
//             >
//               Submit Application
//             </button>
//           </form>
//         </section>

//       </div>
//     </div>
//   );
// }






























const steps = [
  {
    num: "1",
    title: "Choose Your Programme",
    desc: "Browse our courses and select the programme that aligns with your level and goals.",
  },
  {
    num: "2",
    title: "Submit Application",
    desc: "Fill in the form below and submit all required documents to our admissions team.",
  },
  {
    num: "3",
    title: "Placement Assessment",
    desc: "A brief evaluation to determine your current level and the appropriate entry point.",
  },
  {
    num: "4",
    title: "Confirmation",
    desc: "Receive your enrolment confirmation and full timetable for the upcoming term.",
  },
];

const requirements = [
  {
    title: "Children (Ages 7–15)",
    desc: "Valid birth certificate, parent/guardian contact details, and basic Qur'an ability assessment.",
  },
  {
    title: "Youth (Ages 16–25)",
    desc: "Government-issued ID, brief written statement of intent, and placement test for applicable courses.",
  },
  {
    title: "Adults (26+)",
    desc: "Valid ID, preferred programme selection, and completion of the online application form below.",
  },
  {
    title: "Sisters' Programme",
    desc: "All programmes available for sisters with dedicated sessions and female instructors for select courses.",
  },
];

export default function AdmissionsPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">Admissions</h1>
          <p className="text-white/70 mt-3 text-base">Take your first step on the path of knowledge.</p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6">
          {/* How to Apply */}
          <span className="inline-block bg-[#C8A44A]/15 text-[#956d0a] text-[11px] uppercase tracking-widest px-3 py-1 rounded-sm border border-[#C8A44A]/35 mb-4">
            Enrolment Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0B2545] mb-3">How to Apply</h2>
          <div className="w-14 h-[3px] bg-[#C8A44A] mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="w-10 h-10 min-w-[40px] bg-[#C8A44A] text-[#0B2545] rounded-full flex items-center justify-center font-bold text-base">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-serif text-[#0B2545] text-base font-bold mb-1">{s.title}</h3>
                  <p className="text-[13px] text-[#6B8AB0] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <h3 className="font-serif text-[#0B2545] text-2xl mb-5">Requirements by Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {requirements.map((r, i) => (
              <div key={i} className="border-l-4 border-[#C8A44A] pl-4 bg-[#EEE8D9] py-4 pr-4 rounded-r-md">
                <h4 className="font-bold text-[#0B2545] text-[14px] mb-1">{r.title}</h4>
                <p className="text-[13px] text-[#6B8AB0] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="bg-white border border-[#C8A44A]/20 rounded-lg p-8 md:p-10">
            <h3 className="font-serif text-[#0B2545] text-2xl mb-7">Application Form</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Date of Birth</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 000 0000 000"
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Programme of Interest</label>
                <select className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]">
                  <option>Select a programme...</option>
                  <option>Qur&apos;an &amp; Tajweed</option>
                  <option>Hifz Programme</option>
                  <option>Hadeeth Sciences</option>
                  <option>Tawheed &amp; &apos;Aqeedah</option>
                  <option>Arabic Language</option>
                  <option>Fiqh &amp; Usool</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Statement of Intent</label>
                <textarea
                  rows={4}
                  placeholder="Tell us briefly about your goals and your reason for joining..."
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545] resize-y"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#C8A44A] hover:bg-[#E2BF6E] text-[#0B2545] font-bold px-7 py-3 rounded text-sm transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}