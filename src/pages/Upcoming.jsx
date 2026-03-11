export default function Upcoming() {
  return (
    <>
      <main style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(40px, 8vw, 80px) clamp(24px, 5vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Glow de fondo */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(232,201,106,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Label */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '32px',
          position: 'relative',
          zIndex: 1,
        }}>
          Próximamente
        </p>

        {/* Nombre de marca */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(36px, 7vw, 80px)',
          letterSpacing: '-2px',
          color: '#fff',
          lineHeight: 1.05,
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}>
          Jazminá{' '}
          <span style={{
            WebkitTextStroke: '1.5px var(--gold)',
            color: 'transparent',
          }}>
            Monteiro
          </span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(15px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.60)',
          lineHeight: 1.6,
          maxWidth: '520px',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
        }}>
          Strategy · AI · Automation
          <br />
          Algo grande se está construyendo.
        </p>

        {/* Divisor gold */}
        <div style={{
          width: '48px',
          height: '2px',
          background: 'var(--gold)',
          marginBottom: '48px',
          position: 'relative',
          zIndex: 1,
        }} />

        {/* CTA */}
        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ position: 'relative', zIndex: 1 }}
        >
          CONTACTAR →
        </a>

        {/* Social links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginTop: '40px',
          position: 'relative',
          zIndex: 1,
        }}>
          <a
            href="https://instagram.com/jazminamonteiro"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            Instagram
          </a>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '11px' }}>·</span>
          <a
            href="https://linkedin.com/in/jazminamonteiro"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            LinkedIn
          </a>
        </div>

      </main>
    </>
  )
}
