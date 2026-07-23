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
    <section id="programs" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <Container>
        <SectionHeading
          title="Why Enterprises Choose Us"
          subtitle="Empower your workforce with world-class education tailored for corporate success."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {status === "loading" &&
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={`skeleton-${i}`} className="flex flex-col h-full animate-pulse">
                <div className="h-6 bg-neutral-200 rounded-md w-3/4 mb-4"></div>
                <div className="h-4 bg-neutral-200 rounded-md w-full mb-2 flex-grow"></div>
                <div className="h-4 bg-neutral-200 rounded-md w-5/6"></div>
              </Card>
            ))}

          {status === "error" && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-neutral-500">
                Unable to load our capabilities right now — please refresh.
              </p>
            </div>
          )}

          {status === "success" &&
            features.map((feature, index) => (
              <Card 
                key={feature.id} 
                className={`flex flex-col h-full relative group overflow-hidden ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-primary/5' : ''
                }`}
              >
                {/* Decorative Icon */}
                <div className={`mb-6 rounded-xl flex items-center justify-center shrink-0 ${index === 0 ? 'w-14 h-14 bg-primary text-white shadow-lg' : 'w-12 h-12 bg-primary/10 text-primary'}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className={`font-bold text-neutral-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                  {feature.title}
                </h3>
                <p className={`text-neutral-600 leading-relaxed flex-grow ${index === 0 ? 'text-lg max-w-2xl' : ''}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default USPGrid;
