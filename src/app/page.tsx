import Image from "next/image";

import HeroSectionOne from "@/components/HeroSection";
import FeatureSectionGrid from "@/components/features-section-1";
import { Introduction } from "@/components/Introduction";
import { TimelineWrapper } from "@/components/Timeline-wrapper";
import { GlowingEffectWrapper } from "@/components/GlowingEffect";
import { CardHoverEffect } from "@/components/CardHover";
import { homeContent } from "@/content/home/home";

const spacerClass = "h-22";

const spacerDiv = <div className="h-2"></div>;

export default function Home() {
  return (
    <>
      <div>
        <HeroSectionOne
          stickyScrollContentPass={homeContent.stickyScrollContent}
          heroSectionContent={homeContent.heroSection}
        ></HeroSectionOne>
        <Introduction></Introduction>
        <FeatureSectionGrid></FeatureSectionGrid>
        <TimelineWrapper></TimelineWrapper>
        <GlowingEffectWrapper></GlowingEffectWrapper>
        <CardHoverEffect></CardHoverEffect>
      </div>
    </>
  );
}
