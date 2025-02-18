import React from 'react'
import Image from 'next/image'

const page = () => {
     return (
          <div>
               <div className="flex  flex-col md:flex-row">
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

               <div className="flex  flex-col md:flex-row">
                    {/* Left Section */}

                    <div className="flex-1 p-4">
                         <Image
                              src="/letconnect.gif" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className="w-full h-[650px] object-cover"
                         />

                    </div>


                    {/* Right Section */}
                    <div className="flex-1 p-4 md:pt-28">
                         <h1 className="md:text-8xl text-6xl font-light text-center mb-4 ">LET'S CONNECT</h1>
                         <p className="text-lg mb-4 px-16 text-center">WEBSITE: ULTRA EVENTS GROUP</p>
                         <p className="text-lg mb-4 px-16 text-center">EMAIL: ULTRAEVENTS @OUTLOOK.COM.AU</p>
                         <p className="text-lg mb-4 px-16 text-center">PHONE: +61 (0) 435 896 957</p>
                         <p className="text-lg mb-4 px-16 text-center">INSTAGRAM: @ ULTRAEVENTSGROUP</p>
                    </div>
               </div>
          </div>

     )
}

export default page
