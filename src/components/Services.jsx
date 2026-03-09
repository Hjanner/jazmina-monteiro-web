const services = [
  {
    num: '01',
    title: 'Estrategia de Marca',
    desc: 'Definimos tu propuesta de valor única, posicionamiento en el mercado y narrativa de marca que te diferencia y atrae a tus clientes ideales sin esfuerzo extra.',
  },
  {
    num: '02',
    title: 'Implementación de IA',
    desc: 'Integramos inteligencia artificial en tus procesos de ventas, atención al cliente y marketing para multiplicar tu capacidad sin multiplicar tu equipo.',
  },
  {
    num: '03',
    title: 'Automatización Operativa',
    desc: 'Diseñamos flujos automáticos que nutren leads, califican prospectos y ejecutan seguimientos — funcionando 24/7 mientras tú te concentras en cerrar.',
  },
  {
    num: '04',
    title: 'Dirección Estratégica Mensual',
    desc: 'Acompañamiento continuo para founders y directivos que necesitan claridad estratégica, priorización de recursos y visión ejecutiva para escalar con control. Sesiones semanales, KPIs definidos y ajustes en tiempo real.',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{ padding: 'clamp(60px,8vw,100px) 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(20px,5vw,70px)' }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '14px',
        }}>
          Servicios
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
          Lo que hacemos <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>juntos</em>
        </h2>

        {/* Top 3 cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'var(--gold-border)',
          marginBottom: '2px',
        }}>
          {services.slice(0, 3).map(s => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>

        {/* Card 04 full width */}
        <div style={{ background: 'var(--gold-border)' }}>
          <ServiceCard {...services[3]} fullWidth />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #servicios .svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ num, title, desc, fullWidth }) {
  return (
    <div
      className="learn-card-hover"
      style={{
        background: 'var(--card)',
        padding: '44px 40px',
        cursor: 'default',
        display: fullWidth ? 'grid' : 'block',
        gridTemplateColumns: fullWidth ? '1fr 2fr' : undefined,
        gap: fullWidth ? '40px' : undefined,
        alignItems: fullWidth ? 'center' : undefined,
      }}
    >
      <div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '72px',
          fontWeight: 800,
          color: 'rgba(184,146,47,0.12)',
          lineHeight: 1,
          marginBottom: '-12px',
        }}>
          {num}
        </div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 700,
          marginBottom: '10px',
          fontFamily: "'Inter', sans-serif",
          color: 'var(--text)',
        }}>
          {title}
        </h3>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.72 }}>
        {desc}
      </p>
    </div>
  )
}
