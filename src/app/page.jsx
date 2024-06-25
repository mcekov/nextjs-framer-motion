import AnimateBorder from "@/components/AnimateBorder";
import AnimationControls from "@/components/AnimationControls";
import BasicOfMotion from "@/components/BasicOfMotion";
import Gestures from "@/components/Gestures";
import HeroThemes from "@/components/HeroThemes";
import RevealLinks from "@/components/RevealLinks";
import ScrollAnimations from "@/components/ScrollAnimations";
import SlideTabsNav from "@/components/SlideTabsNav";
import UseInView from "@/components/UseInView";
import UseScrollAdvanced from "@/components/UseScrollAdvanced";
import UseScrollBasic from "@/components/UseScrollBasic";
import ViewBasedAnimations from "@/components/ViewBasedAnimations";
import WhileInView from "@/components/WhileInView";

/* async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  return response.json();
} */

export default async function Home() {
  return (
    <main className="grid h-screen place-content-center">
      {/*  <BasicOfMotion /> */}
      {/*  <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      {/*    <ScrollAnimations /> */}
      {/*   <SlideTabsNav /> */}
      {/*  <AnimateBorder /> */}
      {/* <HeroThemes variant="lime" />
      <HeroThemes variant="red" />
      <HeroThemes />
      <HeroThemes variant="lime" />
      <HeroThemes variant="red" /> */}

      {/*  <UseInView /> */}
      {/*     <div className="h-[150vh]" /> */}
      {/*  <WhileInView /> */}
      {/* <UseInView /> */}
      {/* <UseScrollBasic /> */}
      {/* <UseScrollAdvanced /> */}
      {/* <UseScrollWithContainer /> */}

      {/* <UseScrollBasic /> */}
      {/*  <UseScrollAdvanced /> */}
      {/*  <div className="h-[150vh]" /> */}
      {/*    <RevealLinks /> */}
      <h1 className="text-4xl font-black">Home</h1>
    </main>
  );
}
