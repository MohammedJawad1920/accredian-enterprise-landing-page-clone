import Hero from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import TrustedByLogos from "@/components/sections/TrustedByLogos";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import USPGrid from "@/components/sections/USPGrid";
import ProgramCategories from "@/components/sections/ProgramCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import LeadCapture from "@/components/sections/LeadCapture";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FadeIn><Stats /></FadeIn>
      <FadeIn><TrustedByLogos /></FadeIn>
      <FadeIn><AccredianEdge /></FadeIn>
      <FadeIn><USPGrid /></FadeIn>
      <FadeIn><ProgramCategories /></FadeIn>
      <FadeIn><HowItWorks /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><LeadCapture /></FadeIn>
    </main>
  );
}
