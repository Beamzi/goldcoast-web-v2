import Image from "next/image";

import HeroSectionOne from "@/components/HeroSection";
import FeatureSectionGrid from "@/components/features-section-1";
import { Introduction } from "@/components/Introduction";
import { TimelineWrapper } from "@/components/Timeline-wrapper";
import { BentoWrapper } from "@/components/bento-wrapper";
import { GlowingEffectWrapper } from "@/components/GlowingEffect";
import { CardHoverEffect } from "@/components/CardHover";
import { homeContent } from "@/content/home/home";

export default function Home() {
  return (
    <>
      <HeroSectionOne
        stickyScrollContentPass={homeContent.stickyScrollContent}
        heroSectionContent={homeContent.heroSection}
      ></HeroSectionOne>
      <Introduction></Introduction>
      <FeatureSectionGrid></FeatureSectionGrid>
      <TimelineWrapper></TimelineWrapper>
      <GlowingEffectWrapper></GlowingEffectWrapper>
      <CardHoverEffect></CardHoverEffect>
    </>
  );
}
