import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  content: SectionContent['experience'];
  lang: 'fa' | 'en';
}

const Experience: React.FC<ExperienceProps> = ({ content, lang }) => {
  return (
    <div id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-indigo-500"></div>
        <h2 className="text-3xl font-bold text-white">{content.title}</h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent ${lang === 'fa' ? 'right-0 md:right-1/2' : 'left-0 md:left-1/2'}`}></div>

        <div className="space-y-12">
          {content.items.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className={`
                absolute top-0 w-4 h-4 rounded-full border-2 border-indigo-500 bg-black z-10
                ${lang === 'fa' ? '-right-[7px] md:right-1/2 md:translate-x-1/2' : '-left-[7px] md:left-1/2 md:-translate-x-1/2'}
                ${item.current ? 'animate-pulse bg-indigo-500' : ''}
              `}></div>

              {/* Date (Desktop) */}
              <div className={`hidden md:block w-1/2 pt-1 ${lang === 'fa' ? (index % 2 === 0 ? 'text-right pl-12' : 'text-left pr-12') : (index % 2 === 0 ? 'text-left pr-12' : 'text-right pl-12')}`}>
                <span className="text-indigo-400 font-mono text-sm tracking-widest">{item.period}</span>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${lang === 'fa' ? 'pr-8 md:pr-0' : 'pl-8 md:pl-0'}`}>
                <GlassCard className="p-6 md:p-8 hover:border-indigo-500/30 transition-colors">
                  <div className="md:hidden text-indigo-400 text-xs font-mono mb-2">{item.period}</div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    {item.current && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase font-bold tracking-wider">Current</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 mb-4 text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </GlassCard>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;