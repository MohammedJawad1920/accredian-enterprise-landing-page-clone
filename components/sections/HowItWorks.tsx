import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

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
    <section id="how-it-works" className="py-16 sm:py-24 bg-neutral-50 scroll-mt-20 overflow-hidden">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="A streamlined four-step partnership model designed for maximum impact and minimal friction."
          className="mb-16 md:mb-24"
        />
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Track */}
          <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 lg:-translate-x-1/2 rounded-full" />
          
          {STEPS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.step} 
                className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mb-12 lg:mb-20 last:mb-0 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 lg:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary/20 shadow-[0_0_15px_rgba(79,70,229,0.3)] -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] group-focus-visible:border-primary mt-6 lg:mt-0">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>

                {/* Empty Space for layout balancing on Desktop */}
                <div className="hidden lg:block w-[45%]" />

                {/* Card Content */}
                <div className="ml-16 lg:ml-0 w-full lg:w-[45%] relative group">
                  <Card className="relative overflow-hidden p-8 hover:-translate-y-2 transition-all duration-300 h-full">
                    {/* Decorative Watermark Number */}
                    <div className="absolute -right-2 -bottom-6 text-9xl font-black text-neutral-100 opacity-60 z-0 select-none group-hover:text-primary/5 transition-colors duration-500">
                      0{item.step}
                    </div>
                    
                    {/* Text Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="lg:hidden text-2xl font-bold text-primary opacity-80">
                          0{item.step}
                        </span>
                        <h3 className="text-2xl font-bold text-neutral-900">{item.title}</h3>
                      </div>
                      <p className="text-neutral-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
