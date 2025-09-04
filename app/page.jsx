import { Card } from "@/components/ui/card";
import { CONTACTS, COUNCIL, EVENTS, PHOTOS } from "@/lib/home";
import { LinkedinIcon, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/components/image-carousel";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-10 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="flex flex-col md:flex-row md:gap-10 container space-x-25 justify-center mx-auto px-4 md:px-6 text-center">
          <Image
            src="/logos/sab.png"
            alt="IIT Guwahati Logo"
            className="object-contain"
            width={400}
            height={250}
          />
          <Image
            src="/logos/iitg.jpg"
            alt="IIT Guwahati Logo"
            className="object-contain"
            width={400}
            height={250}
          />
        </div>
        <div className="container mx-auto overflow-hidden rounded-xl">
          <ImageCarousel />
        </div>
      </section>

      <section id="about">
        <div className="container mx-auto px-4 md:px-6 text-center pb-10">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Student's Academic Board
          </h2>
          <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            The Students' Academic Board (SAB) is a student-led body dedicated
            to addressing academic concerns and promoting academic excellence
            across the IIT Guwahati student community.
          </p>
          <h3 className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left font-bold">
            Key Roles & Activities:
          </h3>
          <ul className=" list-disc pl-5 mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-left">
            <li>
              Acts as a bridge between students and the academic administration.
            </li>
            <li>
              Redresses academic issues and guides students to appropriate
              authorities.
            </li>
            <li>
              Organizes events like <strong>Research Conclave</strong>,{" "}
              <strong>language courses</strong>, and{" "}
              <strong>academic workshops</strong>.
            </li>
            <li>
              Conducts the <strong>Peer Assisted Learning (PAL)</strong> program
              for first-year BTech students.
            </li>
            <li>
              Supports students on matters such as{" "}
              <strong>branch change</strong>, <strong>internships</strong>,{" "}
              <strong>exchange programs</strong>, and{" "}
              <strong>scholarships</strong>.
            </li>
            <li>
              Shares important academic updates via the official website, social
              media, and interactive sessions.
            </li>
          </ul>
        </div>
      </section>

      <section id="council" className="bg-gray-50 py-20 ">
        <div className="container mx-auto px-4 md:px-6 text-center pb-10">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Executive Council
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-l/relaxed">
            The Executive Council of SAB IITG includes the General Secretary,
            Joint Secretary, and representatives from Bachelors, Masters, and
            PhD programs. The Vice President of SGC is a special invitee, and
            the council is chaired by the Associate Dean of Academic Affairs
            (UG).
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {COUNCIL.map(({ name, post, Photo, phone, email, linkedin }) => (
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
        </div>
      </section>

      <section id="events" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center pb-10">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Events and Activities
          </h2>
          <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed">
            Throughout the year, the Students' Academic Board conducts various
            events to inculcate the spirit of academic excellence and
            innovation, and to help newcomers adjust and progress in this
            institute.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            {EVENTS.map(({ Icon, title, url }) => (
              <div key={title} className="flex flex-col items-center space-y-4">
                <div className="flex h-30 w-30 items-center justify-center rounded-full">
                  <Link href={url}>{Icon}</Link>
                </div>
                <h5 className="text-l ">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center pb-10">
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Photo Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-l/relaxed">
            Few photographs of different events and activities organized by
            Student's Academic Board.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map(({ label, Photo }) => (
              <Card
                key={label}
                className="flex flex-col items-center space-y-4 text-center p-0 shadow-md hover:shadow-2xl"
              >
                <div className="rounded-xl overflow-hidden">{Photo}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 gradient">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Contact Us
          </h2>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 md:gap-20 mx-auto max-w-4xl text-red-100 text-center text-lg">
            {CONTACTS.map((contact, idx) => (
              <div key={idx}>
                <div className="flex justify-center mb-2">{contact.icon}</div>
                <p>
                  {contact.role && (
                    <>
                      <span className="font-bold">{contact.role}</span>
                      <br />
                    </>
                  )}

                  {contact.name && (
                    <>
                      {contact.name}
                      <br />
                    </>
                  )}

                  {contact.phone && (
                    <>
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-white hover:underline"
                      >
                        {contact.phone.replace("+91", "+91 ")}
                      </a>
                      <br />
                    </>
                  )}

                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-white hover:underline"
                    >
                      {contact.email}
                    </a>
                  )}

                  {contact.emails &&
                    contact.emails.map((mail, i) => (
                      <span key={i}>
                        <a
                          href={`mailto:${mail}`}
                          className="hover:text-white hover:underline"
                        >
                          {mail}
                        </a>
                        {i !== contact.emails.length - 1 && <br />}
                      </span>
                    ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
