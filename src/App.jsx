import { useState } from 'react'
import './App.css'
import{Hero,
  BestSell,
  Services,
  Menu,
  Footer,
} from './sections';

import Nav from './component/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <section>
        <Hero/>
      </section>

      <section>
        <BestSell/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <Menu/>
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default App
