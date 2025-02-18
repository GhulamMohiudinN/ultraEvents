import React from 'react'
import Image from 'next/image'

const page = () => {
     return (
          // <div className='mt-6'>
          //      <div className="xs:flex-col md:flex items-center justify-between">
          //           <div className="flex-1">
          //                <p className="text-xl mb-2 text-center">BAR CART, CHARCUTERIE CART, AND THEMED DINNERWARE SET UPS.</p>
          //                <p className="text-xl text-center">CUSTOM BACKDROPS FOR PERSONALIZED STYLING</p>
          //           </div>

          //           <div className=" xs:w-full mt-3 md:mt-0 md:w-1/4 mr-5 items-center flex justify-center">
          //                <Image
          //                     src="/home2.gif"
          //                     alt="Image description"
          //                     width={170}
          //                     height={170}
          //                     className="object-cover"
          //                />
          //           </div>
          //      </div>

          //      <div className="xs:flex-col md:flex items-center justify-between">
          //           <div className="md:w-1/4 xs:w-full flex items-center md:items-start md:justify-normal justify-center mt-3">
          //                <Image
          //                     src="/island.jpg"
          //                     alt="Image description"
          //                     width={150}
          //                     height={150}
          //                     className="object-cover"
          //                />
          //           </div>

          //           <div className="flex-1">
          //                <p className="md:text-8xl text-6xl mb-2 text-center md:text-start font-light pl-9">HIRE</p>
          //           </div>

          //           <div className=" md:-mt-20 md:w-1/3 xs:w-full flex md:items-start md:justify-normal items-center justify-center mt-3">
          //                <Image
          //                     src="/hire1.gif"
          //                     alt="Image description"
          //                     width={130}
          //                     height={130}
          //                     className="object-cover"
          //                />
          //           </div>
          //      </div>
          //      <div className="xs:flex-col md:flex items-center justify-between p-4">
          //           <div className="md:w-1/4 xs-w-full flex justify-center items-center md:items-start md:justify-normal mt-3 md:mt-0">
          //                <Image src="/island.jpg" width={150} height={150} alt="Image 1" className="object-cover md:ml-48" />
          //           </div>

          //           <div className="flex-1 text-center">
          //                <p className="md:text-8xl text-6xl font-light">ITEMS</p>
          //           </div>

          //           <div className="md:w-1/4 xs:w-full flex justify-center items-center md:items-start md:justify-normal">
          //                <Image src="/island.jpg" width={170} height={170} alt="Image 2" className="object-cover  md:ml-16 mt-3 md:-mt-36" />
          //           </div>
          //      </div>

          //      <div className="xs:flex-col md:flex items-center justify-between">
          //           <div className="md:w-1/4 xs:w-full flex justify-center items-center md:items-start md:justify-normal">
          //                <Image
          //                     src="/island.jpg"
          //                     alt="Image description"
          //                     width={150}
          //                     height={150}
          //                     className="object-cover"
          //                />
          //           </div>

          //           <div className="flex-1">
          //                <p className="text-xl mb-2 text-center">DJ AV & SOUND SYSTEMS</p>
          //                <p className="text-xl text-center">PONTOON AND FAIRY LIGHTING, MARQUEES, AND FLORAL ARRANGEMENTS.</p>
          //           </div>
          //      </div>
          // </div>


          <div className="max-w-4xl mx-auto p-4">
               <h1 className="text-5xl md:text-8xl font-light text-center mb-4">HIRE ITEMS</h1>

               <div className="space-y-2 mb-6">
                    <p className="text-black text-xl text-center">BAR CART, CHARCUTERIE CART, AND THEMED DINNERWARE SET UPS.</p>
                    <p className="text-black text-xl text-center">This is the second description paragraph. More information can be found here.CUSTOM BACKDROPS FOR PERSONALIZED STYLING</p>
               </div>
               <div className="space-y-2 mb-6">
                    <p className="text-black text-xl text-center">DJ AV & SOUND SYSTEMS</p>
                    <p className="text-black text-xl text-center">PONTOON AND FAIRY LIGHTING, MARQUEES, AND FLORAL ARRANGEMENTS.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                         <Image src="/hire1.gif" alt="Image 1" width={500} height={300} className="w-full h-full" />
                    </div>
                    <div>
                         <Image src="/hire2.webp" alt="Image 2" width={500} height={300} className="w-full h-full" />
                    </div>
                    <div>
                         <Image src="/hire3.gif" alt="Image 3" width={500} height={300} className="w-full h-full" />
                    </div>
                    <div>
                         <Image src="/hire4.gif" alt="Image 4" width={500} height={300} className="w-full h-full" />
                    </div>
                    <div>
                         <Image src="/hire5.gif" alt="Image 5" width={500} height={300} className="w-full h-full" />
                    </div>
                    <div>
                         <Image src="/hire6.gif" alt="Image 6" width={500} height={300} className="w-full h-full" />
                    </div>
               </div>
          </div>
     )
}

export default page
