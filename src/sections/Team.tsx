import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/team";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socials";

export default function Team() {
    const INITIAL_COUNT = 5;
    const displayedMembers = teamMembers.slice(0, INITIAL_COUNT);

    return (
        <section id="team" className="py-24 bg-ieee-navy">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our <span className="text-ieee-gold">Team</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Meet the dedicated students leading the IEEE Student Branch EMSI Marrakesh.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Card className="overflow-hidden border-none bg-ieee-navy-light shadow-soft group transition-all hover:-translate-y-2 hover:shadow-gold-glow rounded-3xl h-full border border-transparent hover:border-ieee-gold/20">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-square overflow-hidden bg-ieee-navy">
                                            {/* Placeholder with member initials as fallback */}
                                            <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-black text-6xl select-none">
                                                {member.name.charAt(0)}
                                            </div>
                                            {/* Member photo */}
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                loading="lazy"
                                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                onError={(e) => {
                                                    // Hide image if it fails to load, showing the initial letter instead
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />

                                            {/* Subtle overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy-light via-transparent to-transparent opacity-60" />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-white mb-1 transition-colors group-hover:text-ieee-gold">{member.name}</h3>
                                            <p className="text-sm font-medium text-ieee-gold/80 mb-6 uppercase tracking-wider">{member.role}</p>

                                            <div className="flex justify-center gap-4">
                                                {member.links.gmail && (
                                                    <a href={`mailto:${member.links.gmail}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all border border-white/5 hover:border-red-500/40">
                                                        <Mail className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {member.links.linkedin && member.links.linkedin !== "#" && (
                                                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ieee-blue/20 transition-all border border-white/5 hover:border-ieee-blue/40">
                                                        <Linkedin className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {member.links.github && member.links.github !== "#" && (
                                                    <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                                        <Github className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {member.links.instagram && member.links.instagram !== "#" && (
                                                    <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all border border-white/5 hover:border-pink-500/40">
                                                        <Instagram className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {teamMembers.length > INITIAL_COUNT && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/team"
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            className="group relative inline-flex px-8 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 border-ieee-gold rounded-full hover:bg-ieee-gold hover:text-ieee-navy overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Show All Members
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                            <div className="absolute inset-0 z-0 bg-ieee-gold transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                        </Link>
                    </motion.div>
                )}

                {/* Club-Level Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block">
                        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-[0.2em] text-center">
                            Connect with <span className="text-ieee-gold">IEEE S.B EMSI Marrakesh</span>
                        </h3>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: <Linkedin size={24} />, href: SOCIAL_LINKS.linkedin, color: "hover:bg-ieee-blue/20 hover:text-ieee-blue hover:border-ieee-blue/40", label: "LinkedIn" },
                                { icon: <Instagram size={24} />, href: SOCIAL_LINKS.instagram, color: "hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/40", label: "Instagram" },
                                { icon: <Github size={24} />, href: SOCIAL_LINKS.github, color: "hover:bg-white/10 hover:text-white hover:border-white/30", label: "GitHub" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 border border-white/5 transition-all shadow-soft backdrop-blur-sm ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}