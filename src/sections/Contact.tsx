import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_EMAIL, SOCIAL_LINKS, getMailtoLink } from "@/data/socials";
import RobotCaptcha from "@/components/RobotCaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    // Bot protection state
    const [isVerified, setIsVerified] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isVerified) {
            setErrorMessage("Please verify that you are not a robot.");
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage("");

        try {
            // Basic validation
            if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
                setErrorMessage("Please fill in all required fields.");
                setSubmitStatus('error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setErrorMessage("Please enter a valid email address.");
                setSubmitStatus('error');
                return;
            }

            // Send email using Resend API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // Reset form on success
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus('success');
            // Reset verification
            setIsVerified(false);
        } catch (error) {
            console.error('Contact form error:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="py-24 bg-ieee-navy-light relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ieee-blue/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-ieee-gold/5 blur-[120px] rounded-full" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-black text-ieee-gold uppercase tracking-[0.3em]">Contact Us</span>
                            <div className="h-[1px] w-12 bg-ieee-gold/40" />
                        </div>
                        <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl leading-tight">
                            Get in <span className="text-ieee-gold">Touch</span>
                        </h2>
                        <p className="mb-12 text-lg text-gray-400 max-w-lg leading-relaxed font-medium">
                            Have questions or want to collaborate? Reach out to our team at IEEE S.B EMSI Marrakesh!
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-ieee-navy flex items-center justify-center text-ieee-gold shadow-soft border border-ieee-gold/10 group-hover:border-ieee-gold/40 transition-all shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Email</h4>
                                    <a href={getMailtoLink()} className="text-gray-400 font-medium hover:text-ieee-gold transition-colors">{CONTACT_EMAIL}</a>
                                </div>
                            </div>


                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-ieee-navy flex items-center justify-center text-ieee-gold shadow-soft border border-ieee-gold/10 group-hover:border-ieee-gold/40 transition-all shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Location</h4>
                                    <a
                                        href="https://maps.app.goo.gl/N2DmCdGhJKRhFwNq6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 font-medium hover:text-ieee-gold transition-colors inline-flex items-center gap-2"
                                    >
                                        EMSI Gueliz, Marrakesh, Morocco
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-[10px]">Follow Our Journey</h4>
                            <div className="flex gap-5">
                                {[
                                    { icon: <Linkedin size={22} />, color: "hover:bg-ieee-blue/20 hover:text-ieee-blue hover:border-ieee-blue/40", url: SOCIAL_LINKS.linkedin },
                                    { icon: <Instagram size={22} />, color: "hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/40", url: SOCIAL_LINKS.instagram },
                                    { icon: <Github size={22} />, color: "hover:bg-white/10 hover:text-white hover:border-white/30", url: SOCIAL_LINKS.github },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 border border-white/5 transition-all shadow-soft backdrop-blur-sm ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border border-white/5 bg-ieee-navy shadow-2xl rounded-[3rem] overflow-hidden p-2">
                            <CardContent className="p-12 bg-ieee-navy-light/40 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="h-16 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                className="h-16 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="How can we help you?"
                                            className="min-h-[180px] rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all resize-none p-5"
                                        />
                                    </div>

                                    {/* Bot Protection - Only show after user starts typing */}
                                    {(formData.name || formData.email || formData.message) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="px-1"
                                        >
                                            <RobotCaptcha
                                                onVerify={(v) => setIsVerified(v)}
                                                reset={submitStatus === 'success'}
                                            />
                                        </motion.div>
                                    )}

                                    {submitStatus === 'success' && (
                                        <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                                            ✓ Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                                            ✗ {errorMessage || "Please fill in all fields correctly (including the security check)."}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || !isVerified}
                                        className="w-full h-16 text-lg font-black rounded-2xl bg-ieee-gold text-ieee-navy hover:bg-white transition-all shadow-gold uppercase tracking-[0.2em] disabled:opacity-30 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
