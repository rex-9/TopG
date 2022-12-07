import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Network } from './components/Network'
import { Labs } from './components/Labs'
import { CCNA } from './components/CCNA'
import { Register } from './components/Register'
import { Contact } from './components/Contact'

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
      </div>
    </section>
  )
}

export default App
