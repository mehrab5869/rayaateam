import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
    content: SectionContent['projects'];
    lang: 'fa' | 'en';
}

const Projects: React.FC<ProjectsProps> = ({ content, lang }) => {
  return (
    <div id="projects" className="py-16 md:py-24 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="w-8 md:w-12 h-[1px] bg-neutral-700"></div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{content.title}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {content.items.map((project, idx) => (
          <GlassCard key={project.id} className="group !bg-neutral-900/40 hover:!bg-neutral-900/60 transition-colors">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12 items-center">
                
                {/* Visual Representation (Abstract) */}
                <div className={`
                    aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/5 relative
                    ${idx % 2 === 1 ? 'md:order-last' : ''}
                `}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${idx % 2 === 0 ? 'from-cyan-900/40 via-blue-900/20 to-black' : 'from-purple-900/40 via-pink-900/20 to-black'} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    
                    {/* Fake UI Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-lg backdrop-blur-sm flex flex-col p-3 md:p-4 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                        <div className="flex gap-2 mb-3 md:mb-4">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-1/2 h-1.5 md:h-2 bg-white/10 rounded"></div>
                            <div className="w-3/4 h-1.5 md:h-2 bg-white/10 rounded"></div>
                            <div className="w-full h-1.5 md:h-2 bg-white/5 rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-neutral-500">0{project.id}</span>
                        <a href={project.link} className="p-2 rounded-full border border-white/10 text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all">
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all">
                        {project.title}
                    </h3>
                    
                    <p className="text-neutral-400 text-sm md:text-lg leading-relaxed font-light">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 text-[10px] md:text-xs border border-white/5 bg-white/5 rounded-full text-neutral-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;