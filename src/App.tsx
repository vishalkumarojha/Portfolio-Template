"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"


function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      education: educationRef,
      experience: experienceRef,
    }

    if (refs[sectionId]?.current) {
      refs[sectionId].current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
      </main>
      {showSidebar && <Sidebar />}
      <Footer />
    </div>
  )
}

export default App
