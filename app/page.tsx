import HeroCinematic from "@/components/sections/home/HeroCinematic";
import PartnerStrip from "@/components/sections/home/PartnerStrip";
import St2WStoryScroll from "@/components/sections/st2w/St2WStoryScroll";
import St2WChallenges from "@/components/sections/st2w/St2WChallenges";
import St2WHowItWorks from "@/components/sections/st2w/St2WHowItWorks";
import St2WEarnings from "@/components/sections/st2w/St2WEarnings";
import St2WFees from "@/components/sections/st2w/St2WFees";
import St2WFinalCTA from "@/components/sections/st2w/St2WFinalCTA";
import WhatsAppFloat from "@/components/sections/st2w/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCinematic />
      <div className="relative z-20 bg-white">
        <PartnerStrip />
        <St2WStoryScroll />
        <St2WChallenges />
        <St2WHowItWorks />
        <St2WEarnings />
        <St2WFees />
        <St2WFinalCTA />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
