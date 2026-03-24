import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/data/achievements";
import AchievementCard from "@/components/AchievementCard";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AchievementsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
            <Navbar />
            <main className="pt-24 bg-ieee-navy min-h-screen relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-ieee-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-ieee-blue/5 blur-[120px] rounded-full" />

                <section className="py-12 md:py-24 relative z-10">
                    <div className="container px-4 mx-auto">
                        <div className="mb-8 relative z-20">
                            <Link to="/#awards" className="inline-flex items-center text-ieee-gold hover:text-white transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Link>
                        </div>

                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-20 relative z-20"
                        >
                            <div className="inline-block mb-4">
                                <span className="px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-ieee-gold bg-ieee-gold/10 border border-ieee-gold/20 rounded-full">
                                    Excellence & Innovation
                                </span>
                            </div>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                Full Awards & <span className="text-ieee-gold">Achievements</span>
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
                                Our members excel in national and international competitions,
                                demonstrating their technical expertise and innovative capabilities.
                            </p>
                        </motion.div>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
                            <AnimatePresence mode="popLayout">
                                {achievements.map((achievement, index) => (
                                    <AchievementCard
                                        key={index}
                                        achievement={achievement}
                                        index={index}
                                    />
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
