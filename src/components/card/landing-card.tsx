import { Button } from "../ui/button";

export default function LandingDescription() {
  return (
    <div className="">
      <div className="">
        {" "}
        {/* Overlay div for text */}
        <div className="flex flex-col md:mt-40 mt-12">
          <h1 className=" 2xl:text-8xl lg:text-5xl md:text-5xl sm:text-7xl text-5xl  font-bold fold text-center">
            Referral{" "}
            <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent  transition-all duration-500">
              World
            </span>
          </h1>

          <div className=" 2xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg text-lg  md:mt-4 mt-2     font-bold text-center">
            Connect the World Through{" "}
            <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent  transition-all duration-500">
              Trust
            </span>
          </div>
          <div className=" 2xl:text-2xl font-light lg:text-md md:text-md sm:text-sm mt-6    text-center ">
            The global platform where businesses grow,
            <br />
            and customers discover trusted services.
          </div>
          <div className="flex     2xl:text-2xl lg:text-xl md:text-lg sm:text-md   mt-12 justify-center flex-row md:gap-12 gap-2 ">
            <Button
              size={"lg"}
              className="bg-green-700 text-white hover:bg-green-700 lg:p-8 md:p-4 md:text-md hover:cursor-pointer lg:text-4xl md:text-2xl sm:text-md "
            >
              Chat with us
            </Button>
            <Button
              size={"lg"}
              className="bg-white text-green-700 border-2 md:p-4  lg:p-8 md:text-md lg:text-4xl md:text-2xl sm:text-md  hover:cursor-pointer border-green-700 hover:text-white hover:bg-green-700"
            >
              {" "}
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
