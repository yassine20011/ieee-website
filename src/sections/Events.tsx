import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "@/data/events";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import EventModal from "@/components/EventModal";
import type { Event } from "@/data/events";

export default function Events() {
    const upcomingEvents = events.filter(e => !e.isPast);
    const pastEvents = events.filter(e => e.isPast).slice(0, 4);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    return (
        <section id="events" className="py-24 bg-ieee-navy-light relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-ieee-gold/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-ieee-blue/5 blur-[100px] rounded-full" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our <span className="text-ieee-gold">Events</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Join us for workshops, competitions, and technical talks.
                    </p>
                </div>

                {/* Upcoming Events */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                        <span className="w-10 h-1 bg-ieee-gold rounded-full" />
                        Upcoming
                    </h3>
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
                                        <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-bold text-2xl uppercase">
                                            {event.category}
                                        </div>
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            loading="lazy"
                                            className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                // Hide image if it fails to load, showing category text instead
                                                e.currentTarget.style.display = 'none';
                                            }}
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
                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-ieee-gold transition-colors">{event.title}</h4>
                                        <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{event.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-white/5 pt-4">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-ieee-gold/60" />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Past Events Gallery */}
                <div>
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                        <span className="w-10 h-1 bg-white/10 rounded-full" />
                        Past Moments
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    className="overflow-hidden border border-white/5 bg-ieee-navy rounded-3xl h-full hover:shadow-blue-glow hover:border-ieee-blue/20 transition-all group cursor-pointer"
                                    onClick={() => handleEventClick(event)}
                                >
                                    <div className="aspect-video bg-ieee-navy-light relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <Calendar size={48} className="text-white" />
                                        </div>
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            loading="lazy"
                                            className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            onError={(e) => {
                                                // Hide image if it fails to load, showing calendar icon instead
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h5 className="font-bold text-white truncate transition-colors group-hover:text-ieee-blue">{event.title}</h5>
                                        <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-bold">{event.date}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {events.filter(e => e.isPast).length > 4 && (
                        <motion.div
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                to="/events"
                                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                                className="group relative inline-flex px-8 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 border-ieee-blue rounded-full hover:bg-ieee-blue hover:text-white overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Show All Past Events
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                                <div className="absolute inset-0 z-0 bg-ieee-blue transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Event Modal */}
            <EventModal
                event={selectedEvent}
                open={modalOpen}
                onOpenChange={setModalOpen}
            />
        </section>
    );
}