import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'La Masterclass', id: 'aprende' },
    { label: '¿Es para ti?', id: 'para-ti' },
    { label: 'Regístrate', id: 'registro' },
  ]

  const navBg = scrolled ? 'rgba(26,14,6,0.92)' : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(184,146,47,0.18)' : '1px solid transparent'
  const linkColor = 'rgba(255,255,255,0.72)'
  const linkHover = '#D4A940'

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: navBg,
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: navBorder,
      boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.25)' : 'none',
    }}>
      <div style={{
        maxWidth: '1160px',
        margin: '0 auto',
        padding: '0 clamp(20px,4vw,40px)',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: '13px',
          letterSpacing: '2.5px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          JAZMINA MONTEIRO
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: 'none',
              border: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: linkColor,
              letterSpacing: '0.3px',
              cursor: 'pointer',
              transition: 'color 0.2s',
              padding: 0,
            }}
            onMouseEnter={e => e.target.style.color = linkHover}
            onMouseLeave={e => e.target.style.color = linkColor}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('registro')} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#1A0E06',
            background: '#D4A940',
            border: 'none',
            padding: '9px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = '#B8922F'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.background = '#D4A940'; e.target.style.transform = 'translateY(0)' }}
          >
            Regístrate →
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', display: 'none' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(20,10,3,0.97)',
          borderTop: '1px solid rgba(184,146,47,0.18)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}>
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} style={{
              background: 'none',
              border: 'none',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.75)',
              textAlign: 'left',
              cursor: 'pointer',
              padding: 0,
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('registro')} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#1A0E06',
            background: '#D4A940',
            border: 'none',
            padding: '13px 22px',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
          }}>
            Regístrate →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
