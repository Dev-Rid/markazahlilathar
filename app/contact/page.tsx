// import React from "react";

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Page Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
//             Contact Our Madrasah
//           </h1>
//           <p className="text-gray-600 mt-3">
//             Have questions or want to enroll your child? Reach out to us.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10">

//           {/* Contact Information */}
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-blue-900 mb-6">
//               Get in Touch
//             </h2>

//             <div className="space-y-4 text-gray-700">
//               <p>
//                 <span className="font-semibold">Address:</span>  
//                 <br /> Lagos, Nigeria
//               </p>

//               <p>
//                 <span className="font-semibold">Phone:</span>  
//                 <br /> +234 XXX XXX XXXX
//               </p>

//               <p>
//                 <span className="font-semibold">Email:</span>  
//                 <br /> info@madrasah.com
//               </p>

//               <p>
//                 <span className="font-semibold">Opening Hours:</span>  
//                 <br /> Monday - Friday: 8:00 AM - 4:00 PM
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-blue-900 mb-6">
//               Send a Message
//             </h2>

//             <form className="space-y-5">

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="your@email.com"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   placeholder="Write your message..."
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-900 text-white py-2.5 rounded-md hover:bg-blue-800 transition"
//               >
//                 Send Message
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }













const contactInfo = [
  {
    title: "Address",
    lines: ["14 Ahlus-Sunnah Street, Surulere, Lagos, Nigeria"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#0B2545" strokeWidth="2" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="#0B2545" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Phone",
    lines: ["+234 801 234 5678", "+234 802 345 6789"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#0B2545" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Email",
    lines: ["info@markazahlilAthar.org", "admissions@markazahlilAthar.org"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#0B2545" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Office Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday: 9:00 AM – 1:00 PM"],
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="#0B2545" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#0B2545" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
            Contact <span className="text-[#C8A44A]">Us</span>
          </h1>
          <p className="text-white/70 mt-3 text-base">
            We&apos;d love to hear from you. Reach out with any questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF7EF]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-[#0B2545] text-2xl mb-6">Get In Touch</h3>
            <div className="space-y-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 min-w-[40px] bg-[#0B2545]/8 rounded-full flex items-center justify-center bg-[#EEE8D9]">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2545] text-[13px] mb-1">{c.title}</h4>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-[13px] text-[#6B8AB0]">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#EEE8D9] rounded-md p-5 mt-7">
              <h4 className="font-bold text-[#0B2545] text-[14px] mb-2">Masjid Open Hours</h4>
              <p className="text-[13px] text-[#6B8AB0] leading-relaxed">
                The markaz masjid is open to all for the five daily prayers. Classes are scheduled
                around prayer times.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-serif text-[#0B2545] text-2xl mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
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
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Subject</label>
                <select className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545]">
                  <option>General Enquiry</option>
                  <option>Admissions</option>
                  <option>Course Information</option>
                  <option>Donations</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-bold text-[#0B2545]">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="border border-gray-300 rounded px-3 py-2.5 text-[13.5px] font-serif focus:outline-none focus:border-[#0B2545] resize-y"
                />
              </div>
              <button
                type="submit"
                className="bg-[#C8A44A] hover:bg-[#E2BF6E] text-[#0B2545] font-bold px-7 py-3 rounded text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}