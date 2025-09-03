import { Routes, Route } from "react-router-dom";
import './App.css'
import { Hero, BestSell, Services, Menu, Footer } from './sections';
import Nav from './component/Nav';
import Contact from "./pages/Contact";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <section><Hero /></section>
              <section><BestSell /></section>
              <section><Services /></section>
              <section><Menu /></section>
              <section><Footer /></section>
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
