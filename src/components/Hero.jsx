export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/*
        ═══════════════════════════════════════════
        IMAGEN DE FONDO — PLACEHOLDER
        Reemplaza el background-image con la URL real:
          backgroundImage: 'url("TU_IMAGEN_AQUI")',
        ═══════════════════════════════════════════
      */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png')`,
        /* === REEMPLAZAR URL ARRIBA === */
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Overlay — asegura legibilidad del texto */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.96) 100%)',
      }} />

      {/* Contenido centrado */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '760px',
        margin: '0 auto',
        padding: 'clamp(100px,12vh,130px) clamp(24px,5vw,48px) clamp(60px,8vh,80px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '22px',
      }}>

        {/* Badge */}
        <div className="badge-brand">
          <span style={{ fontSize: '8px' }}>◆</span> Masterclass gratuita
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(12px, 1.3vw, 14px)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
          }}>
            Masterclass
          </p>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(56px, 9vw, 96px)',
            lineHeight: 0.9,
            letterSpacing: '-2px',
            color: 'var(--gold)',
            textShadow: '0 0 60px rgba(232,201,106,0.25), 0 2px 20px rgba(0,0,0,0.9)',
          }}>
            REBUILD PRO<span style={{ fontSize: '0.4em', verticalAlign: 'super', marginLeft: '4px', color: 'var(--gold)' }}>™</span>
          </h1>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(16px, 2.2vw, 22px)',
          color: '#ffffff',
          lineHeight: 1.45,
          maxWidth: '580px',
          textShadow: '0 1px 12px rgba(0,0,0,0.8)',
          letterSpacing: '-0.3px',
        }}>
          El sistema que convierte un negocio caótico en una empresa que{' '}
          <span style={{ color: 'var(--gold)' }}>funciona sin que tú lo cargues todo.</span>
        </p>

        {/* Fecha y hora */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px 20px',
          justifyContent: 'center',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.70)',
          fontFamily: "'Inter', sans-serif",
          background: 'rgba(0,0,0,0.45)',
          border: '1px solid rgba(232,201,106,0.2)',
          padding: '10px 20px',
          borderRadius: '100px',
        }}>
          <span>📅 4 de mayo</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <span>🕒 8:00 p.m. (Miami – EST)</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <span>💻 100% online</span>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <a href="#registro" className="btn-gold cta-pulse" style={{
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            padding: 'clamp(15px,2vh,20px) clamp(28px,4vw,48px)',
          }}>
            QUIERO MI LUGAR GRATIS →
          </a>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.40)',
            fontFamily: "'Inter', sans-serif",
          }}>
            ⚡ Cupos limitados — Sin costo · Sin spam
          </p>
        </div>

      </div>
    </section>
  )
}
