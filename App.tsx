import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { CONTENT } from './constants';

function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = lang === 'fa' ? "مهراب | توسعه‌دهنده API" : "Mehrab | API Developer";
  }, [lang]);

  const currentContent = CONTENT[lang];
  const fontClass = lang === 'fa' ? 'font-vazir' : 'font-sans';

  return (
    <div className={`relative min-h-screen bg-black text-white ${fontClass} selection:bg-indigo-500/30`}>
      
      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
         <div className="max-w-7xl mx-auto px-6">
            <nav className={`
                flex items-center justify-between p-2 rounded-full border transition-all duration-300
                ${scrolled ? 'bg-neutral-900/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}
            `}>
                {/* Brand */}
                <div className="px-4 font-bold text-xl tracking-tighter">
                   mehrab<span className="text-neutral-500">.api</span>
                </div>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                   {[
                     { id: 'experience', label: currentContent.nav.experience },
                     { id: 'services', label: currentContent.nav.services },
                     { id: 'contact', label: currentContent.nav.contact }
                   ].map(item => (
                     <a 
                       key={item.id} 
                       href={`#${item.id}`}
                       className="px-5 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
                     >
                       {item.label}
                     </a>
                   ))}
                </div>

                {/* Language Switcher - Sexy Toggle */}
                <div className="flex items-center gap-2" dir="ltr">
                    <div className="relative flex bg-neutral-900 border border-neutral-800 rounded-full p-1 h-10 w-32 items-center cursor-pointer overflow-hidden">
                        {/* Sliding Background */}
                        <div 
                           className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-neutral-700 rounded-full transition-all duration-300 ease-out shadow-lg`}
                           style={{ 
                               left: lang === 'en' ? '2px' : 'calc(50% + 2px)',
                           }}
                        ></div>
                        
                        <button 
                            onClick={() => setLang('en')}
                            className={`flex-1 relative z-10 text-xs font-bold transition-colors ${lang === 'en' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                        >
                            EN
                        </button>
                        <button 
                            onClick={() => setLang('fa')}
                            className={`flex-1 relative z-10 text-xs font-bold transition-colors ${lang === 'fa' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                        >
                            فا
                        </button>
                    </div>
                </div>
            </nav>
         </div>
      </header>

      <main className="relative z-10">
        <Hero content={currentContent.hero} lang={lang} />
        <Stats content={currentContent.stats} />
        <Services content={currentContent.services} />
        <Workflow content={currentContent.workflow} />
        <Experience content={currentContent.experience} lang={lang} />
        <Education content={currentContent.education} lang={lang} />
        <Skills content={currentContent.skills} />
        <Contact content={currentContent.contact} lang={lang} />
      </main>

      {/* Footer Simple */}
      <footer className="py-8 text-center text-neutral-600 text-sm relative z-10">
        <p>© 2024 Mehrab API. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;