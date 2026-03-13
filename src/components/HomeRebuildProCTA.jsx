import { Badge } from './HomeHero'

const phases = [
  { num: '01', title: 'Auditoría estratégica', desc: 'Analizamos tu negocio, mercado y competencia para identificar las palancas de crecimiento más rápidas.' },
  { num: '02', title: 'Diseño del sistema', desc: 'Construimos tu mapa de automatización e IA personalizado según tu industria y modelo de negocio.' },
  { num: '03', title: 'Implementación guiada', desc: 'Activamos cada pieza del sistema con soporte directo, capacitación y acompañamiento en tiempo real.' },
  { num: '04', title: 'Escala y optimización', desc: 'Medimos, ajustamos y escalamos. Tu negocio crece de forma predecible con métricas claras.' },
]

export default function HomeRebuildProCTA({ onOpenModal }) {
  return (
    <section id="rebuild-pro" style={{
      position: 'relative',
      background: 'var(--surface)',
      borderTop: '1px solid var(--gold-border)',
      borderBottom: '1px solid var(--gold-border)',
      overflow: 'hidden',
      padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,70px)',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,146,47,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(60px, 12vw, 160px)',
        color: 'rgba(184,146,47,0.05)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-2px',
      }}>
        REBUILD PRO™
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Badge>Método Rebuild Pro™</Badge>

          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 66px)',
            lineHeight: 0.97,
            letterSpacing: '-2px',
            marginTop: '28px',
            marginBottom: '22px',
            color: 'var(--text)',
          }}>
            <span style={{ display: 'block' }}>RECONSTRUYE TU</span>
            <span style={{ color: 'var(--gold)', display: 'block' }}>NEGOCIO CON IA</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.72,
            maxWidth: '560px',
            margin: '0 auto',
            fontWeight: 400,
          }}>
            Un método probado en más de 200 empresas para implementar inteligencia artificial y automatización de forma estratégica — con resultados visibles en 8 semanas.
          </p>
        </div>

        {/* 4 phases */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
          background: 'var(--gold-border)',
          marginBottom: '48px',
        }}>
          {phases.map(({ num, title, desc }) => (
            <div key={num} style={{
              background: 'var(--card)',
              padding: '36px 32px',
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '48px',
                fontWeight: 800,
                color: 'rgba(184,146,47,0.12)',
                lineHeight: 1,
                marginBottom: '-8px',
              }}>
                {num}
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '17px',
                marginBottom: '10px',
                color: 'var(--text)',
              }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.72 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenModal} className="cta-pulse" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--brown-dark)',
            color: '#FDFAF5',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '18px 44px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            marginBottom: '16px',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--brown-dark)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Quiero aplicar al método <span style={{ fontSize: '16px' }}>→</span>
          </button>
          <p style={{
            fontSize: '12px',
            color: 'var(--text-light)',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            ◆ Próxima cohorte · 4 de mayo, 8:00 PM EST
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #rebuild-pro .phases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
