import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Search, PenTool, Code, Rocket
};

interface WorkflowProps {
  content: SectionContent['workflow'];
}

const Workflow: React.FC<WorkflowProps> = ({ content }) => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-white/20 to-indigo-500/20 -z-10"></div>

        {content.items.map((item, index) => {
          const Icon = iconMap[item.icon] || Code;
          return (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                
                {/* Step Number Bubble */}
                <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(79,70,229,0.2)] group-hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] z-10 relative">
                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <Icon className="w-8 h-8 text-white z-10" />
                   <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 border border-black flex items-center justify-center text-xs font-bold text-white">
                     {item.step}
                   </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workflow;