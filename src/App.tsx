import Hero from "./components/hero"
import Features from "./components/features"
import Steps from "./components/steps"
import InstallGuide from "./components/install-guide"
import WhySunnah from "./components/why"
import Footer from "./components/footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100">
      <main>
        <Hero />
        <WhySunnah />
        <Steps />
        <Features />
        <InstallGuide />
      </main>
      <Footer />
    </div>
  )
}

export default App
