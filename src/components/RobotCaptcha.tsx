import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

interface RobotCaptchaProps {
    onVerify: (verified: boolean) => void;
    reset?: boolean;
}

export default function RobotCaptcha({ onVerify, reset }: RobotCaptchaProps) {
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if (reset) {
            setIsVerified(false);
            setIsVerifying(false);
        }
    }, [reset]);

    const handleCheck = () => {
        if (isVerified || isVerifying) return;

        setIsVerifying(true);

        // Simulate a "verification" delay
        setTimeout(() => {
            setIsVerifying(false);
            setIsVerified(true);
            onVerify(true);
        }, 1200);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-[#f9f9f9] border border-[#d3d3d3] rounded-sm w-full max-w-[300px] shadow-sm select-none">
            <div className="flex items-center gap-3">
                <div
                    onClick={handleCheck}
                    className={`w-7 h-7 border-2 rounded-sm cursor-pointer flex items-center justify-center transition-all
                        ${isVerified ? "border-green-500 bg-white" : "border-[#c1c1c1] bg-white hover:border-[#b3b3b3]"}
                        ${isVerifying ? "cursor-default" : ""}`}
                >
                    <AnimatePresence mode="wait">
                        {isVerifying ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Loader2 className="w-5 h-5 text-ieee-blue animate-spin" />
                            </motion.div>
                        ) : isVerified ? (
                            <motion.div
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Check className="w-5 h-5 text-green-600 stroke-[4px]" />
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
                <span className="text-sm font-medium text-[#555] font-sans">I'm not a robot</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 opacity-60">
                    <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.webp"
                        alt="reCAPTCHA"
                        className="w-full h-full object-contain grayscale brightness-125"
                    />
                </div>
                <span className="text-[9px] text-gray-400 font-sans leading-none mt-1">reCAPTCHA</span>
                <div className="flex gap-1 mt-1 text-[8px] text-gray-400">
                    <span>Privacy</span>
                    <span>•</span>
                    <span>Terms</span>
                </div>
            </div>
        </div>
    );
}
