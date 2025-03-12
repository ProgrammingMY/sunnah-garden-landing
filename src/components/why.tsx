import { motion } from "motion/react";

const verses = [
    {
        text: "Say, ˹O Prophet,˺ “If you ˹sincerely˺ love Allah, then follow me; Allah will love you and forgive your sins. ",
        surah: "Al-Imran",
        verse: "31"
    },
    {
        text: "Indeed, in the Messenger of Allah you have an excellent example for whoever has hope in Allah and the Last Day",
        surah: "Al Ahzab",
        verse: "21"
    }
]

export default function WhySunnah() {
    return (
        <section className="py-16 bg-white/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Sunnah Garden?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cultivate the blessed sunnah of our beloved Prophet ﷺ in your daily life,
                        one small step at a time. Allah says in the Quran:
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {verses.map((verse, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="h-2 bg-green-500" />
                            <div className="p-6">
                                <div className="text-green-600 text-5xl font-serif mb-4">❝</div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    {verse.text}
                                </p>
                                <div className="flex items-center justify-end text-green-600">
                                    <span className="font-semibold">Surah {verse.surah}</span>
                                    <span className="mx-2">•</span>
                                    <span>Verse {verse.verse}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}