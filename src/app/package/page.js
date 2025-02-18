import React from 'react'
import Image from 'next/image'

const Page = () => {
     return (
          <div>
               <div className="flex flex-col ">
                    {/* Top Section with Image */}
                    <div className="flex-1 relative">
                         {/* Blurred Background Image */}
                         <Image
                              src="/pkg1.webp"
                              alt="Image"
                              width={1000}
                              height={1000}
                              objectFit="cover"
                              className="w-full h-[600px] filter blur-sm"
                         />

                         {/* Small Images in the Center */}
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex hidden space-x-4">
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 1"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 2"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 3"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                         </div>
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col md:hidden space-x-4">
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 1"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 2"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                              <Image
                                   src="/pkg1.webp"
                                   alt="Small Image 3"
                                   width={200}
                                   height={200}
                                   className="object-cover border-[12px] mb-2 border-white"
                              />
                         </div>
                    </div>


                    {/* Bottom Section with Heading and Description */}
                    <div className="flex-1 bg-gray-100 p-6 sm:p-12">
                         <h1 className="text-5xl md:text-8xl  font-light mb-4">PRIVATE DINING EXPERIENCES</h1>
                         <p className="text-lg font-semibold text-center">LUXURY IN-HOUSE CHEF & BARTENDER PACKAGES</p>
                         <p className="text-lg font-normal text-center mb-2">TAILORED IN-HOME DINING EXPERIENCES FEATURING GOURMET INGREDIENTS AND OPTIONAL WINE PAIRING OR COCKTAIL-MAKING CLASSES</p>
                         <p className="text-lg font-semibold text-center">UNIQUE LOCATIONS</p>
                         <p className="text-lg font-normal text-center mb-2">DINNERS HOSTED AT VINEYARDS, ROOFTOPS, PRIVATE BEACHES, OR YACHTS FOR AN UNFORGETTABLE SETTING.</p>
                         <p className="text-lg font-normal text-center mb-2"><span className='font-semibold'>ADD ON:</span> LIVE MU SIC, DJ, THEMED EVENT STYLING, BAR HIRE, DANCERS/PERFORMERS, LIMOU SINE TRANSFERS, ADDITIONAL
                              BARTENDERS, ADDITIONAL WAITSTAFF</p>
                    </div>
               </div>

               {/* second section */}
               <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Left Section with Image */}
                    <div className="flex-1">
                         <img src="/island.jpg" alt="Image" className="w-full h-[400px] object-cover" />
                    </div>

                    {/* Right Section with Heading */}
                    <div className="flex-1">
                         <h1 className="md:text-8xl text-5xl sm:text-4xl font-light mt-10 text-center sm:text-left">
                              EXCLUSIVE PARTY PACKAGES
                         </h1>
                    </div>
               </div>

               <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Left Section with Image */}


                    <div className="flex-1 md:px-28 md:mt-20">
                         <p className="text-lg font-semibold text-center">THEMED EVENT PLANNING</p>
                         <p className="text-lg font-normal text-center mb-2">OUR SIGNATURE THEMES, SUCH AS ITALIAN SUMMER,                           1920S GATSBY, AND HOLLYWOOD GLAM, FEAT U RE LIVE
                              ENTERTAINMENT, STUNNING DÉCOR, AND SEAMLESS
                              COORDINATION</p>
                         <p className="text-lg font-semibold text-center">LUXURY POOL PARTIES</p>
                         <p className="text-lg font-normal text-center mb-2">HIGH-ENERGY POOL PARTIES WITH EVENT STYLING, DJS,
                              DJ & SPEAKER HIRE, BAR HIRE, BARTENDERS,
                              PERFORMERS, SECURITY AND PROFESSIONAL
                              PHOTOGRAPHERS TO CAPTURE THE MAGIC
                              COORDINATION</p>
                    </div>


                    {/* Right Section with Heading */}
                    <div className="flex-1">
                         <img src="/island.jpg" alt="Image" className=" w-[250px] h-[250px] md:-mt-12 object-cover" />
                    </div>
               </div>


               {/* third section */}
               <div className="flex mt-4 flex-col md:flex-row">
                    {/* Left Section */}
                    <div className="flex-1 p-4 md:mt-8">
                         <h1 className="md:text-8xl text-6xl font-light text-center mb-4 ">Proposals</h1>
                         <p className="text-lg mb-4 px-16 text-center">PERSONALIZED PLANNING WITH FLORAL
                              ARRANGEMENTS, FULL EVENT STYLING,
                              PHOTOGRAPHY, LIVE MUSIC AND LUXURY
                              TRANSPORT.</p>
                         <p className="text-lg mb-4 px-16 text-center">DESTINATION EVENTS WITH FULL TRAVEL
                              PLANNING FOR SEAMLESS EXECUTION.</p>
                         <p className="text-lg mb-4 px-16 text-center">UNIQUE LOCATIONS AVAILABLE SUCH AS
                              VINEYARDS, ROOFTOPS, PRIVATE BEACHES, OR
                              YACHTS FOR AN UNFORGETTABLE SETTING.</p>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 p-4 relative mb-5">
                         <Image
                              src="/about.jpg" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className="w-full h-auto object-cover"
                         />
                         <Image
                              src="/high tea.jpg" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className=" h-[230px] w-[200px] border-8 border-white border-b-[30px] shadow-2xl transform rotate-12 object-cover absolute top-[60%] right-8 "
                         />
                         <Image
                              src="/high tea.jpg" // Replace with your image path
                              alt="Descriptive image"
                              width={500} // Adjust as needed
                              height={300} // Adjust as needed
                              className=" h-[230px] w-[200px] border-8 border-white border-b-[30px] shadow-2xl transform  object-cover absolute top-[65%] right-16 "
                         />
                    </div>
               </div>

               {/* fourth section */}



               {/* fifth section */}

               <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Left Section with Image */}
                    <div className="flex-1">
                         <img src="/island.jpg" alt="Image" className="w-full h-[400px] object-cover mt-24 md:mt-0" />
                    </div>

                    {/* Right Section with Heading */}
                    <div className="flex-1">
                         <h1 className="md:text-8xl text-5xl sm:text-4xl font-light mt-10 text-center sm:text-left">
                              VIP
                              CONCIERGE
                              SERVICES
                         </h1>
                    </div>
               </div>

               <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Left Section with Image */}


                    <div className="flex-1 md:px-28 md:mt-10">
                         <p className="text-lg font-semibold text-center">CUSTOM ITINERARIES</p>
                         <p className="text-lg font-normal text-center mb-2">BESPOKE VACATION PLANS FEATURING DINING, SHOPPING,
                              ADVENTURES, TRANSFERS AND ENTERTAINMENT.</p>
                         <p className="text-lg font-semibold text-center">AIRPORT MEET-AND-GREET</p>
                         <p className="text-lg font-normal text-center mb-2">VIP TRANSPORT WITH CHAMPAGNE, REFRESHMENTS, AND A
                              PREMIUM TOUCH.</p>
                         <p className="text-lg font-semibold text-center">TRANSPORTATION ADD-ONS                         </p>
                         <p className="text-lg font-normal text-center mb-2">LUXURY TRANSFERS
                              LIMOU SINES, CLASSIC CARS, OR HELICOPTERS FOR THE
                              ULTIMATE ARRIVAL EXPERIENCE</p>
                    </div>


                    {/* Right Section with Heading */}
                    <div className="flex-1">
                         <img src="/island.jpg" alt="Image" className=" w-[250px] h-[250px] md:-mt-12 object-cover " />
                    </div>
               </div>

          </div>
     )
}

export default Page
