import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface LogoInfo {
  name: string;
  src: string;
  alt: string;
}

const logos: LogoInfo[] = [
  { name: "ADP", src: "/logos/adp.svg", alt: "ADP" },
  { name: "Bayer", src: "/logos/bayer.svg", alt: "Bayer" },
  { name: "CRIF", src: "/logos/crif.png", alt: "CRIF" },
  { name: "HCL", src: "/logos/hcl.png", alt: "HCL" },
  { name: "IBM", src: "/logos/ibm.png", alt: "IBM" },
  { name: "Reliance Industries", src: "/logos/rel.png", alt: "Reliance Industries" },
];

export const TrustedByLogos = () => {
  return (
    <section id="clients" className="py-12 bg-neutral-50 border-y border-neutral-200 scroll-mt-20">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider text-center">
            Trusted by leading global enterprises
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full">
            {logos.map((logo) => (
              <div 
                key={logo.name} 
                className="relative h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 lg:h-16 lg:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustedByLogos;
