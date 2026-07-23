import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 scroll-mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              Empower Your Workforce with <span className="text-primary">Premier Technical Education</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your enterprise with specialized learning pathways. We bridge the skills gap by connecting your teams with cutting-edge curriculum designed by top-tier academic institutions, driving measurable outcomes for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" href="#contact">
                Explore Enterprise Solutions
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/corporate-big-hero-v4.webp"
                alt="Corporate enterprise team collaborating"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
