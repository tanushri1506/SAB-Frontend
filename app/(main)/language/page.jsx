// import { Card } from "@/components/ui/card";
// import { LANGUAGE_COURSES, LANGUAGE_TEAM } from "@/lib/language";
// import { LinkedinIcon, Mail, Phone } from "lucide-react";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <section>
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
//             Upcoming Language Courses
//           </h2>

//           {LANGUAGE_COURSES.length > 0 ? (
//             LANGUAGE_COURSES.map(
//               ({
//                 title,
//                 instructors,
//                 mode,
//                 location,
//                 date,
//                 fees,
//                 url,
//                 schedule,
//                 benefits,
//                 highlights,
//                 Photo,
//               }) => (
//                 <div
//                   key={title}
//                   className="flex flex-col md:flex-row items-center gap-8 p-6 mb-10 bg-white rounded-xl shadow-lg"
//                 >
//                   <div className="w-full md:w-1/3 flex justify-center">
//                     <div className="rounded-md overflow-hidden shadow-md">
//                       {Photo}
//                     </div>
//                   </div>

//                   <div className="flex-1 space-y-4 text-center md:text-left text-gray-700">
//                     <h1>Workshop Details</h1>
//                     <h2 className="text-2xl font-bold text-gray-800">
//                       {title}
//                     </h2>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Instructors:</span>{" "}
//                       {instructors && instructors.length > 0
//                         ? instructors.join(", ")
//                         : "No instructors"}
//                     </p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Mode:</span> {mode}
//                     </p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Date:</span> {date}
//                     </p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Location:</span>{" "}
//                       {location}
//                     </p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Schedule:</span>
//                     </p>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-gray-700">
//                       {schedule.map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <span>
//                             {item.day}: {item.date} {item.time}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Fees:</span> {fees}
//                     </p>

//                     <a href={url} target="_blank" rel="noopener noreferrer">
//                       <Button className="bg-red-900 hover:bg-red-400 cursor-pointer">
//                         Register Here
//                       </Button>
//                     </a>

//                     <p className="text-gray-700 pt-2">
//                       <span className="font-semibold">Highlights:</span>
//                     </p>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-green-700">
//                       {highlights.map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <CheckCircle className="w-5 h-5 mt-1" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Benefits:</span>{" "}
//                       {benefits}
//                     </p>
//                   </div>
//                 </div>
//               )
//             )
//           ) : (
//             <p className="text-center text-gray-500 text-lg mt-10">
//               No upcoming courses
//             </p>
//           )}
//         </div>
//       </section>

//       <section className="mt-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Language Cell
//           </h2>
//           <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
//             The Language Cell, established in 2016 under the Students' Academic
//             Board, promotes linguistic and cultural exchange in both Indian and
//             international contexts. It offers basic and elementary language
//             courses year-round in small groups, taught by experienced tutors
//             using modern methods. With hundreds of students enrolling each year,
//             the Cell supports skill-building for global experiences, domestic
//             cross-cultural exchanges, and English proficiency for non-native
//             speakers.
//           </p>

//           <ul className="list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
//             <li>
//               Introduce campus members to foreign languages for academic access
//               and global exposure.
//             </li>
//             <li>
//               Support exchange students in adapting to foreign cultures and
//               improving communication.
//             </li>
//             <li>
//               Provide resources for learning regional languages to help
//               non-locals acclimate.
//             </li>
//             <li>
//               Organize academic and spoken English courses to enhance writing,
//               communication, and job readiness.
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
//             Language Cell Team
//           </h2>
//           <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//             {LANGUAGE_TEAM.map(
//               ({ name, post, Photo, phone, email, linkedin }) => (
//                 <Card
//                   key={name}
//                   className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl"
//                 >
//                   <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
//                     {Photo}
//                   </div>

//                   <h3 className="text-xl font-semibold">{name}</h3>

//                   <p className="text-gray-600 px-2">{post}</p>

//                   <div className="flex items-center justify-center space-x-6">
//                     <a href={`tel:${phone}`} aria-label="Phone">
//                       <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
//                     </a>
//                     <a href={`mailto:${email}`} aria-label="Email">
//                       <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
//                     </a>
//                     <a
//                       href={linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="LinkedIn"
//                     >
//                       <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
//                     </a>
//                   </div>
//                 </Card>
//               )
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;


"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguageCourses, useLanguageTeam } from "@/lib/language";

const Page = () => {
  const LANGUAGE_COURSES = useLanguageCourses();
  const LANGUAGE_TEAM = useLanguageTeam();

  return (
    <div>
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Upcoming Language Courses
          </h2>

          {LANGUAGE_COURSES.length > 0 ? (
            LANGUAGE_COURSES.map(
              ({
                title,
                instructors,
                mode,
                location,
                date,
                fees,
                url,
                schedule,
                benefits,
                highlights,
                Photo,
              }) => (
                <div
                  key={title}
                  className="flex flex-col md:flex-row items-center gap-8 p-6 mb-10 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="rounded-md overflow-hidden shadow-md">
                      {Photo}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 text-center md:text-left text-gray-700">
                    <h1>Course Details</h1>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {title}
                    </h2>
                    <p>
                      <span className="font-semibold">Instructors:</span>{" "}
                      {instructors && instructors.length > 0
                        ? instructors.join(", ")
                        : "No instructors"}
                    </p>
                    <p>
                      <span className="font-semibold">Mode:</span> {mode}
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span> {date}
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {location}
                    </p>
                    <p>
                      <span className="font-semibold">Schedule:</span>
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {schedule.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span>
                            {item.day}: {item.date} {item.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      <span className="font-semibold">Fees:</span> {fees}
                    </p>

                    {url && (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-red-900 hover:bg-red-400 cursor-pointer">
                          Register Here
                        </Button>
                      </a>
                    )}

                    <p className="pt-2">
                      <span className="font-semibold">Highlights:</span>
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-green-700">
                      {highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      <span className="font-semibold">Benefits:</span>{" "}
                      {benefits}
                    </p>
                  </div>
                </div>
              )
            )
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No upcoming courses
            </p>
          )}
        </div>
      </section>

      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Language Cell
          </h2>
          <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            The Language Cell, established in 2016 under the Students' Academic
            Board, promotes linguistic and cultural exchange in both Indian and
            international contexts. It offers basic and elementary language
            courses year-round in small groups, taught by experienced tutors
            using modern methods. With hundreds of students enrolling each year,
            the Cell supports skill-building for global experiences, domestic
            cross-cultural exchanges, and English proficiency for non-native
            speakers.
          </p>

          <ul className="list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            <li>
              Introduce campus members to foreign languages for academic access
              and global exposure.
            </li>
            <li>
              Support exchange students in adapting to foreign cultures and
              improving communication.
            </li>
            <li>
              Provide resources for learning regional languages to help
              non-locals acclimate.
            </li>
            <li>
              Organize academic and spoken English courses to enhance writing,
              communication, and job readiness.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Language Cell Team
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {LANGUAGE_TEAM.length > 0 ? (
              LANGUAGE_TEAM.map(
                ({ name, post, Photo, phone, email, linkedin }) => (
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
                )
              )
            ) : (
              <p className="text-center text-gray-500 text-lg mt-10">
                Team information not available
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
