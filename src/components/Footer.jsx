import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid var(--gold-border)',
      padding: 'clamp(32px,5vw,56px) clamp(20px,5vw,60px)',
    }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '36px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '2px',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              JAZMINA MONTEIRO
            </div>
            <p style={{
              fontSize: '13px',
              color: 'var(--white-faint)',
              lineHeight: 1.7,
            }}>
              Estrategia, IA y automatización para empresarios que quieren crecer sin desgastarse.
            </p>
          </div>

          {/* Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['La Masterclass', '#aprende'],
              ['¿Es para ti?', '#para-ti'],
              ['Regístrate', '#registro'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: 'var(--white-faint)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--white-faint)'}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--white-faint)',
            }}>
              Sígueme
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: '36px',
                  height: '36px',
                  background: 'var(--gold-soft)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.color = '#000'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--gold-soft)'
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--white-faint)', fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Jazmina Monteiro. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--white-faint)', fontFamily: "'Inter', sans-serif" }}>
            ◆ Miami, FL · Latinoamérica · España
          </p>
        </div>
      </div>
    </footer>
  )
}
