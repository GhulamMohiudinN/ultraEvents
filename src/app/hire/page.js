import React from 'react'
import Image from 'next/image'

const page = () => {
     return (
          <div className='mt-6'>
               {/* First Section: Image + Text */}
               <div className="xs:flex-col md:flex items-center justify-between">
                    <div className="flex-1">
                         <p className="text-xl mb-2 text-center">BAR CART, CHARCUTERIE CART, AND THEMED DINNERWARE SET UPS.</p>
                         <p className="text-xl text-center">CUSTOM BACKDROPS FOR PERSONALIZED STYLING</p>
                    </div>

                    <div className=" xs:w-full mt-3 md:mt-0 md:w-1/4 mr-5 items-center flex justify-center">
                         <Image
                              src="/island.jpg"
                              alt="Image description"
                              width={170}
                              height={170}
                              className="object-cover"
                         />
                    </div>
               </div>

               {/* Second Section: Image + Text */}
               <div className="xs:flex-col md:flex items-center justify-between">
                    <div className="md:w-1/4 xs:w-full flex items-center md:items-start md:justify-normal justify-center mt-3">
                         <Image
                              src="/island.jpg"
                              alt="Image description"
                              width={150}
                              height={150}
                              className="object-cover"
                         />
                    </div>

                    <div className="flex-1">
                         <p className="md:text-8xl text-6xl mb-2 text-center md:text-start font-light pl-9">HIRE</p>
                    </div>

                    <div className=" md:-mt-20 md:w-1/3 xs:w-full flex md:items-start md:justify-normal items-center justify-center mt-3">
                         <Image
                              src="/island.jpg"
                              alt="Image description"
                              width={130}
                              height={130}
                              className="object-cover"
                         />
                    </div>
               </div>

               {/* Third Section */}
               <div className="xs:flex-col md:flex items-center justify-between p-4">
                    <div className="md:w-1/4 xs-w-full flex justify-center items-center md:items-start md:justify-normal mt-3 md:mt-0">
                         <Image src="/island.jpg" width={150} height={150} alt="Image 1" className="object-cover md:ml-48" />
                    </div>

                    <div className="flex-1 text-center">
                         <p className="md:text-8xl text-6xl font-light">ITEMS</p>
                    </div>

                    <div className="md:w-1/4 xs:w-full flex justify-center items-center md:items-start md:justify-normal">
                         <Image src="/island.jpg" width={170} height={170} alt="Image 2" className="object-cover  md:ml-16 mt-3 md:-mt-36" />
                    </div>
               </div>

               {/* Fourth Section */}
               <div className="xs:flex-col md:flex items-center justify-between">
                    <div className="md:w-1/4 xs:w-full flex justify-center items-center md:items-start md:justify-normal">
                         <Image
                              src="/island.jpg"
                              alt="Image description"
                              width={150}
                              height={150}
                              className="object-cover"
                         />
                    </div>

                    <div className="flex-1">
                         <p className="text-xl mb-2 text-center">DJ AV & SOUND SYSTEMS</p>
                         <p className="text-xl text-center">PONTOON AND FAIRY LIGHTING, MARQUEES, AND FLORAL ARRANGEMENTS.</p>
                    </div>
               </div>
          </div>
     )
}

export default page
