import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Work from './components/Work'
import Publications from './components/Publications'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Publications />
        <Education />
        <Contact />
      </main>
    </>
  )
}
