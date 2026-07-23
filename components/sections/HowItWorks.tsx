import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const STEPS = [
  {
    step: 1,
    title: 'Skill-Gap Mapping',
    description: 'We assess your workforce capabilities to identify precise knowledge gaps and organizational needs.',
  },
  {
    step: 2,
    title: 'Co-created Curriculum',
    description: 'Our experts design a tailored learning path aligned directly with your business goals and industry context.',
  },
  {
    step: 3,
    title: 'Cohort Onboarding',
    description: 'Learners are organized into collaborative groups, fostering peer accountability and a shared educational journey.',
  },
  {
    step: 4,
    title: 'Ongoing Analytics',
    description: 'Track progress with real-time dashboards, measuring engagement, completion rates, and tangible ROI.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="A streamlined four-step partnership model designed for maximum impact and minimal friction."
          className="mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop timeline feel */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-neutral-200 -z-10" />

          {STEPS.map((item) => (
            <div key={item.step} className="flex flex-col items-start lg:items-center relative">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shrink-0 shadow-md">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 lg:text-center">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed lg:text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
