import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { motion } from "motion/react"

export default function CTA() {
    return (
        <section
            aria-labelledby="cta-heading"
            className="container mx-auto text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <Card className="bg-green-700 rounded-none text-white p-8 hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <CardTitle
                                id="cta-heading"
                                className="text-3xl"
                            >
                                Ready to Start Your Spiritual Journey?
                            </CardTitle>
                            <CardDescription className="text-green-100">
                                Join other Muslims nurturing their daily Sunnah practices
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                    <CardContent>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Button
                                className="bg-white text-green-700 hover:bg-green-50 mt-4"
                                aria-label="Get Your Sunnah Garden"
                                onClick={() => {
                                    window.location.href = "https://app.sunnahgarden.my";
                                }}
                            >
                                Get Started Now
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}