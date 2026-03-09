const testimonials = [
  {
    quote: 'Jazmina transformó completamente la manera en que opero mi agencia. Automatizamos el onboarding de clientes y redujimos el tiempo de respuesta de 48h a 2h. El ROI fue inmediato.',
    name: 'María López',
    business: 'Agencia de Marketing Digital',
    location: 'México DF, México',
    initials: 'ML',
  },
  {
    quote: 'Implementamos IA en nuestro proceso de ventas siguiendo el método Rebuild Pro. En 6 semanas triplicamos las consultas calificadas sin contratar a nadie más. Increíble.',
    name: 'Carlos Mendes',
    business: 'SaaS Fintech B2B',
    location: 'Bogotá, Colombia',
    initials: 'CM',
  },
  {
    quote: 'Lo que más valoro es que Jazmina no vende tecnología por vender — entiende el negocio primero. La estrategia que construimos juntos cambió nuestra forma de operar para siempre.',
    name: 'Andrea Salinas',
    business: 'Consultora de RRHH',
    location: 'Miami, FL',
    initials: 'AS',
  },
]

export default function Testimonials() {
  return (
    <section style={{
      padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,70px)',
      maxWidth: '1240px',
      margin: '0 auto',
    }}>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '11px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginBottom: '14px',
      }}>
        Testimonios
      </p>

      <h2 style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(30px, 4vw, 52px)',
        lineHeight: 1.05,
        letterSpacing: '-1.5px',
        marginBottom: '56px',
        color: 'var(--text)',
      }}>
        Lo que dicen quienes<br />
        <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>ya lo vivieron</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {testimonials.map(({ quote, name, business, location, initials }) => (
          <div key={name} style={{
            background: 'var(--card)',
            border: '1px solid var(--gold-border)',
            borderRadius: '6px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            {/* Quote mark */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '48px',
              lineHeight: 0.8,
              color: 'var(--gold)',
              opacity: 0.45,
            }}>
              "
            </div>

            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: 1.78,
              fontWeight: 400,
              flex: 1,
            }}>
              {quote}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--gold-soft)',
                border: '1px solid var(--gold-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                color: 'var(--gold)',
                flexShrink: 0,
              }}>
                {initials}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  color: 'var(--text)',
                }}>
                  {name}
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                }}>
                  {business}
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '11px',
                  color: 'var(--text-light)',
                  marginTop: '1px',
                }}>
                  {location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
