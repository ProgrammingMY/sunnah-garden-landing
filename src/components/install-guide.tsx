import { motion } from "motion/react"

const installSteps = [
    {
        title: "Open Menu",
        description: "Click the three dots (⋮) in your browser's menu",
        image: "/images/android-step-1.webp",
        deviceType: "Android"
    },
    {
        title: "Tap 'Add to Home Screen'",
        description: "Look for 'Install App' or 'Add to Home Screen'",
        image: "/images/android-step-2.webp",
        deviceType: "Android"
    },
    {
        title: "Confirm Installation",
        description: "Tap 'Install' when prompted",
        image: "/images/android-step-3.webp",
        deviceType: "Android"
    },
    {
        title: "For iPhone Users",
        description: "Tap the share button at the bottom of your screen",
        image: "/images/ios-step-1.webp",
        deviceType: "iOS"
    },
    {
        title: "Add to Home Screen",
        description: "Scroll down and tap 'Add to Home Screen'",
        image: "/images/ios-step-2.webp",
        deviceType: "iOS"
    }
]

export default function InstallGuide() {
    return (
        <section className="py-16 px-4 bg-green-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-green-800 mb-4">
                        Install on Your Device
                    </h2>
                    <p className="text-lg text-green-600">
                        Add Sunnah Garden to your home screen for quick access - no app store needed!
                    </p>
                </motion.div>

                <div className="grid gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-6">
                            For Android Users:
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {installSteps.filter(step => step.deviceType === "Android").map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-48 h-96 rounded-xl overflow-hidden mb-4 border-2 border-green-200 shadow-md">
                                        <img
                                            src={step.image}
                                            alt={`Step ${index + 1}: ${step.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="font-medium text-green-800 mb-2">
                                        {index + 1}. {step.title}
                                    </h4>
                                    <p className="text-green-600 text-sm">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-6">
                            For iPhone Users:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {installSteps.filter(step => step.deviceType === "iOS").map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-48 h-96 rounded-xl overflow-hidden mb-4 border-2 border-green-200 shadow-md">
                                        <img
                                            src={step.image}
                                            alt={`Step ${index + 1}: ${step.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="font-medium text-green-800 mb-2">
                                        {index + 1}. {step.title}
                                    </h4>
                                    <p className="text-green-600 text-sm">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}