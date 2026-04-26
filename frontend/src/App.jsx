import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Showcase from './components/Showcase'
import Education from './components/Education'
import Contact from './components/Contact'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Showcase />
        <Education />
        <Contact />
      </main>
    </>
  )
}
