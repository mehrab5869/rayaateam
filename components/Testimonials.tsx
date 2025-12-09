import React from 'react';
import { SectionContent } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  content: SectionContent['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <div className="py-20 px-4 border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-2xl font-bold text-white opacity-80">{content.title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
            {content.items.map((item, i) => (
                <div key={i} className="relative p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
                    <Quote className="absolute top-6 left-6 text-white/5 w-10 h-10" />
                    <p className="relative z-10 text-neutral-300 text-lg leading-relaxed italic mb-6">
                        "{item.comment}"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            {item.name.charAt(0)}
                        </div>
                        <div>
                            <div className="text-white font-bold">{item.name}</div>
                            <div className="text-xs text-neutral-500">{item.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;