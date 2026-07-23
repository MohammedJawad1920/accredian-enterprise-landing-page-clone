"use client";

import React, { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/content");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setTestimonials(data.testimonials || []);
        setStatus("success");
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
        setStatus("error");
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          title="What Our Partners Say"
          subtitle="Hear from industry leaders who have transformed their workforce with our programs."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {status === "loading" &&
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={`skeleton-${i}`} className="flex flex-col h-full animate-pulse">
                <div className="w-9 h-9 bg-neutral-200 rounded-md mb-4"></div>
                <div className="h-4 bg-neutral-200 rounded-md w-full mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded-md w-full mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded-md w-4/5 mb-6 flex-grow"></div>
                <div className="mt-auto">
                  <div className="h-5 bg-neutral-200 rounded-md w-1/2 mb-2"></div>
                  <div className="h-4 bg-neutral-200 rounded-md w-1/3 mb-1"></div>
                  <div className="h-4 bg-neutral-200 rounded-md w-1/4"></div>
                </div>
              </Card>
            ))}

          {status === "error" && (
            <div className="col-span-1 md:col-span-3 text-center py-12">
              <p className="text-neutral-500">
                Unable to load testimonials right now — please refresh.
              </p>
            </div>
          )}

          {status === "success" &&
            testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col h-full">
                <div className="text-primary opacity-20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
                <p className="text-neutral-700 leading-relaxed flex-grow italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-600">{testimonial.title}</p>
                  <p className="text-sm font-semibold text-primary mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
