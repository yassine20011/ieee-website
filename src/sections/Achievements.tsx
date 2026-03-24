import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/data/achievements";
import AchievementCard from "@/components/AchievementCard";

export default function Achievements() {
    const INITIAL_COUNT = 3;
    const displayedAchievements = achievements.slice(0, INITIAL_COUNT);

    return (
        <section id="awards" className="py-24 bg-ieee-navy relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-ieee-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-ieee-blue/5 blur-[120px] rounded-full" />

            <div className="container px-4 mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-ieee-gold bg-ieee-gold/10 border border-ieee-gold/20 rounded-full">
                            Excellence & Innovation
                        </span>
                    </div>
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Awards & <span className="text-ieee-gold">Achievements</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
                        Our members excel in national and international competitions,
                        demonstrating their technical expertise and innovative capabilities.
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedAchievements.map((achievement, index) => (
                            <AchievementCard
                                key={index}
                                achievement={achievement}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {achievements.length > INITIAL_COUNT && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/achievements"
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            className="group relative inline-flex px-8 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 border-ieee-gold rounded-full hover:bg-ieee-gold hover:text-ieee-navy overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Show All Awards & Achievements
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                            <div className="absolute inset-0 z-0 bg-ieee-gold transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                        </Link>
                    </motion.div>
                )}

                {/* Bottom Accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block px-8 py-4 bg-ieee-navy-light border border-ieee-gold/10 rounded-2xl">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                            Building Excellence Through <span className="text-ieee-gold">Competition</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
