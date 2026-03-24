import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { SOCIAL_LINKS, getMailtoLink } from "@/data/socials";
import { PrivacyPolicy, TermsOfService, CookiePolicy } from "./PolicyDialogs";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ieee-navy pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ieee-gold/30 to-transparent" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/assets/logo.webp"
                                alt="IEEE EMSI Marrakesh Logo"
                                loading="lazy"
                                className="h-12 w-12 object-contain rounded-lg opacity-80"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-xl font-black tracking-tight text-ieee-gold leading-none">
                                    IEEE EMSI Marrakesh
                                </h3>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none mt-1">
                                    Student Branch
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                            Advancing technology for humanity. Join the IEEE Student Branch EMSI Marrakesh in our mission to inspire and innovate.
                        </p>
                        <div className="flex gap-5">
                            {[
                                { icon: <Linkedin size={20} />, href: SOCIAL_LINKS.linkedin },
                                { icon: <Instagram size={20} />, href: SOCIAL_LINKS.instagram },
                                { icon: <Github size={20} />, href: SOCIAL_LINKS.github },
                                { icon: <Mail size={20} />, href: getMailtoLink() },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-ieee-gold hover:border-ieee-gold/50 transition-all shadow-soft"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Quick Navigation</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><a href="#" className="hover:text-ieee-gold transition-colors block w-fit">Home</a></li>
                            <li><a href="#about" className="hover:text-ieee-gold transition-colors block w-fit">Who We Are</a></li>
                            <li><a href="#team" className="hover:text-ieee-gold transition-colors block w-fit">Our Leadership</a></li>
                            <li><a href="#events" className="hover:text-ieee-gold transition-colors block w-fit">Upcoming Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Technical Focus</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><a href="#cells" className="hover:text-ieee-gold transition-colors block w-fit">Technical Cells</a></li>
                            <li><a href="#events" className="hover:text-ieee-gold transition-colors block w-fit">Workshops</a></li>
                            <li><a href="#events" className="hover:text-ieee-gold transition-colors block w-fit">Competitions</a></li>
                            <li><a href="#contact" className="hover:text-ieee-gold transition-colors block w-fit">Join the Branch</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li>
                                <a
                                    href="mailto:studentbranchiee@gmail.com"
                                    className="hover:text-ieee-gold transition-colors block w-fit"
                                >
                                    studentbranchiee@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://maps.app.goo.gl/N2DmCdGhJKRhFwNq6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-ieee-gold transition-colors block w-fit"
                                >
                                    EMSI Gueliz, Marrakesh, Morocco
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-ieee-gold transition-colors block w-fit"
                                >
                                    Get in Touch
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <p>© {currentYear} IEEE Student Branch EMSI Marrakesh.</p>
                    <div className="flex gap-10">
                        <PrivacyPolicy
                            trigger={<button className="hover:text-ieee-gold transition-colors">Privacy</button>}
                        />
                        <TermsOfService
                            trigger={<button className="hover:text-ieee-gold transition-colors">Terms</button>}
                        />
                        <CookiePolicy
                            trigger={<button className="hover:text-ieee-gold transition-colors">Cookies</button>}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
