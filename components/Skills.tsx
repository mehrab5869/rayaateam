import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { Code2, Braces, Server, Database, Container, Layout, Cpu, Plus } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Container: Container,
  PenTool: Braces
};

interface SkillsProps {
  content: SectionContent['skills'];
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 flex items-center gap-4">
        <div className="w-8 md:w-12 h-[1px] bg-neutral-700"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{content.title}</h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[180px]">
        
        {content.items.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Cpu;
            // Make some items span larger areas for bento effect, adjust for mobile
            const isLarge = i === 0 || i === 3; 
            
            return (
                <GlassCard 
                    key={i} 
                    className={`
                        group p-5 md:p-6 flex flex-col justify-between 
                        ${isLarge ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
                        hover:bg-neutral-900 transition-colors
                    `}
                >
                    <div className="flex justify-between items-start">
                        <div className="p-2 md:p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">{skill.level}%</span>
                    </div>

                    <div>
                        <h3 className={`font-bold text-neutral-200 group-hover:text-white ${isLarge ? 'text-xl md:text-2xl mt-4' : 'text-sm md:text-lg mt-2'}`}>
                            {skill.name}
                        </h3>
                        {isLarge && (
                            <div className="mt-4 w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                                <div className="h-full bg-white rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        )}
                    </div>
                </GlassCard>
            );
        })}
        
        {/* Decorative Filler Card - Fixed UI */}
        <GlassCard className="col-span-1 row-span-1 md:col-span-1 relative overflow-hidden group cursor-pointer !bg-neutral-900">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-2">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform duration-300">
                 <Plus className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                 <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">+4</div>
                 <div className="text-[10px] md:text-xs font-medium text-neutral-400 uppercase tracking-widest group-hover:text-indigo-300 transition-colors">
                    {content.more}
                 </div>
              </div>
           </div>
        </GlassCard>

      </div>
    </div>
  );
};

export default Skills;