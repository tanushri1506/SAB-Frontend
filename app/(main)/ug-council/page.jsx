import { Card } from "@/components/ui/card";
import { BTECH_REP, UG_COUNCIL } from "@/lib/ug-council";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Undergraduate Council
          </h2>
          <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed">
            The SAB-UG Council is a constituent body of the SAB with members as:
            the student member of the DUPC or CUPC and/or PhD students nominated
            by the Chairperson of the DUPC or CUPC of each academic department
            or center, and the B.Tech Representative of the SAB.The activities
            of the SAB-U.G. council shall be coordinated by the B.Tech
            Representative of the SAB. Each DUPC or CUPC can initiate various
            departmental and inter-departmental activity by means of proper
            formal procedure involving/apprising General Secretary and Joint
            Secretary, SAB.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            B.Tech Representative
          </h2>

          <div className="mx-auto mt-12 flex justify-center px-4">
            {BTECH_REP.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl w-4xl max-w-sm"
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

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            DUPC Student Representatives
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {UG_COUNCIL.map(({ name, post, Photo, phone, email, linkedin }) => (
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
    </div>
  );
};

export default page;
