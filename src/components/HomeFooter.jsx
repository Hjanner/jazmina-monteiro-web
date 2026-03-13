import { Instagram, Linkedin } from 'lucide-react'

export default function HomeFooter() {
  return (
    <footer id="contacto" style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--gold-border)',
      padding: 'clamp(40px,6vw,70px) clamp(20px,5vw,70px)',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '17px',
              letterSpacing: '2px',
              color: 'var(--brown-dark)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              JAZMINA MONTEIRO
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.72,
              fontWeight: 400,
            }}>
              Estrategia, IA y automatización para negocios que quieren crecer sin perder su esencia.
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              ['Sobre mí', '#sobre-mi'],
              ['Servicios', '#servicios'],
              ['Rebuild Pro™', '#rebuild-pro'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-light)',
            }}>
              Sígueme
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: '38px',
                  height: '38px',
                  background: 'var(--gold-soft)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: 'var(--gold)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.color = '#FDFAF5'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--gold-soft)'
                  e.currentTarget.style.color = 'var(--gold)'
                  e.currentTarget.style.borderColor = 'var(--gold-border)'
                }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid var(--gold-border)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px',
            color: 'var(--text-light)',
          }}>
            © {new Date().getFullYear()} Jazmina Monteiro. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px',
            color: 'var(--text-light)',
          }}>
            ◆ Miami, FL · Latinoamérica · España
          </p>
        </div>
      </div>
    </footer>
  )
}
