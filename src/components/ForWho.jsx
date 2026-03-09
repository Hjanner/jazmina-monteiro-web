import { Target, Rocket, Building2, Zap, Users, TrendingUp } from 'lucide-react'

const cards = [
  {
    Icon: Rocket,
    title: 'Emprendedores en crecimiento',
    desc: 'Tienes un negocio que genera ingresos pero necesitas estructura y sistemas para escalar sin depender de ti en todo.',
  },
  {
    Icon: Building2,
    title: 'Empresas establecidas',
    desc: 'Ya tienes operaciones, pero quieres integrar IA y automatización para optimizar costos y aumentar tu capacidad.',
  },
  {
    Icon: Target,
    title: 'Consultores y coaches',
    desc: 'Ofreces servicios de alto valor pero tu marketing y captación aún dependen 100% de ti y tu tiempo.',
  },
  {
    Icon: Zap,
    title: 'Negocios digitales',
    desc: 'Tienes presencia online pero tus conversiones son inconsistentes y no tienes un sistema predecible de ventas.',
  },
  {
    Icon: Users,
    title: 'Equipos y agencias',
    desc: 'Diriges un equipo y necesitas claridad estratégica, procesos claros y herramientas que multipliquen la productividad.',
  },
  {
    Icon: TrendingUp,
    title: 'Profesionales en transición',
    desc: 'Estás reconvirtiendo tu negocio o lanzando algo nuevo y quieres hacerlo con estrategia desde el primer día.',
  },
]

export default function ForWho() {
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
        Para quién es
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
        Trabajamos con líderes que<br />
        <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>quieren resultados reales</em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {cards.map(({ Icon, title, desc }) => (
          <div key={title} style={{
            background: 'var(--card)',
            border: '1px solid var(--gold-border)',
            borderRadius: '6px',
            padding: '28px 24px',
            transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--gold)'
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,14,6,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--gold-border)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              background: 'var(--gold-soft)',
              border: '1px solid var(--gold-border)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
            }}>
              <Icon size={18} color="var(--gold)" />
            </div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              marginBottom: '10px',
              color: 'var(--text)',
            }}>
              {title}
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.68,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #for-who-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #for-who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
