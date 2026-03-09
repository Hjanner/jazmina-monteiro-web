const Badge = ({ children }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--gold-soft)',
    border: '1px solid var(--gold-border)',
    color: 'var(--gold)',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '6px 16px',
    borderRadius: '100px',
    fontFamily: "'Space Grotesk', sans-serif",
  }}>
    <span style={{ fontSize: '8px' }}>◆</span>
    {children}
  </div>
)

export { Badge }

export default function Hero({ onOpenModal }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Background subtle gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 55% 65% at 75% 60%, rgba(184,146,47,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 35% 35% at 15% 80%, rgba(184,146,47,0.06) 0%, transparent 55%)
        `,
        pointerEvents: 'none',
      }} />

      {/* LEFT: Copy */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(50px,8vh,90px) 50px clamp(50px,8vh,90px) clamp(30px,5vw,70px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '32px',
        paddingTop: '110px',
      }}>
        <Badge>Estrategia · IA · Automatización</Badge>

        <h1 style={{
          fontSize: 'clamp(48px, 6vw, 82px)',
          fontWeight: 800,
          lineHeight: 0.94,
          letterSpacing: '-2.5px',
          fontFamily: "'Inter', sans-serif",
          color: 'var(--text)',
        }}>
          <span className="hero-outline" style={{ display: 'block' }}>CONSTRUYE</span>
          <span style={{ color: 'var(--text)', display: 'block' }}>TU MARCA</span>
          <span style={{ color: 'var(--gold)', display: 'block' }}>CON IA</span>
        </h1>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          maxWidth: '400px',
          fontWeight: 400,
        }}>
          Transforma tu negocio con estrategia clara, sistemas automatizados e inteligencia artificial — sin perder tu esencia.
        </p>

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
          padding: '18px 38px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--brown-dark)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Agenda una llamada <span style={{ fontSize: '16px' }}>→</span>
        </button>

        <p style={{
          fontSize: '12px',
          color: 'var(--text-light)',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.5px',
        }}>
          ◆ Estrategia personalizada · Sin compromisos
        </p>
      </div>

      {/* RIGHT: Image + overlays */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          {/* Image background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 70% 80% at 50% 90%, rgba(184,146,47,0.18) 0%, transparent 55%),
              linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)
            `,
          }} />

          {/* SVG grid */}
          <svg style={{ position: 'absolute', inset: 0, opacity: 0.06, width: '100%', height: '100%' }}
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="45" height="45" patternUnits="userSpaceOnUse">
                <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#B8922F" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Model image */}
          <img
            src="https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png"
            alt="Jazmina Monteiro"
            style={{
              position: 'relative',
              zIndex: 3,
              width: '100%',
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'contrast(1.02) brightness(0.96)',
            }}
          />

          {/* Bottom fade */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '130px',
            background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
            zIndex: 5,
          }} />

          {/* Left fade */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '130px',
            background: 'linear-gradient(to right, var(--bg) 0%, transparent 100%)',
            zIndex: 5,
          }} />

          {/* Float tags */}
          {[
            { text: '◆ AGENCIA DE IA', style: { top: '18%', left: '6%', animationDelay: '1s' } },
            { text: '◆ AUTOMATIZACIÓN', style: { top: '38%', right: '6%', animationDelay: '1.3s' } },
            { text: '◆ DIRECCIÓN ESTRATÉGICA', style: { bottom: '22%', left: '6%', animationDelay: '1.6s' } },
          ].map(({ text, style }) => (
            <div key={text} className="animate-float-in" style={{
              position: 'absolute',
              zIndex: 6,
              background: 'rgba(253,250,245,0.88)',
              border: '1px solid rgba(184,146,47,0.3)',
              padding: '10px 18px',
              borderRadius: '4px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--gold)',
              letterSpacing: '1.5px',
              backdropFilter: 'blur(12px)',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(26,14,6,0.08)',
              ...style,
            }}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:first-of-type { display: none !important; }
        }
      `}</style>
    </section>
  )
}
