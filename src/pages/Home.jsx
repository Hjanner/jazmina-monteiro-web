import { useState } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HomeHero from '../components/HomeHero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import ForWho from '../components/ForWho'
import HomeRebuildProCTA from '../components/HomeRebuildProCTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeFooter from '../components/HomeFooter'
import Modal from '../components/Modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="home-page">
      <HomeNavbar onOpenModal={openModal} />
      <HomeHero onOpenModal={openModal} />
      <Stats />
      <About />
      <Services />
      <ForWho />
      <HomeRebuildProCTA onOpenModal={openModal} />
      <Testimonials />
      <FAQ />
      <HomeFooter />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
