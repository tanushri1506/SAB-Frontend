// import Image from "next/image";
// import { Phone, Mail, LinkedinIcon } from "lucide-react";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// export const getData = async (endpoint) => {
//   const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
//   return res.json();
// };

// export const CONTACTS = await getData("contacts").then((data) =>
//   data.map((c) => ({
//     role: c.role || "",
//     name: c.name || "",
//     phone: c.phone || "",
//     email: c.email || "",
//     icon: <Phone className="h-6 w-6" />,
//   }))
// );

// export const COUNCIL = await getData("council").then((team) =>
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

// export const EVENTS = await getData("events").then((events) =>
//   events.map((e) => ({
//     title: e.title || "",
//     url: e.url || "",
//     Icon: (
//       <Image
//         src={e.icon}
//         alt={e.title}
//         width={100}
//         height={100}
//         className="object-contain"
//       />
//     ),
//   }))
// );

// export const PHOTOS = await getData("gallery").then((photos) =>
//   photos.map((p) => ({
//     label: p.label || "",
//     Photo: (
//       <Image
//         src={p.image}
//         alt={p.label}
//         width={400}
//         height={300}
//         className="object-cover"
//       />
//     ),
//   }))
// );


"use client"; // required for React hooks

import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

const fetchContacts = async () => {
  const res = await fetch(`${API_BASE}/api/contacts/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch contacts");
  const data = await res.json();
  return data.map((c) => ({
    role: c.role || "",
    name: c.name || "",
    phone: c.phone || "",
    email: c.email || "",
    icon: <Phone className="h-6 w-6" />,
  }));
};

const fetchCouncil = async () => {
  const res = await fetch(`${API_BASE}/api/council/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch council");
  const data = await res.json();
  return data.map((m) => ({
    name: m.name || "",
    post: m.post || "",
    phone: m.phone || "",
    email: m.email || "",
    linkedin: m.linkedin || "",
    Photo: (
      <Image
        src={m.photo}
        alt={m.name}
        width={200}
        height={200}
        className="object-cover"
      />
    ),
  }));
};

const fetchEvents = async () => {
  const res = await fetch(`${API_BASE}/api/events/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch events");
  const data = await res.json();
  return data.map((e) => ({
    title: e.title || "",
    url: e.url || "",
    Icon: (
      <Image
        src={e.icon}
        alt={e.title}
        width={100}
        height={100}
        className="object-contain"
      />
    ),
  }));
};

const fetchPhotos = async () => {
  const res = await fetch(`${API_BASE}/api/gallery/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch gallery photos");
  const data = await res.json();
  return data.map((p) => ({
    label: p.label || "",
    Photo: (
      <Image
        src={p.image}
        alt={p.label}
        width={400}
        height={300}
        className="object-cover"
      />
    ),
  }));
};

// Custom hooks
export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetchContacts().then(setContacts).catch(console.error);
  }, []);
  return contacts;
};

export const useCouncil = () => {
  const [council, setCouncil] = useState([]);
  useEffect(() => {
    fetchCouncil().then(setCouncil).catch(console.error);
  }, []);
  return council;
};

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error);
  }, []);
  return events;
};

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchPhotos().then(setPhotos).catch(console.error);
  }, []);
  return photos;
};
