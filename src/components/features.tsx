import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { motion } from "motion/react"
import { Bell, Brain, Book, Calendar, Flower2, Download } from "lucide-react"

const features = [
    {
        title: "Daily Reminders",
        description: "Never miss your Sunnah practices with customizable daily notifications",
        icon: <Bell className="w-8 h-8 text-green-600" />,
        ariaLabel: "Daily reminder feature"
    },
    {
        title: "AI-Powered Insights",
        description: "Receive weekly personalized analysis of your Sunnah practices to help you stay consistent",
        icon: <Brain className="w-8 h-8 text-green-600" />,
        ariaLabel: "AI analysis feature"
    },
    {
        title: "Daily Dua Collection",
        description: "Access and learn essential daily supplications from authentic sources",
        icon: <Book className="w-8 h-8 text-green-600" />,
        ariaLabel: "Daily dua feature"
    },
    {
        title: "Menstruation Tracker",
        description: "Simple and private tracking tool to help manage your worship schedule",
        icon: <Calendar className="w-8 h-8 text-green-600" />,
        ariaLabel: "Menstruation tracking feature"
    },
    {
        title: "Digital Garden",
        description: "Watch your virtual garden flourish as you maintain your Sunnah practices",
        icon: <Flower2 className="w-8 h-8 text-green-600" />,
        ariaLabel: "Digital garden feature"
    },
    {
        title: "Install Anywhere",
        description: "Install directly to your device without going through any app store",
        icon: <Download className="w-8 h-8 text-green-600" />,
        ariaLabel: "PWA installation feature"
    }
]

export default function Features() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section
            aria-labelledby="features-heading"
            className="container mx-auto px-4 py-16"
        >
            <motion.h2
                id="features-heading"
                className="text-3xl font-bold text-center text-green-800 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Key Features
            </motion.h2>
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                role="list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                    >
                        <Card
                            className="h-full bg-white/80 backdrop-blur hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto relative overflow-hidden"
                            role="listitem"
                            aria-labelledby={`feature-${index}-title`}
                        >
                            <CardHeader className="relative z-10">
                                <div className="mb-4">
                                    <motion.div
                                        className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        role="img"
                                        aria-label={feature.ariaLabel}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>
                                <CardTitle id={`feature-${index}-title`} className="text-lg font-semibold">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-600">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}