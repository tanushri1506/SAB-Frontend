"use client";

import { Card } from "@/components/ui/card";
import { useContacts, useCouncil, useEvents, usePhotos } from "@/lib/home";
import { LinkedinIcon, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/image-carousel";

export default function Home() {
  const CONTACTS = useContacts();
  const COUNCIL = useCouncil();
  const EVENTS = useEvents();
  const PHOTOS = usePhotos();

  return (
    <div className="flex flex-col pt-16">

      {/* Header Logos & Carousel */}
      <section className="mt-10 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="flex flex-col md:flex-row md:gap-10 container justify-center mx-auto px-4 md:px-6 text-center">
          <Image src="/logos/sab.png" alt="SAB Logo" className="object-contain" width={400} height={250} />
          <Image src="/logos/iitg.jpg" alt="IITG Logo" className="object-contain" width={400} height={250} />
        </div>
        <div className="container mx-auto overflow-hidden rounded-xl">
          <ImageCarousel />
        </div>
      </section>

      {/* About Section */}
<section id="about" className="px-4 md:px-6 text-left container mx-auto pb-10">
  <h2 className="gradient-title mt-2 text-3xl md:text-4xl text-center">
    Students' Academic Board
  </h2>
  <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-center">
    The Students' Academic Board (SAB) is a student-led body dedicated to promoting academic 
    excellence across the IIT Guwahati student community.
  </p>

  <h3 className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left font-bold">
    What We Do:
  </h3>
  <ul className="list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
    <li>
      <strong>Keep you Updated!</strong> SAB shares all academic updates via social media, interactive sessions, and our website
    </li>
    <li>
      <strong>Bridge the Gap.</strong> SAB acts as a bridge between students and the academic administration
    </li>
    <li>
      <strong>Voice your concerns.</strong> We address Academic Concerns and guide students to the appropriate authorities
    </li>
    <li>
      Conduct the <strong>Research and Industrial Conclave</strong>, IIT Guwahati's flagship academic event
    </li>
    <li>
      <strong>Academia.</strong> We organize Foreign Language Courses, Workshops and Industry Talks
    </li>
    <li>
      <strong>Support you!</strong> SAB guides students in matters such as scholarships, internships, and exchange programs
    </li>
  </ul>
</section>


      {/* Council Section */}
<section id="council" className="bg-gray-50 py-20">
  <div className="container mx-auto text-center px-4 md:px-6">
    <h2 className="gradient-title text-3xl md:text-4xl">Executive Committee</h2>
    <p className="mt-3 text-gray-500 max-w-[700px] mx-auto">
      The Executive Council of SAB IITG includes the General Secretary, Joint Secretary, and representatives from Bachelors, Masters, and PhD programs. The council is chaired by the Associate Dean of Academic Courses.
    </p>

    <div className="mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {COUNCIL.map(({ name, post, Photo, phone, email, linkedin }) => (
        <Card key={name} className="flex flex-col items-center p-6 text-center shadow-md hover:shadow-2xl">
          <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">{Photo}</div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600">{post}</p>
          <div className="flex items-center justify-center space-x-6 mt-2">
            {phone && <a href={`tel:${phone}`}><Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" /></a>}
            {email && <a href={`mailto:${email}`}><Mail className="h-5 w-5 text-gray-700 hover:text-red-500" /></a>}
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" /></a>}
          </div>
        </Card>
      ))}
    </div>

    <Button
              asChild
              size={"lg"}
              className="bg-red-800 hover:bg-red-400 cursor-pointer mt-10"
            >
              <Link href="/past-committee">
                Past Executive Committee
              </Link>
            </Button>
  </div>
</section>


      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl">Events and Activities</h2>
          <p className="mt-3 text-gray-500 max-w-[900px] mx-auto">
            Throughout the year, the Students' Academic Board conducts various events to inculcate academic excellence and innovation.
          </p>

          <div className="mt-12 grid max-w-5xl gap-8 md:grid-cols-4 mx-auto">
            {EVENTS.map(({ Icon, title, url }) => (
              <div key={title} className="flex flex-col items-center space-y-4">
                <Link href={url}>{Icon}</Link>
                <h5 className="text-l">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h2 className="gradient-title text-3xl md:text-4xl">Photo Gallery</h2>
          <div className="mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {PHOTOS.map(({ label, Photo }) => (
              <Card key={label} className="flex flex-col items-center p-0 text-center shadow-md hover:shadow-2xl">
                <div className="rounded-xl overflow-hidden">{Photo}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient">
        <div className="container mx-auto text-center px-4 md:px-6 space-y-10">
          <h2 className="text-3xl font-extrabold md:text-4xl text-white">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 mx-auto max-w-4xl text-red-100 text-center text-lg">
            {CONTACTS.map((contact, idx) => (
              <div key={idx}>
                <div className="flex justify-center mb-2">{contact.icon}</div>
                <p>
                  {contact.role && <><strong>{contact.role}</strong><br/></>}
                  {contact.name && <>{contact.name}<br/></>}
                  {contact.phone && <><a href={`tel:${contact.phone}`} className="hover:text-white hover:underline">{contact.phone.replace("+91", "+91 ")}</a><br/></>}
                  {contact.email && <a href={`mailto:${contact.email}`} className="hover:text-white hover:underline">{contact.email}</a>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
