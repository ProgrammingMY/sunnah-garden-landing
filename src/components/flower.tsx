import { motion } from "motion/react"

export default function GrowingSunflower() {
    return (
        <motion.div
            className="w-32 h-32 mx-auto mb-8"
            initial="hidden"
            animate="visible"
        >
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* ... existing code for stem and leaf ... */}

                {/* Flower Petals */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * (Math.PI / 180);
                    const startX = 50 + Math.cos(angle) * 15;
                    const startY = 50 + Math.sin(angle) * 15;
                    const endX = 50 + Math.cos(angle) * 40;  // Added end point
                    const endY = 50 + Math.sin(angle) * 40;

                    // Modified control points for pointed petals
                    const cp1x = 50 + Math.cos(angle - 0.2) * 45;  // Adjusted for pointier tips
                    const cp1y = 50 + Math.sin(angle - 0.2) * 45;
                    const cp2x = 50 + Math.cos(angle + 0.2) * 45;
                    const cp2y = 50 + Math.sin(angle + 0.2) * 45;

                    return (
                        <motion.path
                            key={i}
                            d={`
                                M ${startX} ${startY}
                                Q ${cp1x} ${cp1y} ${endX} ${endY}
                                Q ${cp2x} ${cp2y} ${startX} ${startY}
                            `}
                            fill="#FFD700"
                            stroke="#FFA500"
                            strokeWidth="1.5"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5 + (i * 0.1),
                                type: "spring",
                                stiffness: 100
                            }}
                        />
                    );
                })}

                {/* Flower Center */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="#654321"  // Changed to darker brown
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                />
            </svg>
        </motion.div>
    )
}