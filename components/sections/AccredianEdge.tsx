import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const AccredianEdge = () => {
  return (
    <section id="edge" className="py-16 md:py-24 bg-white scroll-mt-20">
      <Container>
        <SectionHeading
          title="The Accredian Edge"
          subtitle="Empower your workforce with our industry-leading training methodology and practical expertise."
          align="center"
        />
        
        <div className="mt-12 flex justify-center w-full relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[60%] bg-primary/10 rounded-[100%] blur-[80px] -z-10 pointer-events-none" />
          
          {/* Desktop SVG - Hidden on mobile, block on md and up */}
          <div className="hidden md:block w-full max-w-5xl">
            <Image
              src="/images/accredian-edge-usp-v3.svg"
              alt="Accredian Edge — key aspects of our training approach"
              width={2032}
              height={761}
              className="w-full h-auto"
              priority={false}
            />
          </div>

          {/* Mobile SVG - Block on mobile, hidden on md and up */}
          <div className="block md:hidden w-full max-w-md mx-auto px-4">
            <Image
              src="/images/accredian-edge-usp-mobile.svg"
              alt="Accredian Edge — key aspects of our training approach"
              width={1536}
              height={1152}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
