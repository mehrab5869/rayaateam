import React from 'react';
import { SectionContent, SocialLink } from '../types';
import { SOCIAL_LINKS } from '../constants';
import GlassCard from './GlassCard';
import { Github, Send, Instagram, Mail } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Github,
  Send,
  Instagram,
  Mail
};

interface ContactProps {
    content: SectionContent['contact'];
    lang: 'fa' | 'en';
}

const Contact: React.FC<ContactProps> = ({ content, lang }) => {
  return (
    <div id="contact" className="py-24 px-4 w-full max-w-4xl mx-auto text-center relative z-10">
      <GlassCard className="!p-16 !bg-gradient-to-b from-white/[0.05] to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          {content.title}
        </h2>
        <p className={`text-gray-300 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed ${lang === 'fa' ? '' : 'font-light'}`}>
          {content.description}
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = iconMap[link.iconName] || Mail;
            return (
              <a 
                key={index} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="p-5 bg-black/30 border border-white/10 rounded-2xl group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 group-hover:-translate-y-2 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                  {link.platform}
                </span>
              </a>
            );
          })}
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
          <span>© {new Date().getFullYear()} Mehrab API.</span>
          <span className="hidden md:inline">•</span>
          <span>{content.copyright} <span className="text-red-500 animate-pulse">♥</span></span>
        </div>
      </GlassCard>
    </div>
  );
};

export default Contact;