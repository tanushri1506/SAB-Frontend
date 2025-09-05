// import React from "react";
// import { CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { LECTURES, PREVIOUS } from "@/lib/lectures";

// const page = () => {
//   return (
//     <div>
//       <section>
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
//             Upcoming Lectures
//           </h2>

//           {LECTURES.length > 0 ? (
//             LECTURES.map(
//               ({
//                 title,
//                 instructors,
//                 mode,
//                 location,
//                 date,
//                 registration,
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

//                   <div className="flex-1 space-y-4 text-center md:text-left">
//                     <h1>LectureDetails</h1>
//                     <h2 className="text-2xl font-bold text-gray-800">
//                       {title}
//                     </h2>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Instructors:</span>{" "}
//                       {instructors.join(", ")}
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
//                       <span className="font-semibold">Fees:</span>{" "}
//                       {registration.fees}
//                     </p>

//                     <a
//                       href={registration.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
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
//               No upcoming lectures
//             </p>
//           )}
//         </div>
//       </section>

//       <section>
//         <div className="container mx-auto px-4 md:px-6 text-center mb-10">
//           <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
//             Previous Lectures
//           </h2>

//           <div
//             className="
//     mx-auto
//     mt-12
//     grid
//     max-w-5xl
//     gap-6
//     px-4
//     sm:grid-cols-1
//     md:grid-cols-2
//     lg:grid-cols-3
//   "
//           >
//             {PREVIOUS.length > 0 ? (
//               PREVIOUS.map(({ title, link, alt }) => (
//                 <div
//                   key={title}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 space-y-4"
//                 >
//                   <p className="text-lg font-semibold text-gray-800 text-center">
//                     {title}
//                   </p>
//                   {link ? (
//                     <div className="w-full aspect-video">
//                       <iframe
//                         className="w-full h-full rounded-lg"
//                         src={link}
//                         title={title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       ></iframe>
//                     </div>
//                   ) : (
//                     <div className="w-full aspect-video flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg text-center">
//                       <span className="p-4">{alt}</span>
//                     </div>
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 text-lg mt-10">
//                 No previous lectures
//               </p>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;


"use client"; // required for hooks

import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLectures, usePreviousLectures } from "@/lib/lectures";

const LecturesPage = () => {
  const LECTURES = useLectures();
  const PREVIOUS = usePreviousLectures();

  return (
    <div>
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Upcoming Lectures
          </h2>

          {LECTURES.length > 0 ? (
            LECTURES.map(
              ({
                title,
                instructors,
                mode,
                location,
                date,
                registration,
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
                    <div className="rounded-md overflow-hidden shadow-md">{Photo}</div>
                  </div>

                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-700">
                      <span className="font-semibold">Instructors:</span>{" "}
                      {instructors.join(", ")}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Mode:</span> {mode}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Date:</span> {date}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Location:</span> {location}
                    </p>

                    {schedule.length > 0 && (
                      <>
                        <p className="text-gray-700">
                          <span className="font-semibold">Schedule:</span>
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-gray-700">
                          {schedule.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span>
                                {item.day}: {item.date} {item.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {registration?.fees && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Fees:</span> {registration.fees}
                      </p>
                    )}

                    {registration?.url && (
                      <a href={registration.url} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-red-900 hover:bg-red-400 cursor-pointer">
                          Register Here
                        </Button>
                      </a>
                    )}

                    {highlights.length > 0 && (
                      <>
                        <p className="text-gray-700 pt-2">
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
                      </>
                    )}

                    {benefits && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Benefits:</span> {benefits}
                      </p>
                    )}
                  </div>
                </div>
              )
            )
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No upcoming lectures
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">Previous Lectures</h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PREVIOUS.length > 0 ? (
              PREVIOUS.map(({ title, link, alt }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 space-y-4"
                >
                  <p className="text-lg font-semibold text-gray-800 text-center">{title}</p>
                  {link ? (
                    <div className="w-full aspect-video">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={link}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="w-full aspect-video flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg text-center">
                      <span className="p-4">{alt}</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg mt-10">
                No previous lectures
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LecturesPage;
