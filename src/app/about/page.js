import React from 'react'
import Image from 'next/image'

const page = () => {
     return (
          <div className="flex mt-4 flex-col md:flex-row">
               {/* Left Section */}
               <div className="flex-1 p-4">
                    <h1 className="text-8xl font-light text-center mb-4 ">About Us</h1>
                    <p className="text-lg mb-4 px-16 text-center">Ultra Events Group is your go-to for bespoke event
                         planning and premium hire services, proudly serving the
                         Gold Coast and Brisbane. We simplify event hosting with
                         tailored packages featuring skilled bartenders, waitstaff,
                         dancers, DJs, and performers, perfect for everything from
                         intimate gatherings to grand celebrations.
                         For interstate and international clients, we handle every
                         detail—from VIP itineraries to exclusive dinner
                         reservations—ensuring a seamless experience. With
                         decades of hospitality and event management expertise,
                         we have access to the region’s best venues, creating
                         extraordinary moments that celebrate life’s milestones.
                         Whether it’s a private dinner, vibrant celebration, or
                         hens/bucks’ night, Ultra Events Group brings your vision to
                         life with meticulous planning and flawless execution. Your
                         event is our priority—because when it comes to your
                         special moments, only the best will do.</p>
                    <footer>
                         <h3 className="text-4xl text-center font-light">With Love Rachel</h3>
                    </footer>
               </div>

               {/* Right Section */}
               <div className="flex-1 p-4">
                    <Image
                         src="/about.jpg" // Replace with your image path
                         alt="Descriptive image"
                         width={500} // Adjust as needed
                         height={300} // Adjust as needed
                         className="w-full h-auto object-cover"
                    />
               </div>
          </div>
     )
}

export default page
