import React from 'react';
import { SectionContent } from '../types';

interface StatsProps {
  content: SectionContent['stats'];
}

const Stats: React.FC<StatsProps> = ({ content }) => {
  return (
    <div className="w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {content.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.value}
              </div>
              <div className="text-sm font-bold text-white mb-1 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-xs text-neutral-500">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;