// import { Card } from "@/components/ui/card";
// import { PAL } from "@/lib/pal";
// import { LinkedinIcon, Mail, Phone } from "lucide-react";
// import React from "react";

// const page = () => {
//   return (
//     <div className="mb-10">
//       <section className="container mx-auto px-4 md:px-6 text-center mt-20">
//         <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//           Peer Assisted Learning
//         </h2>
//         <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
//           Every year Students' Academic Board conducts a Peer Assistance
//           Learning (PAL) program which aims to provide extra classes to all
//           those First-year undergraduate students who face difficulties in
//           understanding the concepts well and hence fail to score good marks in
//           some of the ongoing courses. These students are mentored by the
//           Research Scholars/Masters students of IIT Guwahati so that they would
//           feel more connected and feel free to ask and learn.
//         </p>
//         <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-xl/relaxed text-center pt-5">
//           Join WhatsApp Group for Regular Communication and updates:{" "}
//           <span className="text-blue-500 underline hover:text-blue-800">
//             <a
//               href="https://www.google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Join Here
//             </a>
//           </span>
//         </p>
//       </section>

//       <section className="container mx-auto px-4 md:px-6 text-center mt-20">
//         <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//           Peer Assisted Learning Team
//         </h2>
//         <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//           {PAL.map(({ name, post, Photo, phone, email, linkedin }) => (
//             <Card
//               key={name}
//               className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl"
//             >
//               <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
//                 {Photo}
//               </div>

//               <h3 className="text-xl font-semibold">{name}</h3>

//               <p className="text-gray-600 px-2">{post}</p>

//               <div className="flex items-center justify-center space-x-6">
//                 <a href={`tel:${phone}`} aria-label="Phone">
//                   <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
//                 </a>
//                 <a href={`mailto:${email}`} aria-label="Email">
//                   <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
//                 </a>
//                 <a
//                   href={linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
//                 </a>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;


"use client";

import { Card } from "@/components/ui/card";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import React from "react";
import { usePAL } from "@/lib/pal"; // import the dynamic hook

const Page = () => {
  const { PAL, loading, error } = usePAL();

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="mb-10">
      <section className="container mx-auto px-4 md:px-6 text-center mt-20">
        <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
          Peer Assisted Learning
        </h2>
        <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
          Every year Students' Academic Board conducts a Peer Assistance Learning (PAL) program which aims to provide extra classes to first-year undergraduate students who face difficulties in understanding the concepts well. These students are mentored by Research Scholars/Masters students of IIT Guwahati so that they feel more connected and encouraged to learn.
        </p>
        <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-xl/relaxed text-center pt-5">
          Join WhatsApp Group for Regular Communication and updates:{" "}
          <span className="text-blue-500 underline hover:text-blue-800">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Here
            </a>
          </span>
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 text-center mt-20">
        <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
          Peer Assisted Learning Team
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {PAL.map(({ name, post, Photo, phone, email, linkedin }) => (
            <Card
              key={name}
              className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl"
            >
              <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
                {Photo}
              </div>

              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600 px-2">{post}</p>

              <div className="flex items-center justify-center space-x-6">
                <a href={`tel:${phone}`} aria-label="Phone">
                  <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                </a>
                <a href={`mailto:${email}`} aria-label="Email">
                  <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
