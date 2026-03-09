export default function About() {
  return (
    <section id="sobre-mi" style={{
      background: 'var(--bg)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '640px',
      overflow: 'hidden',
    }}>
      {/* Left: image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)' }}>
        <img
          src="https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png"
          alt="Jazmina Monteiro"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            filter: 'brightness(0.95) contrast(1.02)',
          }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to right, transparent 40%, var(--bg) 100%),
            linear-gradient(135deg, rgba(184,146,47,0.08) 0%, transparent 60%)
          `,
        }} />
      </div>

      {/* Right: content */}
      <div style={{
        padding: 'clamp(50px,6vw,80px) clamp(30px,5vw,60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '24px',
        borderLeft: '1px solid var(--gold-border)',
        background: 'var(--bg)',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}>
          Sobre mí
        </p>

        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(28px, 3.5vw, 46px)',
          lineHeight: 1.08,
          letterSpacing: '-1px',
          color: 'var(--text)',
        }}>
          Estratega de negocio<br />
          <span style={{ color: 'var(--gold)' }}>con visión</span><br />
          y resultados reales
        </h2>

        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.78, fontWeight: 400 }}>
          Soy Jazmina Monteiro — consultora de estrategia, IA y automatización para emprendedores y empresas que quieren crecer sin complicar su operación.
        </p>

        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.78, fontWeight: 400 }}>
          Trabajo contigo para construir sistemas que vendan, nutran y conviertan — mientras tú te enfocas en lo que mejor sabes hacer.
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
          {[
            'Más de 200 proyectos estratégicos completados',
            'Implementación de IA en procesos de ventas y marketing',
            'Automatización de flujos operativos completos',
            'Mentoría y dirección de equipos digitales',
          ].map(item => (
            <li key={item} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              fontSize: '14px',
              color: 'var(--text)',
              lineHeight: 1.6,
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: 'var(--gold)',
                borderRadius: '50%',
                marginTop: '7px',
                flexShrink: 0,
                display: 'block',
              }} />
              {item}
            </li>
          ))}
        </ul>

        <a href="#rebuild-pro" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--gold)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.3px',
          textDecoration: 'none',
          marginTop: '8px',
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '12px'}
        onMouseLeave={e => e.currentTarget.style.gap = '8px'}
        >
          Conoce el Método Rebuild Pro™ →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre-mi { grid-template-columns: 1fr !important; }
          #sobre-mi > div:first-child { min-height: 320px; }
        }
      `}</style>
    </section>
  )
}
