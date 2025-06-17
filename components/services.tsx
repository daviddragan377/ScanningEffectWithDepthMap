"use client";

import { useState } from 'react';
import Card from './ui/card';
import { HollowText } from './ui/emphasistext';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Branding',
    description:
      'We shape brand identities that resonate deeply with your audience, forging emotional connection through timeless design and strategic clarity.',
  },
  {
    title: 'Design',
    description:
      'From UI/UX to full visual systems, we design with precision, balancing aesthetics and usability to elevate every touchpoint.',
  },
  {
    title: 'Data & AI',
    description:
      'We embed intelligence into your products with bespoke AI solutions and data-driven insights that power smarter decision-making.',
  },
  {
    title: 'Web & App Development',
    description:
      'Full-stack solutions from MVP to enterprise scale — performant, elegant, and tailored for your niche and goals.',
  },
  {
    title: 'Creative Direction',
    description:
      'End-to-end brand leadership — from market and niche analysis to positioning and product placement, we help you stand apart from the competition.',
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section className="flex items-center flex-col justify-center py-12 mb-18 min-h-screen">
      <HollowText text="Services" color="text-white" tailwindClass="mb-8" />
      <Card>
        <div className="w-full divide-y divide-white/10">
          {services.map((service, i) => (
            <div key={i} className="text-white">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-4 text-left text-xl font-semibold hover:text-white/90 transition"
              >
                {service.title}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-white/70 text-base leading-relaxed ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-4 pr-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white/60">
          <p className="text-xs">[Click on each service to find out more]</p>
        </div>
      </Card>
    </section>
  );
}
