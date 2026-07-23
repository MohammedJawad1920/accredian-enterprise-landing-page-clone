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

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("/api/content");
        if (response.ok) {
          const data = await response.json();
          setFeatures(data.features || []);
        }
      } catch (error) {
        console.error("Failed to fetch features", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Why Enterprises Choose Us"
          subtitle="Empower your workforce with world-class education tailored for corporate success."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="flex flex-col h-full">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed flex-grow">
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
