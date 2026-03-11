import RegisterForm from './RegisterForm'

const HERO_BG = 'https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png'
/* === REEMPLAZAR URL ARRIBA CON IMAGEN REAL === */

export default function Hero() {
  return (
    <section id="registro" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Imagen de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('${HERO_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* Contenido: 2 columnas */}
      <div className="hero-grid" style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(80px,10vh,120px) clamp(20px,4vw,48px) clamp(40px,5vh,60px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(24px,4vw,56px)',
        alignItems: 'center',
      }}>

        {/* ── Izquierda: Texto ── */}
        <div style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(42px, 6vw, 80px)',
            lineHeight: 0.9,
            letterSpacing: '-2px',
            color: 'var(--gold)',
            textShadow: '0 0 60px rgba(232,201,106,0.25), 0 2px 20px rgba(0,0,0,0.9)',
          }}>
            REBUILD PRO<span style={{ fontSize: '0.35em', verticalAlign: 'super', marginLeft: '4px' }}>™</span>
          </h1>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: '#ffffff',
            lineHeight: 1.45,
            maxWidth: '460px',
            textShadow: '0 1px 12px rgba(0,0,0,0.8)',
            letterSpacing: '-0.3px',
          }}>
            El sistema que convierte un negocio caótico en una empresa que{' '}
            <span style={{ color: 'var(--gold)' }}>funciona sin que tú lo cargues todo.</span>
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px 16px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.70)',
            fontFamily: "'Inter', sans-serif",
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(232,201,106,0.2)',
            padding: '10px 18px',
            borderRadius: '100px',
            width: 'fit-content',
          }}>
            <span>📅 4 de mayo</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
            <span>🕒 8:00 p.m. EST</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
            <span>💻 100% online</span>
          </div>
        </div>

        {/* ── Derecha: Formulario ── */}
        <div style={{
          background: 'rgba(0,0,0,0.55)',
          border: '1px solid var(--gold-border)',
          borderRadius: '12px',
          padding: 'clamp(24px,3vw,36px)',
          backdropFilter: 'blur(12px)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              color: '#fff',
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
              marginBottom: '6px',
            }}>
              Regístrate y{' '}
              <span style={{ color: 'var(--gold)' }}>asegura tu lugar</span>
            </h2>
            <p style={{
              fontSize: '12px',
              color: 'var(--white-faint)',
              fontFamily: "'Inter', sans-serif",
            }}>
              Cupo limitado · 100% gratuito
            </p>
          </div>
          <RegisterForm />
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .hero-grid > div:first-child {
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
