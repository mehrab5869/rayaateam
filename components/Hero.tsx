import React from 'react';
import { SectionContent } from '../types';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  content: SectionContent['hero'];
  lang: 'fa' | 'en';
}

const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-indigo-600/20 rounded-[100%] blur-[80px] md:blur-[120px] -z-10 mix-blend-screen animate-flow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] h-[200px] md:h-[400px] bg-cyan-500/10 rounded-[100%] blur-[60px] md:blur-[100px] -z-10 mix-blend-screen animate-flow" style={{ animationDelay: '-5s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
             <span className="text-[10px] md:text-xs font-mono text-emerald-400 tracking-wider">OPEN TO WORK</span>
          </div>

          {/* Main Title - Responsive sizing */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight leading-[0.95] md:leading-[0.9]">
            <span className="block text-white mix-blend-overlay opacity-50 text-[0.4em] mb-2 md:mb-4 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">
               {lang === 'fa' ? 'توسعه دهنده' : 'Developer Portfolio'}
            </span>
            <span className="block text-liquid pb-2">
              {content.name}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xs sm:max-w-lg md:max-w-2xl text-base sm:text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
             {content.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8 w-full sm:w-auto">
             <a href="#projects" className="group relative px-6 md:px-8 py-3.5 md:py-4 bg-white text-black rounded-full font-bold text-base md:text-lg overflow-hidden transition-transform active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                   {content.ctaPrimary} <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${lang === 'fa' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                </span>
             </a>
             <a href="#contact" className="px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium transition-colors text-base md:text-lg">
                {content.ctaSecondary}
             </a>
          </div>

        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default Hero;