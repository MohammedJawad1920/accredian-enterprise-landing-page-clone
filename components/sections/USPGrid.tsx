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
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Why Enterprises Choose Us"
          subtitle="Empower your workforce with world-class education tailored for corporate success."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            features.map((feature) => (
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
