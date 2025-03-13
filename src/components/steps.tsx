import { motion } from "motion/react"

const steps = [
    {
        title: "Track Your Sunnah",
        description: "Click and record the Sunnah practices you've performed throughout your day",
        image: "/images/click-sunnah.webp"
    },
    {
        title: "Watch Your Flower Grow",
        description: "See your flower flourish as you consistently follow more Sunnah practices",
        image: "/images/flower-bloom.gif"
    },
    {
        title: "Cultivate Your Garden",
        description: "Build a beautiful garden that reflects your dedication to the Sunnah",
        image: "/images/garden-grow.webp"
    }
]

export default function Steps() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <motion.h2
                className="text-3xl font-bold text-center text-green-800 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                How It Works
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-green-200">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-green-600">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}