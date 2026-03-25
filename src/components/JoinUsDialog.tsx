import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Phone, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RobotCaptcha from "./RobotCaptcha";

interface JoinUsDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinUsDialog({ isOpen, onClose }: JoinUsDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interests: "",
    });

    const [isVerified, setIsVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const resetForm = () => {
        setFormData({ name: "", email: "", phone: "", interests: "" });
        setIsVerified(false);
        setSubmitStatus("idle");
        setErrorMessage("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isVerified) {
            alert("Please verify that you are not a robot.");
            return;
        }

        const name = formData.name.trim();
        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const interests = formData.interests.trim();

        if (!name || !email || !phone) {
            alert("Please fill all required fields.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: name,
                    email,
                    phone,
                    whyJoin: interests || "Not provided",
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send application");
            }

            setSubmitStatus("success");
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                    />

                    {/* Dialog */}
                    <div className="fixed inset-x-0 top-0 flex items-start justify-center z-50 p-4 pt-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-ieee-navy-light border border-ieee-gold/20 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-ieee-navy-light border-b border-white/5 p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-ieee-gold/10 flex items-center justify-center border border-ieee-gold/20">
                                        <Sparkles className="w-6 h-6 text-ieee-gold" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-white">Join IEEE S.B</h2>
                                        <p className="text-sm text-gray-400">EMSI Marrakesh</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <AnimatePresence mode="wait">
                                    {submitStatus === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex flex-col items-center justify-center py-12 text-center"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                                                <CheckCircle2 className="w-10 h-10 text-green-400" />
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2">Application Sent!</h3>
                                            <p className="text-gray-400 max-w-sm mb-8">
                                                Thank you for your interest in IEEE. We'll review your application and get back to you soon.
                                            </p>
                                            <Button
                                                onClick={handleClose}
                                                className="h-12 px-8 rounded-2xl bg-ieee-gold text-ieee-navy hover:bg-white transition-all font-bold"
                                            >
                                                Close
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="mb-6">
                                                <p className="text-gray-300 leading-relaxed">
                                                    Join the world's largest technical professional organization!
                                                    Fill out the form below and we'll get back to you with membership details.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                {/* Name */}
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                                        <User size={14} />
                                                        Full Name
                                                    </label>
                                                    <Input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        disabled={isSubmitting}
                                                        className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all disabled:opacity-50"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                                        <Mail size={14} />
                                                        Email Address
                                                    </label>
                                                    <Input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        disabled={isSubmitting}
                                                        className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all disabled:opacity-50"
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                                        <Phone size={14} />
                                                        Phone Number
                                                    </label>
                                                    <Input
                                                        required
                                                        type="tel"
                                                        placeholder="+212 600-000000"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        disabled={isSubmitting}
                                                        className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all disabled:opacity-50"
                                                    />
                                                </div>

                                                {/* Interests */}
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                                        Why do you want to join? (Optional)
                                                    </label>
                                                    <Textarea
                                                        placeholder="Tell us about your interests and what you hope to gain from IEEE membership..."
                                                        value={formData.interests}
                                                        onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                                        disabled={isSubmitting}
                                                        className="min-h-[120px] rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all resize-none p-4 disabled:opacity-50"
                                                    />
                                                </div>

                                                {/* Bot Protection */}
                                                {(formData.name || formData.email || formData.phone || formData.interests) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="px-1"
                                                    >
                                                        <RobotCaptcha
                                                            onVerify={(v) => setIsVerified(v)}
                                                            reset={!isOpen}
                                                        />
                                                    </motion.div>
                                                )}

                                                {/* Error Message */}
                                                {submitStatus === "error" && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20"
                                                    >
                                                        <p className="text-sm text-red-400 text-center">{errorMessage}</p>
                                                    </motion.div>
                                                )}

                                                {/* Submit Button */}
                                                <div className="flex gap-4 pt-4">
                                                    <Button
                                                        type="button"
                                                        onClick={handleClose}
                                                        variant="outline"
                                                        disabled={isSubmitting}
                                                        className="flex-1 h-14 rounded-2xl border-2 border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all disabled:opacity-50"
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        disabled={!isVerified || isSubmitting}
                                                        className="flex-1 h-14 rounded-2xl bg-ieee-gold text-ieee-navy hover:bg-white transition-all shadow-gold font-black uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed group"
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="flex items-center gap-2">
                                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                                Sending...
                                                            </span>
                                                        ) : (
                                                            "Submit Application"
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
