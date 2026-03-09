import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import ForWho from '../components/ForWho'
import RebuildProCTA from '../components/RebuildProCTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Stats />
      <About />
      <Services />
      <ForWho />
      <RebuildProCTA onOpenModal={openModal} />
      <Testimonials />
      <FAQ />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
