import Image from "next/image";
import earthImage from "@/../public/gpt_image.png";

export default function LandingDescription() {
  return (
    <div className="relative w-full h-screen">
      {" "}
      {/* Parent container with relative positioning and defined dimensions */}
      <Image
        src={earthImage}
        className="rounded-2xl p-2" // Path to your image in the public directory
        alt="Descriptive alt text for the image"
        layout="fill" // Makes the image fill the parent container
        objectFit="cover" // Ensures the image covers the area, cropping if necessary
        quality={100} // Optional: Adjust image qualit
      />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        {" "}
        {/* Overlay div for text */}
        <div className="flex flex-col "> 
          <h1 className="text-white 2xl:text-9xl lg:text-8xl md:text-7xl sm:text-7xl text-6xl text-shadow-lg font-bold fold text-center">
            Referral World
          </h1>

          <div className="text-white 2xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl text-2xl  mt-4   text-shadow-lg   font-bold text-center">
            Connect the World Through Trust
          </div>
          <div className="text-white 2xl:text-2xl lg:text-xl md:text-lg sm:text-md mt-6  text-shadow-lg  font-semibold text-center ">
            The global platform where businesses grow, referrers prosper ,{" "}
            <br />
            and customers discover trusted services.
          </div>
          <div className="flex  text-white  2xl:text-2xl lg:text-xl md:text-lg sm:text-md text-shadow-lg   mt-12 justify-center flex-row gap-12 ">
            <div>Verified Globally</div>
            <div>Earn WorldWide</div>
          </div>
        </div>
      </div>
    </div>
  );
}
