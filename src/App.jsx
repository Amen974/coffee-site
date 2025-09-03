import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import{Hero,
  BestSell,
  Services,
  Menu,
  Footer,
} from './sections';

import Nav from './component/Nav';

function App() {
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
