import { DottedBG } from "@/components/card/dotted-bg";
import { BackgroundGradientDemo } from "@/components/card/gradient-card";
import LandingDescription from "@/components/card/landing-card";
import { NavigationMenu } from "@/components/navigation/nav-bar";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { GlobeDemo } from "@/components/ui/global-demo";

export default function Home() {
  return (
    <div className="">
      <div>
        <NavigationMenu />
      </div>
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

      <div className="flex md:flex-row  p-12 justify-center gap-12 sm:flex-col">
        <div>
          <DottedBG />
        </div>
        <div>
          <h1> For Referrers</h1>
          <p>
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
      <div className="flex md:flex-row mt-12 p-12 justify-center gap-12 sm:flex-col">
        <div>
          <h1> For Businesses</h1>
          <p>
            Register your business and banking information — completely free.
            From there, you can launch referral campaigns for specific products
            or services, setting the exact amounts you’re willing to pay for
            successful referrals. For simplicity, you can also create a
            spend-based campaign, ideal for businesses offering multiple
            products or services. Our intuitive onboarding process will guide
            you step-by-step to get your campaign live quickly and effortlessly.{" "}
          </p>
        </div>
        <div>
          <DottedBG />
        </div>
      </div>
      <div className="flex md:flex-row mt-12 p-12 justify-center gap-12 sm:flex-col">
        <div>
          <DottedBG />
        </div>
        <div>
          <h1> For Customers</h1>
          <p>
            Sign up for free with your personal and banking details to start
            receiving exclusive discounts and rewards from participating
            businesses. Continue to enjoy ongoing savings long after your first
            visit — benefits available only through the Referral World platform.
          </p>
        </div>
      </div>
    </div>
  );
}
