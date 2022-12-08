import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Network } from './components/Network'
import { Labs } from './components/Labs'
import { CCNA } from './components/CCNA'
import { Contact } from './components/Contact'
import { Register } from './components/Register'
import { Footer } from './components/Footer'

function App() {
  return (
    <section className="flex justify-center w-screen">
      <div>
        <Nav />
        <Home />
        <Network />
        <Labs />
        <CCNA />
        <Contact />
        <Register />
        <Footer />
      </div>
    </section>
  )
}

export default App
