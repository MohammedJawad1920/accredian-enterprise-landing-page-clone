import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const CATEGORIES = [
  {
    title: 'Data Science',
    description: 'Master advanced analytics, machine learning, and AI to drive data-centric decisions.',
    image: '/images/data-science-v2.webp',
  },
  {
    title: 'Digital Transformation',
    description: 'Lead your organization through modern technological shifts and digital workflows.',
    image: '/images/digital-transformation-v2.webp',
  },
  {
    title: 'Project Management',
    description: 'Learn agile methodologies and leadership skills to deliver complex initiatives on time.',
    image: '/images/project-management-v2.webp',
  },
  {
    title: 'Senior Management',
    description: 'Develop executive-level strategies and leadership acumen for modern enterprises.',
    image: '/images/senior-management-v2.webp',
  },
];

export const ProgramCategories: React.FC = () => {
  return (
    <section id="offerings" className="py-16 sm:py-24 bg-neutral-50 scroll-mt-20">
      <Container>
        <SectionHeading
          title="Our Program Areas"
          subtitle="Explore our comprehensive curriculum designed to equip your teams with future-ready skills."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <button
              key={category.title}
              type="button"
              className="text-left w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl transition-shadow group"
            >
              <Card 
                className="relative flex flex-col h-[320px] sm:h-[380px] overflow-hidden group-hover:-translate-y-2 transition-all duration-300 border-none rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-0" 
                hover={false}
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={`${category.title} program`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent transition-opacity duration-300 group-hover:from-neutral-900 group-hover:via-neutral-900/60" />
                
                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {category.title}
                  </h3>
                  <p className="text-neutral-200 leading-relaxed text-sm opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                    {category.description}
                  </p>
                </div>
              </Card>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProgramCategories;
