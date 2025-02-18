import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src="/bg-logo.png" // Path to your image
          alt="Full Screen Image"
          layout="fill" // This ensures the image takes up the full size of its parent
          objectFit="cover" // This ensures the image covers the entire area while maintaining its aspect ratio
          quality={100} // Optional: Controls the quality of the image (higher values = better quality)
        />
      </div>

      <h2 className="md:text-8xl text-6xl px-7 font-light my-4">Our Services</h2>
      <div className="flex flex-wrap my-12 px-6">
        {/* Left Section: 4 Image Sections */}
        <div className="w-full items-center lg:w-2/3 grid grid-cols-2 gap-4 mb-12 lg:mb-0">
          {/* Image 1 */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/home1.jpg" // Replace with your image path
              alt="Image 1"
              width={500} // Smaller width
              height={100}
              objectFit="contain" // Smaller height
              quality={100}
              className="object-cover h-[200px]"
            />
          </div>

          {/* Image 2 */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/home1.jpg" // Replace with your image path
              alt="Image 2"
              width={500} // Smaller width
              height={100} // Smaller height
              className="object-cover h-[200px] "
            />
          </div>

          {/* Image 3 */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/home1.jpg" // Replace with your image path
              alt="Image 3"
              width={500} // Smaller width
              height={100} // Smaller height
              className="object-cover h-[200px]"
            />
          </div>

          {/* Image 4 */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/home1.jpg" // Replace with your image path
              alt="Image 4"
              width={500} // Smaller width
              height={100} // Smaller height
              className="object-cover h-[200px]"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-full lg:w-1/3 flex flex-col pt-8 lg:pl-12">
          <p className="text-lg mb-6">
            PRIVATE DINING EXPERIENCES
          </p>
          <p className="text-lg mb-6">
            EXCLUSIVE PARTY PACKAGES
          </p>
          <p className="text-lg mb-6">
            PROPOSALS & MILESTONE EVENTS
          </p>
          <p className="text-lg mb-6">
            PRIVATE DINING EXPERIENCES
          </p>
          <p className="text-lg mb-6">
            BIRTHDAYS AND MILESTONE EVENTS
          </p>
          <p className="text-lg mb-6">
            VIP CONCIERGE SERVICES
          </p>
        </div>
      </div>


    </div>

  );
}
