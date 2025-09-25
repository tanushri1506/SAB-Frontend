
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
          Peer Assisted Learning(PAL)
        </h2>
        <p className="mx-auto mt-3 max-w-[1000px] text-gray-500 md:text-l/relaxed text-center">
          University classes are vastly different from school, and its completely normal to take some time to get used to them. 
          To help Undergraduate (UG) First Year Students tackle their common courses, Students' Academic Board conducts Peer assisted learning (PAL) classes every year.
          In PAL, you'll be assigned mentors who are students themselves, making it easy for you to form connections and clarify your concepts. If you're too shy to ask a question in class, just join a PAL session!  
        </p>
        
      </section>

      <section className="container mx-auto px-4 md:px-6 text-center mt-20">
        <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
          PAL Gallery
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
