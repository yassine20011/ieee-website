import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/team";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
            <Navbar />
            <main className="pt-24 bg-ieee-navy min-h-screen">
                <section className="py-12 md:py-24">
                    <div className="container px-4 mx-auto">
                        <div className="mb-8">
                            <Link to="/#team" className="inline-flex items-center text-ieee-gold hover:text-white transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                        <div className="text-center mb-16">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                Our <span className="text-ieee-gold">Full Team</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-gray-400">
                                Meet all the dedicated students leading the IEEE Student Branch EMSI Marrakesh.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                            <AnimatePresence mode="popLayout">
                                {teamMembers.map((member, index) => (
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
                                                    <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-black text-6xl select-none">
                                                        {member.name.charAt(0)}
                                                    </div>
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        loading="lazy"
                                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
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
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
