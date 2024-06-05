import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Footer from "./containers/Footer"
import Navbar from "./containers/Navbar"
import Pricing from "./containers/Pricing"


const App = () => {
  return (
    <div>
        <Navbar />
        <Pricing />
        <CTA/>
        <FAQ />
        <Footer />
    </div>
  )
}
export default App