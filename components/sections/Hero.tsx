import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 scroll-mt-20 z-0">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight sm:leading-tight lg:leading-tight">
              Empower Your Workforce with <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent">Premier Technical Education</span>
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
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.15)] ring-1 ring-neutral-200/50">
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
