import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Achievement } from "@/data/achievements";

interface AchievementCardProps {
    achievement: Achievement;
    index: number;
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
    // Determine icon based on prize rank
    const getIcon = () => {
        switch (achievement.prizeRank) {
            case "1st":
                return <Trophy className="w-8 h-8 text-ieee-gold" />;
            case "Best Design":
                return <Award className="w-8 h-8 text-ieee-gold" />;
            default:
                return <Medal className="w-8 h-8 text-ieee-blue" />;
        }
    };

    // Determine accent color based on prize rank
    const getAccentColor = () => {
        switch (achievement.prizeRank) {
            case "1st":
                return "border-ieee-gold/30 hover:border-ieee-gold/60 hover:shadow-[0_0_30px_rgba(255,184,28,0.2)]";
            case "Best Design":
                return "border-ieee-gold/30 hover:border-ieee-gold/60 hover:shadow-[0_0_30px_rgba(255,184,28,0.2)]";
            default:
                return "border-ieee-blue/20 hover:border-ieee-blue/50 hover:shadow-[0_0_30px_rgba(0,122,204,0.15)]";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className={`bg-ieee-navy border ${getAccentColor()} rounded-3xl h-full transition-all duration-300 group overflow-hidden`}>
                {/* Achievement Image */}
                <div className="relative aspect-video bg-ieee-navy-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-bold text-4xl uppercase">
                        {achievement.prizeRank}
                    </div>
                    <img
                        src={achievement.image}
                        alt={achievement.prize}
                        loading="lazy"
                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                            // Hide image if it fails to load, showing prize rank instead
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy via-ieee-navy/50 to-transparent" />
                </div>

                <CardContent className="p-8">
                    {/* Icon and Prize */}
                    <div className="flex items-start gap-6 mb-6">
                        <div className="p-4 bg-ieee-navy-light rounded-2xl border border-white/5 group-hover:border-ieee-gold/20 transition-all">
                            {getIcon()}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-2xl font-black text-ieee-gold mb-1 uppercase tracking-tight">
                                {achievement.prize}
                            </h4>
                            {(achievement.projectName || achievement.teamName) && (
                                <p className="text-white font-bold text-lg">
                                    {achievement.projectName || achievement.teamName}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Competition Details */}
                    <div className="space-y-3 border-t border-white/5 pt-6">
                        <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">
                                Competition
                            </p>
                            <p className="text-white font-bold">
                                {achievement.competitionName}
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">
                                Institution
                            </p>
                            <p className="text-ieee-blue font-semibold">
                                {achievement.institution}
                            </p>
                        </div>
                        {achievement.year && (
                            <div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">
                                    Year
                                </p>
                                <p className="text-gray-400 font-medium">
                                    {achievement.year}
                                </p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
