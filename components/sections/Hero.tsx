'use client';

import { motion } from 'framer-motion';
import {
    Code2, Rocket, Gauge, ShieldCheck, Workflow,
    Github, Linkedin, Box, Server, LineChart, Terminal, GitBranch
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export function Hero() {
    const { resolvedTheme } = useTheme();
    const nextIconUrl = resolvedTheme === 'light'
        ? "https://cdn.simpleicons.org/nextdotjs/111827"
        : "https://cdn.simpleicons.org/nextdotjs/white";

    const expressIconUrl = resolvedTheme === 'light'
        ? "https://cdn.simpleicons.org/express/000000"
        : "https://cdn.simpleicons.org/express/white";

    return (
        <section id="hero" className="relative pt-28 pb-4 px-4 sm:px-6 md:pt-40 md:pb-6 md:px-12 lg:pb-8 lg:px-16 max-w-[1400px] mx-auto z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-xl overflow-hidden backdrop-blur-xl border shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
                {/* Subtle top inner glow - reduced opacity */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />

                {/* Subtle ambient light - reduced intensity */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/[0.025] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/[0.025] rounded-full blur-[120px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-0 relative z-10">

                    {/* LEFT COLUMN */}
                    <div className="p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r flex flex-col justify-between relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                        {/* Corner highlight - reduced opacity */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/[0.02] rounded-full blur-[60px] pointer-events-none" />
                        
                        {/* Pulsing shimmery vertical divider overlay */}
                        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none hidden lg:block animate-border-pulse" />
                        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent pointer-events-none lg:hidden animate-border-pulse" />

                        <div className="relative z-10">
                            <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-5 md:mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                                Full Stack Engineer & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">Open Source Builder</span>
                            </h2>

                            <p className="text-sm leading-relaxed mb-8 md:mb-12 max-w-md" style={{ color: 'var(--text-muted)' }}>
                                Currently building scalable WordPress ecosystems, open-source plugins, themes, APIs, internal tooling, and high-performance frontend systems using React, Next.js, PHP, Node.js, and TypeScript.
                            </p>

                            <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8 md:gap-y-6 md:mb-12">
                                <FeaturePill icon={Code2} title="Clean Code" desc="& Best Practices" />
                                <FeaturePill icon={Rocket} title="Scalable" desc="Solutions" />
                                <FeaturePill icon={Gauge} title="Performance" desc="Focused" />
                                <FeaturePill icon={ShieldCheck} title="Maintainable" desc="& Reliable" />
                                <FeaturePill icon={Workflow} title="Automation" desc="& Workflows" />
                                <FeaturePill icon={GitBranch} title="Open Source" desc="Projects" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://github.com/KunalPareek21" target="_blank" className="flex-1 flex items-center gap-3 p-3.5 rounded-xl border hover:border-emerald-500/20 hover:shadow-[0_4px_20px_rgba(16,185,129,0.02)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 group" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)' }}>
                                    <Github className="w-6 h-6 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors duration-300" />
                                    <div>
                                        <div className="text-sm font-semibold group-hover:text-emerald-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>GitHub</div>
                                        <div className="text-[10px] group-hover:text-emerald-500/80 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>github.com/KunalPareek21</div>
                                    </div>
                                </Link>
                                <Link href="https://dev.to/kunal_pareek" target="_blank" className="flex-1 flex items-center gap-3 p-3.5 rounded-xl border hover:border-emerald-500/20 hover:shadow-[0_4px_20px_rgba(16,185,129,0.02)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 group" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)' }}>
                                    <div className="w-6 h-6 bg-gray-500/80 text-white font-bold text-[10px] flex items-center justify-center rounded group-hover:bg-emerald-500 transition-colors duration-300">DEV</div>
                                    <div>
                                        <div className="text-sm font-semibold group-hover:text-emerald-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>DEV.to</div>
                                        <div className="text-[10px] group-hover:text-emerald-500/80 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>dev.to/kunal_pareek</div>
                                    </div>
                                </Link>
                            </div>
                            <Link href="https://www.linkedin.com/in/kunal-pareek21/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-start sm:justify-center gap-3 p-3.5 rounded-xl border hover:border-emerald-500/20 hover:shadow-[0_4px_20px_rgba(16,185,129,0.02)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 group" style={{ backgroundColor: 'var(--card-secondary)', borderColor: 'var(--border)' }}>
                                <Linkedin className="w-6 h-6 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors duration-300" />
                                <div className="text-left sm:text-center">
                                    <div className="text-sm font-semibold group-hover:text-emerald-500 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>LinkedIn</div>
                                    <div className="text-[10px] group-hover:text-emerald-500/80 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>linkedin.com/in/kunal-pareek21</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col relative" style={{ backgroundColor: 'var(--card-secondary)', backgroundImage: 'linear-gradient(180deg, transparent 60%, var(--card) 100%)' }}>

                        {/* Tech Stack Row - Infinite Marquee */}
                        <div className="border-b relative overflow-hidden flex flex-col justify-center" style={{ borderColor: 'var(--border)' }}>
                            <div className="px-6 sm:px-8 md:px-12 pt-6 sm:pt-8 md:pt-12 mb-6 md:mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                                    <span className="text-[10px] font-mono text-emerald-500/90 tracking-widest uppercase">Tech Stack</span>
                                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/10 to-transparent ml-2" />
                                </div>
                            </div>

                            {/* Gradient mask for seamless scrolling edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--card-secondary), transparent)' }} />
                            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--card-secondary), transparent)' }} />

                            <style>{`
                @keyframes infiniteScroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                  animation: infiniteScroll 28s linear infinite;
                }
                .group\\/marquee:hover .animate-infinite-scroll {
                  animation-play-state: paused;
                }
                
                @keyframes borderPulse {
                  0%, 100% { opacity: 0.15; }
                  50% { opacity: 0.35; }
                }
                .animate-border-pulse {
                  animation: borderPulse 8s ease-in-out infinite;
                }
              `}</style>

                            <div className="flex pt-3 pb-6 sm:pb-8 md:pb-12 overflow-hidden select-none group/marquee w-full">
                                <div className="flex shrink-0 gap-4 sm:gap-6 md:gap-8 items-center min-w-max animate-infinite-scroll px-3 sm:px-4">
                                    {/* Set 1 - Complete premium tech stack order */}
                                    <TechIconItem name="React" url="https://cdn.simpleicons.org/react/61DAFB" />
                                    <TechIconItem name="Next.js" url={nextIconUrl} />
                                    <TechIconItem name="WordPress" url="https://cdn.simpleicons.org/wordpress/21759B" />
                                    <TechIconItem name="Vue.js" url="https://cdn.simpleicons.org/vuedotjs/4FC08D" />
                                    <TechIconItem name="TypeScript" url="https://cdn.simpleicons.org/typescript/3178C6" />
                                    <TechIconItem name="JavaScript" url="https://cdn.simpleicons.org/javascript/F7DF1E" />
                                    <TechIconItem name="REST APIs" url="https://cdn.simpleicons.org/postman/FF6C37" />
                                    <TechIconItem name="jQuery" url="https://cdn.simpleicons.org/jquery/0769AD" />
                                    <TechIconItem name="Node.js" url="https://cdn.simpleicons.org/nodedotjs/339933" />
                                    <TechIconItem name="Express.js" url={expressIconUrl} />
                                    <TechIconItem name="PHP" url="https://cdn.simpleicons.org/php/777BB4" />
                                    <TechIconItem name="MongoDB" url="https://cdn.simpleicons.org/mongodb/47A248" />

                                    {/* Set 2 (Duplicate for continuous loop) */}
                                    <TechIconItem name="React" url="https://cdn.simpleicons.org/react/61DAFB" />
                                    <TechIconItem name="Next.js" url={nextIconUrl} />
                                    <TechIconItem name="WordPress" url="https://cdn.simpleicons.org/wordpress/21759B" />
                                    <TechIconItem name="Vue.js" url="https://cdn.simpleicons.org/vuedotjs/4FC08D" />
                                    <TechIconItem name="TypeScript" url="https://cdn.simpleicons.org/typescript/3178C6" />
                                    <TechIconItem name="JavaScript" url="https://cdn.simpleicons.org/javascript/F7DF1E" />
                                    <TechIconItem name="REST APIs" url="https://cdn.simpleicons.org/postman/FF6C37" />
                                    <TechIconItem name="jQuery" url="https://cdn.simpleicons.org/jquery/0769AD" />
                                    <TechIconItem name="Node.js" url="https://cdn.simpleicons.org/nodedotjs/339933" />
                                    <TechIconItem name="Express.js" url={expressIconUrl} />
                                    <TechIconItem name="PHP" url="https://cdn.simpleicons.org/php/777BB4" />
                                    <TechIconItem name="MongoDB" url="https://cdn.simpleicons.org/mongodb/47A248" />
                                </div>
                            </div>
                        </div>

                        {/* What I Build */}
                        <div className="p-6 sm:p-8 md:p-12 flex-1 relative">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                                <span className="text-[10px] font-mono text-emerald-500/90 tracking-widest uppercase">What I Build</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/10 to-transparent ml-2" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 border-t" style={{ borderColor: 'var(--border)' }}>
                                {/* Cell 1 */}
                                <div className="py-2 md:pr-4 border-b" style={{ borderColor: 'var(--border)' }}>
                                    <BuildItem
                                        customIcon={<img src="https://cdn.simpleicons.org/wordpress/10b981" alt="WordPress" className="w-5 h-5 object-contain pointer-events-none" />}
                                        title="WordPress Architecture"
                                        desc="Plugins, Themes, Hooks, Websites"
                                    />
                                </div>
                                {/* Cell 2 */}
                                <div className="py-2 md:pl-4 border-b" style={{ borderColor: 'var(--border)' }}>
                                    <BuildItem
                                        icon={Box}
                                        title="APIs & Integrations"
                                        desc="REST APIs, External Services"
                                    />
                                </div>
                                {/* Cell 3 */}
                                <div className="py-2 md:pr-4 border-b" style={{ borderColor: 'var(--border)' }}>
                                    <BuildItem
                                        icon={Code2}
                                        title="Web Applications"
                                        desc="React, Next.js, Vue.js"
                                    />
                                </div>
                                {/* Cell 4 */}
                                <div className="py-2 md:pl-4 border-b" style={{ borderColor: 'var(--border)' }}>
                                    <BuildItem
                                        icon={Server}
                                        title="Backend Development"
                                        desc="Node.js, Express.js, PHP, MongoDB"
                                    />
                                </div>
                                {/* Cell 5 */}
                                <div className="py-2 md:pr-4 max-md:border-b" style={{ borderColor: 'var(--border)' }}>
                                    <BuildItem
                                        icon={LineChart}
                                        title="Dashboards & SaaS Systems"
                                        desc="Analytics, Admin Panels, Workflows"
                                    />
                                </div>
                                {/* Cell 6 */}
                                <div className="py-2 md:pl-4">
                                    <BuildItem
                                        icon={GitBranch}
                                        title="Open Source"
                                        desc="GitHub, DEV.to"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Futuristic Footer Strip - Enhanced spacing & visual rhythm */}
                        <div className="mt-auto px-4 md:px-6 py-4 md:py-5 border-t flex flex-col justify-center text-[8.5px] lg:text-[10px] font-mono tracking-[0.08em] lg:tracking-[0.12em] uppercase" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                            <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-3 sm:gap-x-4 lg:gap-x-6 w-full opacity-65 hover:opacity-100 transition-opacity duration-500 md:whitespace-nowrap">
                                <Terminal className="w-3.5 h-3.5 text-emerald-600/80 shrink-0 hidden sm:block" />
                                <span className="shrink-0 text-emerald-600 font-semibold">OPEN-SOURCE WORDPRESS TOOLS</span>
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-600/20 hidden sm:block" />
                                <span className="shrink-0 hover:text-emerald-500 transition-colors duration-300">ASYNC-FIRST ENGINEERING</span>
                                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-600/20 hidden sm:block" />
                                <span className="shrink-0 hover:text-emerald-500 transition-colors duration-300">PUBLIC GITHUB PROJECTS</span>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}

const FeaturePill = ({ icon: Icon, title, desc }: any) => (
    <div className="flex items-center gap-3.5 group cursor-default">
        <div className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-wide transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{title}</span>
            <span className="text-[10px] transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>{desc}</span>
        </div>
    </div>
);

const TechIconItem = ({ name, url }: { name: string, url: string }) => {
    const isWordPress = name === "WordPress";
    const isTypeScript = name === "TypeScript";
    const isRestAPI = name === "REST APIs";
    const isjQuery = name === "jQuery";
    const isExpress = name === "Express.js";
    
    // Choose custom border color on hover
    let hoverBorderClass = 'group-hover:border-[rgba(16,185,129,0.25)]';
    if (isWordPress) hoverBorderClass = 'group-hover:border-[rgba(33,117,155,0.3)]';
    else if (isTypeScript) hoverBorderClass = 'group-hover:border-[rgba(49,120,198,0.3)]';
    else if (isRestAPI) hoverBorderClass = 'group-hover:border-[rgba(255,108,55,0.3)]';
    else if (isjQuery) hoverBorderClass = 'group-hover:border-[rgba(7,105,173,0.3)]';
    else if (isExpress) hoverBorderClass = 'group-hover:border-[rgba(128,128,128,0.3)]';

    // Choose hover radial background
    let radialBackground = 'radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, transparent 70%)';
    if (isWordPress) radialBackground = 'radial-gradient(circle at center, rgba(33, 117, 155, 0.12) 0%, transparent 70%)';
    else if (isTypeScript) radialBackground = 'radial-gradient(circle at center, rgba(49, 120, 198, 0.12) 0%, transparent 70%)';
    else if (isRestAPI) radialBackground = 'radial-gradient(circle at center, rgba(255, 108, 55, 0.12) 0%, transparent 70%)';
    else if (isjQuery) radialBackground = 'radial-gradient(circle at center, rgba(7, 105, 173, 0.12) 0%, transparent 70%)';
    else if (isExpress) radialBackground = 'radial-gradient(circle at center, rgba(128, 128, 128, 0.08) 0%, transparent 70%)';

    // Choose inner shadow
    let innerShadow = 'inset 0 0 12px rgba(16, 185, 129, 0.1)';
    if (isWordPress) innerShadow = 'inset 0 0 15px rgba(33, 117, 155, 0.15)';
    else if (isTypeScript) innerShadow = 'inset 0 0 15px rgba(49, 120, 198, 0.15)';
    else if (isRestAPI) innerShadow = 'inset 0 0 15px rgba(255, 108, 55, 0.15)';
    else if (isjQuery) innerShadow = 'inset 0 0 15px rgba(7, 105, 173, 0.15)';
    else if (isExpress) innerShadow = 'inset 0 0 12px rgba(128, 128, 128, 0.1)';

    // Choose hover text color
    let hoverTextClass = 'group-hover:text-[var(--text-primary)]';
    if (isWordPress) hoverTextClass = 'group-hover:text-[rgba(33,117,155,0.95)] group-hover:font-semibold';
    else if (isTypeScript) hoverTextClass = 'group-hover:text-[rgba(49,120,198,0.95)] group-hover:font-semibold';
    else if (isRestAPI) hoverTextClass = 'group-hover:text-[rgba(255,108,55,0.95)] group-hover:font-semibold';
    else if (isjQuery) hoverTextClass = 'group-hover:text-[rgba(7,105,173,0.95)] group-hover:font-semibold';
    else if (isExpress) hoverTextClass = 'group-hover:text-[rgba(255,255,255,0.95)] group-hover:font-semibold';

    return (
        <div className="flex flex-col items-center gap-2.5 group w-16 select-none">
            <div 
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group-hover:scale-105 border-[var(--border)] transform-gpu ${hoverBorderClass}`}
                style={{ backgroundColor: 'var(--card)' }}
            >
                {/* Gentle hover radial glow */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                    style={{ background: radialBackground }}
                />
                
                {/* Subtle inner box shadow bloom */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{ boxShadow: innerShadow }}
                />

                <div className="relative z-10 w-6 h-6 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    <img 
                        src={url} 
                        alt={name} 
                        className="w-full h-full object-contain transition-all duration-500 pointer-events-none grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" 
                    />
                </div>
            </div>
            <span 
                className={`text-[10px] transition-colors duration-300 font-medium truncate w-full text-center text-[var(--text-muted)] ${hoverTextClass}`}
            >
                {name}
            </span>
        </div>
    );
};

const BuildItem = ({ icon: Icon, customIcon, title, desc }: any) => (
    <div 
        className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-transparent cursor-default group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-emerald-500/[0.01] hover:border-emerald-500/5 hover:shadow-[0_10px_30px_rgba(16,185,129,0.02)]"
    >
        <div className="mt-1 shrink-0">
            {customIcon ? (
                <div className="w-5 h-5 flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {customIcon}
                </div>
            ) : (
                <Icon 
                    className="w-5 h-5 text-emerald-500/60 group-hover:text-emerald-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                    strokeWidth={1.5} 
                />
            )}
        </div>
        <div className="flex flex-col justify-center">
            <h4 
                className="text-xs font-semibold tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-emerald-500" 
                style={{ color: 'var(--text-primary)' }}
            >
                {title}
            </h4>
            <p 
                className="text-[10px] mt-1 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-[var(--text-primary)]" 
                style={{ color: 'var(--text-muted)' }}
            >
                {desc}
            </p>
        </div>
    </div>
);
