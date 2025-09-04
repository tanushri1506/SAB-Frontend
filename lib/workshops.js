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

"use client"; // required for React hooks

import Image from "next/image";
import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://sab-backend-bkgb.onrender.com";

const fetchWorkshops = async () => {
  const res = await fetch(`${API_BASE}/api/workshops/`);
  if (!res.ok) throw new Error("Failed to fetch workshops");
  const data = await res.json();
  return data.map((w) => ({
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
};

const fetchPrevious = async () => {
  const res = await fetch(`${API_BASE}/api/previous-workshops/`);
  if (!res.ok) throw new Error("Failed to fetch previous workshops");
  const data = await res.json();
  return data.map((v) => ({
    link: v.link || "",
    title: v.title || "",
    alt: v.alt || "Video not available",
  }));
};

// Custom hooks to use in your page component
export const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);
  useEffect(() => {
    fetchWorkshops().then(setWorkshops).catch(console.error);
  }, []);
  return workshops;
};

export const usePreviousWorkshops = () => {
  const [previous, setPrevious] = useState([]);
  useEffect(() => {
    fetchPrevious().then(setPrevious).catch(console.error);
  }, []);
  return previous;
};
