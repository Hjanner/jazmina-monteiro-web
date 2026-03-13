import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function HomeNavbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Rebuild Pro™', href: '#rebuild-pro' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(253,250,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,146,47,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(26,14,6,0.06)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: '15px',
          letterSpacing: '2.5px',
          color: 'var(--brown-dark)',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          JAZMINA MONTEIRO
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.3px',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
          <button onClick={onOpenModal} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            color: '#FDFAF5',
            background: 'var(--brown-dark)',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--brown-dark)'; e.target.style.transform = 'translateY(0)' }}
          >
            Agenda una llamada →
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(253,250,245,0.98)',
          borderTop: '1px solid rgba(184,146,47,0.15)',
          padding: '24px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
            onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <button onClick={() => { onOpenModal(); setMobileOpen(false) }} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            color: '#FDFAF5',
            background: 'var(--brown-dark)',
            border: 'none',
            padding: '14px 24px',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
          }}>
            Agenda una llamada →
          </button>
        </div>
      )}
    </nav>
  )
}
