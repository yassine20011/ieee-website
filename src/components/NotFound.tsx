import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-ieee-navy flex items-center justify-center relative overflow-hidden">
            {/* Circuit Pattern Background */}
            <div className="absolute inset-0 circuit-pattern opacity-20" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-ieee-gold/5 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-ieee-blue/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 404 Text */}
                    <div className="mb-8">
                        <motion.h1 
                            className="text-8xl md:text-9xl font-black text-ieee-gold leading-none mb-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            404
                        </motion.h1>
                        <motion.div 
                            className="w-24 h-1 bg-ieee-gold mx-auto mb-8"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </div>

                    {/* Error Message */}
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Page Not Found
                    </motion.h2>
                    
                    <motion.p 
                        className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        The page you're looking for seems to have vanished into the digital void. 
                        Let's get you back to exploring IEEE EMSI Marrakesh.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <Button
                            onClick={() => window.location.href = '/'}
                            className="rounded-xl px-8 py-3 bg-ieee-gold text-ieee-navy hover:bg-ieee-gold/90 font-bold flex items-center gap-2 shadow-gold-glow transition-all hover:scale-105"
                        >
                            <Home size={20} />
                            Back to Home
                        </Button>
                        
                        <Button
                            onClick={() => window.history.back()}
                            variant="outline"
                            className="rounded-xl px-8 py-3 border-ieee-gold/50 text-ieee-gold hover:bg-ieee-gold/10 font-bold flex items-center gap-2 transition-all hover:scale-105"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </Button>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="mt-16 pt-8 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <p className="text-gray-500 text-sm font-black uppercase tracking-[0.2em] mb-6">
                            You might be looking for
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: "About", href: "#about" },
                                { name: "Team", href: "#team" },
                                { name: "Events", href: "#events" },
                                { name: "Contact", href: "#contact" },
                            ].map((link, index) => (
                                <a
                                    key={link.name}
                                    href={`/${link.href}`}
                                    className="text-gray-400 hover:text-ieee-gold transition-colors font-medium"
                                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>


        </div>
    );
}
