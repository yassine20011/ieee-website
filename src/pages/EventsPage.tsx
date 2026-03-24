import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventModal from "@/components/EventModal";
import type { Event } from "@/data/events";

export default function EventsPage() {
    const upcomingEvents = events.filter(e => !e.isPast);
    const pastEvents = events.filter(e => e.isPast);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
            <Navbar />
            <main className="pt-24 bg-ieee-navy min-h-screen relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-ieee-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ieee-blue/5 blur-[120px] rounded-full" />

                <section className="py-12 md:py-24 relative z-10">
                    <div className="container px-4 mx-auto">
                        <div className="mb-8 relative z-20">
                            <Link to="/#events" className="inline-flex items-center text-ieee-gold hover:text-white transition-colors">
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
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                Our <span className="text-ieee-gold">Events</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-gray-400">
                                Explore our workshops, competitions, and technical talks.
                            </p>
                        </motion.div>

                        {/* Upcoming Events */}
                        {upcomingEvents.length > 0 && (
                            <div className="mb-24 relative z-20">
                                <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                                    <span className="w-10 h-1 bg-ieee-gold rounded-full" />
                                    Upcoming
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    {upcomingEvents.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Card
                                                className="flex flex-col md:flex-row overflow-hidden border border-white/5 bg-ieee-navy shadow-soft rounded-[2rem] h-full transition-all hover:shadow-gold-glow hover:border-ieee-gold/30 group cursor-pointer"
                                                onClick={() => handleEventClick(event)}
                                            >
                                                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-ieee-navy-light relative overflow-hidden">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="md:w-3/5 p-8 flex flex-col">
                                                    <div className="mb-4 flex justify-between items-start">
                                                        <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-ieee-gold bg-ieee-gold/10 border border-ieee-gold/20 rounded-full">
                                                            {event.category}
                                                        </span>
                                                        <div className="text-ieee-blue text-xs font-bold flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {event.date}
                                                        </div>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ieee-gold transition-colors">{event.title}</h3>
                                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{event.description}</p>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Past Events Gallery */}
                        <div className="relative z-20">
                            <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                                <span className="w-10 h-1 bg-white/10 rounded-full" />
                                Past Moments
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {pastEvents.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                        >
                                            <Card
                                                className="overflow-hidden border border-white/5 bg-ieee-navy rounded-3xl h-full hover:shadow-blue-glow hover:border-ieee-blue/20 transition-all group cursor-pointer"
                                                onClick={() => handleEventClick(event)}
                                            >
                                                <div className="aspect-video bg-ieee-navy-light relative overflow-hidden">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                    />
                                                </div>
                                                <CardContent className="p-6">
                                                    <h4 className="font-bold text-white truncate transition-colors group-hover:text-ieee-blue">{event.title}</h4>
                                                    <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-bold">{event.date}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <EventModal
                event={selectedEvent}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </div>
    );
}
