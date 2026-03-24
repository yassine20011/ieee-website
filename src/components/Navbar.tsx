import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/data/socials";
import JoinUsDialog from "@/components/JoinUsDialog";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Events", href: "#events" },
        { name: "Cells", href: "#cells" },
        { name: "Awards", href: "#awards" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-ieee-navy/80 backdrop-blur-md border-b border-ieee-gold/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container px-4 mx-auto flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 group"
                >
                    {/* Logo */}
                    <div className="relative">
                        <img
                            src="/assets/logo.webp"
                            alt="IEEE EMSI Marrakesh Logo"
                            loading="lazy"
                            className="h-10 w-10 object-contain rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,184,28,0.4)]"
                        />
                    </div>
                    {/* Club Name */}
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tight text-ieee-gold leading-none group-hover:text-white transition-colors">
                            IEEE EMSI Marrakesh
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mt-0.5">
                            Student Branch
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-gray-400 hover:text-ieee-gold transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-3 ml-2">
                        {[
                            { icon: <Linkedin size={18} />, href: SOCIAL_LINKS.linkedin, color: "hover:text-ieee-blue" },
                            { icon: <Instagram size={18} />, href: SOCIAL_LINKS.instagram, color: "hover:text-pink-500" },
                            { icon: <Github size={18} />, href: SOCIAL_LINKS.github, color: "hover:text-white" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-500 ${social.color} transition-colors`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <Button
                        onClick={() => setIsJoinDialogOpen(true)}
                        className="rounded-xl px-6 bg-ieee-gold text-ieee-navy hover:bg-ieee-gold/90 font-bold"
                    >
                        Join Us
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-ieee-navy border-t border-ieee-gold/10 overflow-hidden"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold text-white hover:text-ieee-gold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-4 pt-4">
                                {[
                                    { icon: <Linkedin size={20} />, href: SOCIAL_LINKS.linkedin, color: "hover:text-ieee-blue" },
                                    { icon: <Instagram size={20} />, href: SOCIAL_LINKS.instagram, color: "hover:text-pink-500" },
                                    { icon: <Github size={20} />, href: SOCIAL_LINKS.github, color: "hover:text-white" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 ${social.color} transition-colors`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsJoinDialogOpen(true);
                                }}
                                className="rounded-xl h-14 text-lg bg-ieee-gold text-ieee-navy font-bold"
                            >
                                Join Us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Join Us Dialog */}
            <JoinUsDialog isOpen={isJoinDialogOpen} onClose={() => setIsJoinDialogOpen(false)} />
        </nav>
    );
}
