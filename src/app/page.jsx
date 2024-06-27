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
    <section className="flex justify-center items-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-2-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="w-auto px-6 py-3 rounded-full bg-neutral-100">
            <span className="text-sm font-medium text-primary">
              Next.js Components library
            </span>
          </span>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Create apps with ease
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
            Startup components designed to eliminate roadblocks and accelerate
            your journey from concept to reality.
          </p>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <button className="py-4 px-6 bg-zinc-700 rounded-full text-white hover:bg-zinc-600 shadow-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
