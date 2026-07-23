"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

interface Feature {
  id: string;
  title: string;
  description: string;
}

const getFeatureIcon = (index: number) => {
  const icons = [
    // 0: Curriculum (Book)
    <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    // 1: Mentorship (User speaking)
    <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>,
    // 2: Analytics (Chart)
    <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    // 3: Cohort Learning (Network/Group)
    <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    // 4: Custom Programs (Gear)
    <svg key="4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    // 5: Industry Certifications (Badge)
    <svg key="5" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  ];
  return icons[index % icons.length];
};

export const USPGrid: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("/api/content");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setFeatures(data.features || []);
        setStatus("success");
      } catch (error) {
        console.error("Failed to fetch features", error);
        setStatus("error");
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-neutral-50/50 scroll-mt-20">
      <Container>
        <SectionHeading
          title="Why Enterprises Choose Us"
          subtitle="Empower your workforce with world-class education tailored for corporate success."
          className="mb-16 md:mb-20"
        />
        
        {/* We use a wide gap-y to accommodate the floating icons that stick out of the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 md:gap-y-16">
          {status === "loading" &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="pt-6 h-full">
                <Card className="flex flex-col h-full animate-pulse border-none shadow-[0_8px_30px_rgba(0,0,0,0.04)] pt-12">
                  <div className="h-6 bg-neutral-200 rounded-md w-3/4 mb-4"></div>
                  <div className="h-4 bg-neutral-200 rounded-md w-full mb-2 flex-grow"></div>
                  <div className="h-4 bg-neutral-200 rounded-md w-5/6"></div>
                </Card>
              </div>
            ))}

          {status === "error" && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-neutral-500">
                Unable to load our capabilities right now — please refresh.
              </p>
            </div>
          )}

          {status === "success" &&
            features.map((feature, index) => (
              <div key={feature.id} className="pt-6 h-full">
                <Card 
                  className="flex flex-col h-full relative group overflow-visible border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 pt-10 px-8 pb-8"
                  hover={false}
                >
                  {/* Floating Icon Box */}
                  <div className="absolute -top-7 left-8 w-14 h-14 bg-gradient-to-br from-primary to-sky-400 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    {getFeatureIcon(index)}
                  </div>
                  
                  <h3 className="font-bold text-neutral-900 text-xl mb-3 mt-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-base flex-grow">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default USPGrid;
