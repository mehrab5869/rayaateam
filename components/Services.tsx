import React from 'react';
import { SectionContent } from '../types';
import GlassCard from './GlassCard';
import { Server, Bot, Database, Layout, Code2, Shield } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Server, Bot, Database, Layout, Code: Code2, Terminal: Shield
};

interface ServicesProps {
  content: SectionContent['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <div id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((item, index) => {
          const Icon = iconMap[item.icon] || Server;
          return (
            <GlassCard key={index} className="p-6 md:p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white text-indigo-400 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};

export default Services;