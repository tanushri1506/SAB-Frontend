import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-6 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex items-start md:items-center md:justify-center">
          <Image
            src="/logos/logo.png"
            alt="IIT Guwahati Logo"
            className="object-contain text-white"
            width={128}
            height={128}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Useful Links</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-red-800">
              <a href="https://academic.iitg.ac.in/acad/coursewise_student_list/">
                CourseWise Students List
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/NoConversionCert_new.pdf">
                CPI Conversion Certificate
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://intranet.iitg.ac.in/acad/trans_certificate_issue.php">
                Transcript/Certificates
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/No_Migration_Certificate.pdf">
                No Issuance of Migration Certificate
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/aer/all_country">MoUs</a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/admission/imp_info/fee.php">
                FEE Structure for JAN-MAY 2025
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/sab/rnd.html">Summer Training</a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/extra_pdf/MediumofInstruction.pdf">
                Medium of Instruction
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Senate(Intranet Link)</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-red-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/Senate_Member.php">
                Senate Members
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="http://intranet.iitg.ac.in/acad/senate/senate_minutes.php">
                Senate Minutes
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/ippc.php">
                IPPC
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/iupc.php">
                IUPC
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="http://intranet.iitg.ac.in/acad/committee/iadc.php">
                IADC
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Forms</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/academic_forms.php">
                General Forms
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/BTech_BDes_forms.php">
                B.Tech | B.Des Forms
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/MTech_MDes_forms.php">
                M.Tech | M.Des Forms
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/MA_forms.php">MA Forms</a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.ac.in/acad/Phd_forms.php">PhD Forms</a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://intranet.iitg.ac.in/acad/trans_certificate_issue.php">
                Transcript/Certificates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Resources</h2>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/academic_ordinance.php">
                Academic Ordinance & Rules
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/academic_calender.php">
                Academic Calendar
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/courses_syllabee.php">
                Courses & Syllabi
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/minor_courses.php">
                Minor Courses & Syllabi
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/classtt/">
                Class Time Table
              </a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://iitg.irins.org/">Faculty Profiles</a>
            </li>
            <li className="hover:text-red-800">
              <a href="https://www.iitg.ac.in/acad/resource_gen.php">
                Resource Generation for Academic and its Amenities
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2025 Students' Academic Board, IIT Guwahati</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.instagram.com/sab.iitg/">
            <Instagram className="hover:text-red-800" />
          </a>
          <a href="https://www.youtube.com/channel/UCQVwt0WDMms4G8usTWRFmhg">
            <Youtube className="hover:text-red-800" />
          </a>
          <a href="https://www.facebook.com/sab.iitg">
            <Facebook className="hover:text-red-800" />
          </a>
          <a href="https://www.linkedin.com/company/iitgsab/mycompany/">
            <Linkedin className="hover:text-red-800" />
          </a>
          <a href="https://twitter.com/sabiitg">
            <Twitter className="hover:text-red-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
