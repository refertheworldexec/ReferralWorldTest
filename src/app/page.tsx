import { BackgroundGradientDemo } from "@/components/card/gradient-card";
import LandingDescription from "@/components/card/landing-card";
import { GlobeDemo } from "@/components/ui/global-demo";

export default function Home() {
  return (
    <div className="">
      <div>
        <LandingDescription />
      </div>
      <div className="flex flex-col lg:p-12 p-6 lg:flex-row mt-24 items-center align-middle justify-center gap-12">
        <BackgroundGradientDemo
          title="Referrer"
          titleDescription="Earn While You Connect"
          message="Discover businesses, make meaningful referrals, and earn substantial commissions for every successful connection you create"
          buttonText="Start Earning"
        />

        <BackgroundGradientDemo
          title="Business"
          titleDescription="Grow Your Customer Base"
          message="Set your referral rates, attract quality customers, and control exactly what you pay to grow your business through trusted connections"
          buttonText="Grow Business"
        />

        <BackgroundGradientDemo
          title="Customer"
          titleDescription="Discover Trusted Bussines"
          message="Discover businesses, make meaningful referrals, and earn substantial commissions for every successful connection you create"
          buttonText="Discover Now"
        />
      </div>

      <GlobeDemo />
    </div>
  );
}
