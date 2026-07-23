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
              <Card className="flex flex-col h-full overflow-hidden">
                <div className="relative h-48 sm:h-52 -mt-6 -mx-6 mb-6 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.title} program`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed flex-grow">
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
