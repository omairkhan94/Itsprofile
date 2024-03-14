"use client" // this is a client component

import React from "react";
import Image from "next/image";
// Ensure to import your necessary icons or components
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  // Example subject and body, customize these as needed
  const emailSubject = encodeURIComponent("Inquiry from the Website");
  const emailBody = encodeURIComponent("Hello Omair,\n\nI would like to discuss...");

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/khan.jpg"
            alt="Omair"
            width={325}
            height={325}
            className="rounded-full shadow-2x2"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">I'm Omair!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a <span className="font-semibold text-teal-600">Web Developer</span>
            based in Peshawar, KP. Working towards creating Web and Mobile Apps that
            make life easier and more meaningful.
          </p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=omairyahya55@gmail.com&su=${emailSubject}&body=${emailBody}`}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <a
          href="#about"
          className="hover:cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowDown size={35} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;


























// import React from "react";
// import Image from "next/image";
// // The HiArrowDown import is commented out as it's not used. 
// // If you plan to use it elsewhere, you can uncomment it.
// // import { HiArrowDown } from "react-icons/hi";

// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// const HeroSection = () => {
//   return (
//     <section id="home">
//       <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
//         <div className="md:mt-2 md:w-1/2">
//           <Image
//             src="/khan.jpg"
//             alt="Omair"
//             width={325}
//             height={325}
//             className="rounded-full shadow-2x2"
//           />
//         </div>
//         <div className="md:mt-2 md:w-3/5">
//           <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">I'm Omair!</h1>
//           <p className="text-lg mt-4 mb-6 md:text-2xl">
//             I'm a <span className="font-semibold text-teal-600">Web Developer </span>
//             based in Peshawar, KP. Working towards creating Web and Mobile Apps that
//             make life easier and more meaningful.
//           </p>
//           <a
//             href="mailto:omairyahya55@gmail.com"
//             className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer transition-colors duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//       <div className="flex flex-row items-center text-center justify-center">
//         <a
//           href="#about"
//           className="hover:cursor-pointer"
//         >
//           <MdOutlineKeyboardDoubleArrowDown size={35} className="animate-bounce" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




