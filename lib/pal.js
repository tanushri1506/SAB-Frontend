// import Image from "next/image";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// export const getData = async (endpoint) => {
//   const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
//   return res.json();
// };

// export const PAL = await getData("pal").then((team) =>
//   team.map((m) => ({
//     name: m.name || "",
//     post: m.post || "",
//     phone: m.phone || "",
//     email: m.email || "",
//     linkedin: m.linkedin || "",
//     Photo: (
//       <Image
//         src={m.photo}
//         alt={m.name}
//         width={200}
//         height={200}
//         className="object-cover"
//       />
//     ),
//   }))
// );


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

// Custom hook to fetch PAL team dynamically
export const usePAL = () => {
  const [PAL, setPAL] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData("pal")
      .then((team) => {
        setPAL(
          team.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          }))
        );
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { PAL, loading, error };
};
