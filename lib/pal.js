
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// export const getData = async (endpoint) => {
//   const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
//   return res.json();
// };

// // Custom hook to fetch PAL team dynamically
// export const usePAL = () => {
//   const [PAL, setPAL] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getData("pal")
//       .then((team) => {
//         setPAL(
//           team.map((m) => ({
//             name: m.name || "",
//             post: m.post || "",
//             phone: m.phone || "",
//             email: m.email || "",
//             linkedin: m.linkedin || "",
//             Photo: m.photo ? (
//               <Image
//                 src={m.photo}
//                 alt={m.name}
//                 width={200}
//                 height={200}
//                 className="object-cover"
//               />
//             ) : null,
//           }))
//         );
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   return { PAL, loading, error };
// };

"use client";

import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// Fetch all PAL photos for gallery
export const fetchPALPhotos = async () => {
  const res = await fetch(`${API_BASE}/api/pal/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch PAL data");

  const data = await res.json();

  // Map each item to the gallery format
  return data.map((member) => ({
    label: member.label || "PAL Member",
    Photo: (
      <Image
        src={member.photo || "/placeholder.jpg"}
        alt={member.label || "PAL Galler"}
        width={400}
        height={300}
        className="object-cover"
      />
    ),
  }));
};
