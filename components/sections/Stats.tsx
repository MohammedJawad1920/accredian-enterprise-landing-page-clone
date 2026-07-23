import React from 'react';
import { Container } from '@/components/ui/Container';

const statsData = [
  {
    value: '10K+',
    label: 'Global Learners',
  },
  {
    value: '200+',
    label: 'Enterprise Partners',
  },
  {
    value: '5K+',
    label: 'Successful Transitions',
  },
];

export const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </span>
              <span className="text-lg text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
