// import Image from "next/image";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://sab-backend-bkgb.onrender.com";

// const getData = async (endpoint) => {
//   const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
//   return res.json();
// };

// export const WORKSHOPS = await getData("workshops").then((data) =>
//   data.map((w) => ({
//     title: w.title || "",
//     Photo: w.photo ? (
//       <Image
//         src={w.photo}
//         alt={w.title}
//         width={600}
//         height={600}
//         className="object-cover"
//       />
//     ) : null,
//     instructors: w.instructors || [],
//     mode: w.mode || "",
//     date: w.date || "",
//     fees: w.fees || "",
//     url: w.url || "",
//     schedule: w.schedule || [],
//     location: w.location || "",
//     highlights: Array.isArray(w.highlights)
//       ? w.highlights
//       : JSON.parse(w.highlights || "[]"),
//     benefits: w.benefits || "",
//   }))
// );

// export const PREVIOUS = await getData("previous-workshops").then((data) =>
//   data.map((v) => ({
//     link: v.link || "",
//     title: v.title || "",
//     alt: v.alt || "Video not available",
//   }))
// );

"use client"; // ensures code runs in browser

import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://sab-backend-bkgb.onrender.com";

const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store", // always fetch latest data
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

// Keep the same names WORKSHOPS and PREVIOUS for compatibility
export let WORKSHOPS = [];
export let PREVIOUS = [];

if (typeof window !== "undefined") {
  // fetch data only in browser
  getData("workshops").then((data) => {
    WORKSHOPS = data.map((w) => ({
      title: w.title || "",
      Photo: w.photo ? (
        <Image
          src={w.photo}
          alt={w.title}
          width={600}
          height={600}
          className="object-cover"
        />
      ) : null,
      instructors: w.instructors || [],
      mode: w.mode || "",
      date: w.date || "",
      fees: w.fees || "",
      url: w.url || "",
      schedule: w.schedule || [],
      location: w.location || "",
      highlights: Array.isArray(w.highlights)
        ? w.highlights
        : JSON.parse(w.highlights || "[]"),
      benefits: w.benefits || "",
    }));
  });

  getData("previous-workshops").then((data) => {
    PREVIOUS = data.map((v) => ({
      link: v.link || "",
      title: v.title || "",
      alt: v.alt || "Video not available",
    }));
  });
}
