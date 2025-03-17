'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const page = () => {
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
     const [isLoading, setIsLoading] = useState(false);
     const [message, setMessage] = useState('');

     const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzeyryn";

     const Toaster = ({ message, onClose }) => {
          useEffect(() => {
               if (message) {
                    const timer = setTimeout(onClose, 2000);
                    return () => clearTimeout(timer);
               }
          }, [message, onClose]);
          if (!message) return null;
          return (
               <div className="fixed bottom-5 right-5 bg-black text-white p-4 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
                    <span>{message}</span>
                    <button className="ml-2 text-gray-400 hover:text-white" onClick={onClose}>
                         &times;
                    </button>
               </div>
          );
     };

     // Function to send email


     // const sendFormspreeEmail = async (formData) => {
     //      setIsLoading(true);
     //      setMessage('');

     //      try {
     //           const response = await fetch(FORMSPREE_ENDPOINT, {
     //                method: 'POST',
     //                headers: {
     //                     'Content-Type': 'application/json'
     //                },
     //                body: JSON.stringify(formData)
     //           });

     //           if (response.ok) {
     //                setMessage("Email successfully sent!");
     //                reset();
     //           } else {
     //                setMessage("Error sending email. Please try again.");
     //           }
     //      } catch (error) {
     //           console.error("Error:", error);
     //           setMessage("Something went wrong. Try again later.");
     //      }

     //      setIsLoading(false);
     // };

     const sendFormspreeEmail = async (formData) => {
          setIsLoading(true);
          setMessage("");

          try {
               const response = await fetch("https://formspree.io/f/myzeyryn", {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                         email: formData.email,  // Ensure this is included
                         from_name: formData.from_name,
                         message: formData.message
                    })
               });

               if (response.ok) {
                    setMessage("✅ Email successfully sent!");
                    reset();
               } else {
                    setMessage("❌ Error sending email. Please try again.");
                    setIsLoading(false);
               }
          } catch (error) {
               console.error("Error:", error);
               setMessage("⚠️ Something went wrong. Try again later.");
               setIsLoading(false);
          }

          setIsLoading(false);
     };



     return (
          <div className=''>
               <Toaster message={message} onClose={() => setMessage("")} />
               <div className="flex flex-col md:flex-row">
                    {/* Left Section */}
                    <div className="flex-1 p-4 md:pt-28">
                         <h1 className="md:text-8xl text-6xl font-light text-center mb-4 ">Why CHOOSE US?</h1>
                         <p className="text-lg mb-4 px-16 text-center">OVER A DECADE OF EXPERTISE IN EVENT PLANNING
                              AND HOSPITALITY.</p>
                         <p className="text-lg mb-4 px-16 text-center">TAILORED SOL U TIONS TO FIT EVERY STYLE, VISION, AND
                              OCCASION.</p>
                         <p className="text-lg mb-4 px-16 text-center">A COMMITMENT TO CREATING UNFORGETTABLE,
                              STRESS-FREE CELEBRATIONS</p>
                    </div>



                    {/* Right Section */}
                    <div className="flex-1 p-4 relative">
                         <Image
                              src="/whyus.gif" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className="w-full h-[650px] object-cover"
                         />
                         <div className=''>
                              <Image
                                   src="/whyus2.gif" // Replace with your image path
                                   alt="Descriptive image"
                                   width={500} // Adjust as needed
                                   height={300} // Adjust as needed
                                   className=" h-[150px] w-[150px] shadow-2xl transform -rotate-6 object-cover absolute top-[60%] md:-left-10"
                              />
                         </div>

                    </div>
               </div>


               <div className="flex flex-col lg:flex-row pt-8 bg-gray-50">

                    {/* Contact Image (visible on desktop) */}
                    <div className="lg:block hidden w-[50%] ">
                         <Image
                              src="/letconnect.gif"
                              alt="Contact Us Image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className="w-full h-[700px] object-cover"
                         />
                    </div>
                    {/* Contact Form */}
                    <form
                         // onSubmit={handleSubmit(sendEmail)}
                         onSubmit={handleSubmit(sendFormspreeEmail)}
                         className="flex flex-col  w-[90%]  lg:w-[40%] mx-auto "
                    >
                         <h1 className="md:text-8xl text-6xl font-light text-center mb-4 ">LET'S CONNECT</h1>

                         <input
                              {...register("from_name", { required: "Name is required" })}
                              placeholder="Your Name"
                              className="p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                         />
                         {errors.from_name && <p className="text-red-500 text-xs">{errors.from_name.message}</p>}

                         <input
                              {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                              placeholder="Your Email"
                              className="p-3 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                         />
                         {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                         <textarea
                              {...register("message", { required: "Message is required" })}
                              placeholder="Your Message"
                              className="p-3 border border-gray-300 rounded-md mt-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                         />
                         {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}

                         <button
                              type="submit"
                              className="bg-black hover:cursor-pointer mt-4 text-white text-md py-3 rounded-md hover:bg-gray-600 transition duration-300"
                              disabled={isLoading} // Disable button while loading
                         >
                              {isLoading ? (
                                   <div className="flex  py-1.5 items-center justify-center space-x-2">
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
                                        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-400"></div>
                                   </div>

                              ) : (
                                   "Send Message"
                              )}
                         </button>
                         <div>
                              <p className="text-lg my-4 px-16 text-center">WEBSITE: ULTRA EVENTS GROUP</p>
                              <p className="text-lg mb-4 px-16 text-center">EMAIL: ULTRAEVENTS @OUTLOOK.COM.AU</p>
                              <p className="text-lg mb-4 px-16 text-center">PHONE: +61 (0) 435 896 957</p>
                              <p className="text-lg  px-16 text-center">INSTAGRAM: @ ULTRAEVENTSGROUP</p>
                         </div>
                    </form>



               </div>

               {/* <div className="flex  flex-col md:flex-row"> */}

               {/* <div className="flex-1 p-4">
                         <Image
                              src="/letconnect.gif" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className="w-full h-[650px] object-cover"
                         />

                    </div> */}


               {/* <div className="flex-1 p-4 md:pt-28">
                         <h1 className="md:text-8xl text-6xl font-light text-center mb-4 ">LET'S CONNECT</h1>
                         <p className="text-lg mb-4 px-16 text-center">WEBSITE: ULTRA EVENTS GROUP</p>
                         <p className="text-lg mb-4 px-16 text-center">EMAIL: ULTRAEVENTS @OUTLOOK.COM.AU</p>
                         <p className="text-lg mb-4 px-16 text-center">PHONE: +61 (0) 435 896 957</p>
                         <p className="text-lg mb-4 px-16 text-center">INSTAGRAM: @ ULTRAEVENTSGROUP</p>
                    </div> */}
               {/* </div> */}
          </div>

     )
}

export default page
