import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <header role="banner" className="container mx-auto px-4 py-16 text-center">
            <img src="/logo.png" alt="Sunnah Garden Logo" className="w-[100px] border-1 border-green-100 shadow bg-green-200 rounded-xl mx-auto mb-8" />
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-green-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Sunnah Garden
            </motion.h1>
            <motion.p
                className="text-xl text-green-600 mb-8"
                role="doc-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Grow Your Digital Garden Through Sunnah
            </motion.p>
            <motion.p
                className="text-xl text-green-600 mb-8"
                role="doc-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Your companion in your journey to practice Sunnah in your daily life
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                    aria-label="Start Your Journey"
                    onClick={() => {
                        window.location.href = "https://app.sunnahgarden.my";
                    }}
                >
                    Start Your Journey
                </Button>
            </motion.div>
        </header>
    )
}