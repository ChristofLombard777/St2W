import St2WHero from "@/components/sections/st2w/St2WHero";
import St2WStoryScroll from "@/components/sections/st2w/St2WStoryScroll";
import St2WChallenges from "@/components/sections/st2w/St2WChallenges";
import St2WHowItWorks from "@/components/sections/st2w/St2WHowItWorks";
import St2WEarnings from "@/components/sections/st2w/St2WEarnings";
import St2WFees from "@/components/sections/st2w/St2WFees";
import St2WFinalCTA from "@/components/sections/st2w/St2WFinalCTA";
import WhatsAppFloat from "@/components/sections/st2w/WhatsAppFloat";

export default function St2WPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <St2WHero />
      <St2WStoryScroll />
      <St2WChallenges />
      <St2WHowItWorks />
      <St2WEarnings />
      <St2WFees />
      <St2WFinalCTA />
      <WhatsAppFloat />
    </div>
  );
}
