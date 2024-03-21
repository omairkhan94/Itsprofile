'use client'

import React, { useState } from "react";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
// axios import commented out since it's not used in the onSubmit function, 
// but you can uncomment it if you plan to send data to a server.
// import axios from 'axios';

//email:

const templateParams = {
  name: 'OmairKhan',
  notes: 'Check this out!',
};

emailjs
  .send('service_wkzfuol', 'template_gq00n87', templateParams, {
    publicKey: 'R8b81Zyp43mJlbgff',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );








interface FormData {
  username: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Submitted successfully", data);
    setSubmittedUsername(data.username);
    setShowThankYou(true);

    // Assuming you might want to send data to a server:
    /*
    try {
      const response = await axios.post('http://localhost:8000/users', data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    */
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
      <h1 className="text-center font-bold text-4xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        {showThankYou ? (
          <div className="flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white shadow-xl rounded-lg">
              <h3 className="text-lg md:text-2xl text-gray-800 font-semibold">
                Thanks <br /> Your Form Submitted Successfully <br />
                {submittedUsername && (
                  <span className="text-green-500">
                    <strong>{submittedUsername}, We will contact you via email.</strong>
                  </span>
                )}
              </h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block">Username:</label>
              <input
              placeholder="yourname"
                type="text"
                id="username"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9\s]*$/,
                    message: "Username should only contain letters, numbers, and spaces.",
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block">Email:</label>
              <input
              placeholder="khan123@gmail.com"
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block">Message:</label>
              <textarea
              placeholder="feedback or suggestion"
                id="message"
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white rounded px-3 py-2">Submit</button>
          </form>
        )}
      </div>
    </div>

  );
}

export default Form;





















// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from 'axios';

// interface FormData {
//   username: string;
//   email: string;
//   message: string;
// }

// const Form: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
//     defaultValues: {
//       username: "",
//       email: "",
//       message: "",
//     },
//   });
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [submittedUsername, setSubmittedUsername] = useState<string | null>(null);

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     console.log("Form Submitted successfully", data);
//     setSubmittedUsername(data.username);
//     setShowThankYou(true);

//     // try {
//     //   const response = await axios.post('http://localhost:8000/users', data);
//     //   console.log(response);
//     // } catch (error) {
//     //   console.error(error);
//     // }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="max-w-md w-full">
//         <h2 className="text-center mb-4">FeedBack</h2>
//         {showThankYou ? (
//         <div class="flex items-center justify-center h-screen bg-gray-100">
//         <div class="text-center p-8 bg-white shadow-xl rounded-lg">
//           <h3 class="text-lg md:text-2xl text-gray-800 font-semibold">
//             Thanks <br /> Form Submitted Successfully <br />
//             {submittedUsername && (
//               <span class="text-green-500">
//                 <strong>{submittedUsername} we will contact you via email</strong>
//               </span>
//             )}
//           </h3>
//         </div>
//       </div>
      
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label htmlFor="username" className="block">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 {...register("username", {
//                   required: "Username is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9\s]*$/,
//                     message: "Name shouldn't be empty",
//                   },
//                 })}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//               <p className="error-msg">{errors.username?.message}</p>
//             </div>

//             <div>
//               <label htmlFor="email" className="block">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 {...register("email", {
//                   required: "Email is required",
//                 })}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//               <p className="error-msg">{errors.email?.message}</p>
//             </div>

//             <div>
//               <label htmlFor="message" className="block">Message:</label>
//               <input
//                 type="text"
//                 id="message"
//                 {...register("message", {
//                   required: "Message is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9 ]*$/,
//                     message: "i.e: cricket, football, gulf",
//                   },
//                 })}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//               <p className="error-msg">{errors.message?.message}</p>
//             </div>

//             {/* Remove password field */}

//             <button type="submit" className="w-full bg-blue-500 text-white rounded px-3 py-2">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Form;