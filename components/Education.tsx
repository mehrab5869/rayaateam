import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  content: SectionContent['education'];
  lang: 'fa' | 'en';
}

const Education: React.FC<EducationProps> = ({ content, lang }) => {
  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-[1px] bg-cyan-500"></div>
        <h2 className="text-3xl font-bold text-white">{content.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {content.items.map((item, index) => (
          <GlassCard key={index} className="p-8 hover:bg-neutral-900/80 transition-colors border-l-4 !border-l-cyan-500">
            <div className="flex items-start justify-between mb-4">
               <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
               </div>
               <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
                 {item.year}
               </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
            <div className="text-cyan-400 text-sm font-medium mb-4">{item.institution}</div>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Education;