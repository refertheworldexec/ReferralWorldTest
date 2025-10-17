import { DottedBG } from "@/components/card/dotted-bg";
import { BackgroundGradientDemo } from "@/components/card/gradient-card";
import LandingDescription from "@/components/card/landing-card";
import { NavigationMenu } from "@/components/navigation/nav-bar";
import { GlobeDemo } from "@/components/ui/global-demo";
import Image from "next/image";
import earthImage from "@/../public/robin.png";
import Footer from "@/components/card/footer";

export default function Home() {
  return (
    <div className="">
      <div>
        <NavigationMenu />
      </div>
      <div className="grid md:h-screen   md:grid-cols-2 grid-cols-1 bg-gradient-to-br from-green-500 via-green-50 to-white">
        <div>
          <LandingDescription />
        </div>
        <div className="md:p-12 md:mt-22 ">
          <div>
            <Image className="s" src={earthImage} alt="sad" />
          </div>
        </div>
      </div>
      <div className="md:mt-24 ">
        <h1 className="md:mt-16 mt-2 2xl:text-6xl lg:text-9xl md:text-4xl sm:text-2xl text-2xl  font-bold fold text-center">
          Built for Everyone in the Referral Ecosystem
        </h1>

        <div className=" font-light 2xl:text-3xl lg:text-5xl md:text-2xl sm:text-md text-md  md:mt-12 mt-2     text-center">
          <span className="bg-gradient-to-r font-light from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent  transition-all duration-500">
            Specialized
          </span>
          tools for Customers, Referrers, and Businesses
        </div>
      </div>
      <div className="grid md:mt-12 mt-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 md:bg-gradient-to-l bg-gradient-to-r from-green-400 via-green-50 to-white lg:p-12  lg:flex-row  items-center align-middle justify-center gap-12">
        <div className="md:p-12 p-6">
          <BackgroundGradientDemo
            title="Referrer"
            titleDescription="Earn While You Connect"
            message="Discover businesses, make meaningful referrals, and earn substantial commissions for every successful connection you create"
            buttonText="Start Earning"
          />
        </div>

        <div className="md:p-12 p-6">
          <BackgroundGradientDemo
            title="Business"
            titleDescription="Grow Your Customer Base"
            message="Set your referral rates, attract quality customers, and control exactly what you pay to grow your business through trusted connections"
            buttonText="Grow Business"
          />
        </div>
        <div className="md:p-12 p-6">
          <BackgroundGradientDemo
            title="Customer"
            titleDescription="Discover Trusted Bussines"
            message="Discover businesses, make meaningful referrals, and earn substantial commissions for every successful connection you create"
            buttonText="Discover Now"
          />
        </div>
      </div>

      <div>
        <h1 className="mt-16 2xl:text-6xl lg:text-9xl md:text-4xl sm:text-2xl text-2xl  font-bold fold text-center">
          Who we are ?
        </h1>

        <div className=" font-light 2xl:text-3xl lg:text-5xl md:text-lg sm:text-md text-md lg:mt-12  md:mt-2 mt-2      text-center">
          <span className="bg-gradient-to-r font-light from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent  transition-all duration-500">
            We’re on a mission to modernize referral marketing
          </span>
        </div>
      </div>

      <div className="flex  mt-24 bg-gradient-to-r from-green-100 via-green-50 to-white  md:flex-row  md:p-36 p-4 md:justify-center justify-start md:gap-12 sm:flex-col">
        <div className="md:visible invisible">
          <DottedBG />
        </div>
        <div>
          <h1 className="lg:mt-2 mt-0 text-left 2xl:text-6xl lg:text-9xl md:text-3xl sm:text-3xl text-xl  font-bold fold ">
            For Referrers
          </h1>
          <p className="2xl:text-2xl font-light lg:text-xl md:text-md sm:text-md lg:mt-6 mt-2    text-left">
            Sign up completely free using your personal and banking details to
            receive payments for referring businesses that offer incentives for
            new customers. Some businesses even pay tiered commissions for
            returning customers — allowing you to earn residual income simply by
            sharing your trusted recommendations. Once your referral converts
            into a verified sale, you’ll receive a notification from our
            platform, and your payment will be processed within 48 hours.
          </p>
        </div>
      </div>
      <div className="flex  md:p-36 bg-gradient-to-l from-green-100 via-green-50 to-white  md:flex-row mt-12 p-4 justify-center md:gap-12 sm:flex-col">
        <div>
          <h1 className="md:mt-2 mt-0 md:p-0 p-4 md:text-right text-left 2xl:text-6xl lg:text-9xl md:text-3xl sm:text-3xl text-4xl  font-bold fold ">
            {" "}
            For Businesses
          </h1>
          <p className="md:p-0 p-4 2xl:text-2xl font-light lg:text-xl md:text-md sm:text-md lg:mt-6 md:mt-2    md:text-right text-left">
            {" "}
            Register your business and banking information completely free. From
            there, you can launch referral campaigns for specific products or
            services, setting the exact amounts you’re willing to pay for
            successful referrals. For simplicity, you can also create a
            spend-based campaign, ideal for businesses offering multiple
            products or services. Our intuitive onboarding process will guide
            you step-by-step to get your campaign live quickly and effortlessly.{" "}
          </p>
        </div>
        <div className="md:visible invisible">
          <DottedBG />
        </div>
      </div>
      <div className="flex md:mt-24 mt-4 bg-gradient-to-r from-green-100 via-green-50 to-white  md:flex-row  md:p-36 p-4 justify-center md:gap-12 sm:flex-col">
        <div className="md:visible invisible">
          <DottedBG />
        </div>
        <div>
          <h1 className="lg:mt-2 mt-0 md:p-0  md:text-left text-left 2xl:text-6xl lg:text-9xl md:text-3xl sm:text-3xl text-4xl  font-bold fold ">
            For Customers
          </h1>
          <p className="2xl:text-2xl font-light lg:text-xl md:text-md sm:text-md lg:mt-6 md:mt-2    text-left">
            Sign up for free with your personal and banking details to start
            receiving exclusive discounts and rewards from participating
            businesses. Continue to enjoy ongoing savings long after your first
            visit — benefits available only through the Referral World platform.{" "}
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
