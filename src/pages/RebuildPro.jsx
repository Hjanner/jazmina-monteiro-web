import Hero from '../components/Hero'
import Footer from '../components/Footer'

/* === REEMPLAZAR cada URL con imágenes reales distintas por sección === */
const BG_ROADMAP = 'https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png'
const BG_DUAL    = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80'
const BG_URGENCY = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80'

const learnItems = [
  { num: '01', title: 'El cuello de botella', desc: 'Cómo dejar de ser el cuello de botella de tu propio negocio.' },
  { num: '02', title: 'Ventas con IA', desc: 'El sistema de ventas y automatizaciones con IA que usan negocios que ya facturan.' },
  { num: '03', title: 'De operador a director', desc: 'Cómo pasar de operador agotado a director estratégico de tu empresa.' },
  { num: '04', title: 'Marketing que escala', desc: 'Las claves del marketing que genera demanda constante sin depender de ti.' },
  { num: '05', title: 'Escalar sin duplicar', desc: 'Cómo escalar sin duplicar esfuerzo ni contratar de más.' },
]

const forWhoItems = [
  'Ya tienes un negocio que factura, pero sientes que tú eres el negocio.',
  'Trabajas más horas que nunca y los márgenes no crecen al mismo ritmo.',
  'Sabes que necesitas estructura, pero no sabes por dónde empezar.',
  'Quieres automatizar, delegar y tomar decisiones con datos reales.',
]

const whyTodayItems = [
  'Los cupos son limitados y se están agotando.',
  'Es en vivo — no habrá replay disponible.',
  '100% gratuita. Sin costos ocultos ni compromisos.',
  'Aprenderás el sistema que ya usan +200 empresas que facturan.',
]

/* ── Fondo con imagen + overlay ── */
function SectionBg({ src, overlay = 'rgba(0,0,0,0.88)' }) {
  return (
    <>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url('${src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
    </>
  )
}

/* ── Card item reutilizable para ambas columnas ── */
function DualCard({ text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      background: 'rgba(17,17,17,0.7)',
      border: '1px solid var(--gold-border)',
      borderRadius: '8px',
      padding: '16px 18px',
      backdropFilter: 'blur(6px)',
      transition: 'border-color 0.2s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gold-border)'}
    >
      <span style={{
        flexShrink: 0,
        width: '24px',
        height: '24px',
        background: 'var(--gold-soft)',
        border: '1px solid rgba(232,201,106,0.3)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        color: 'var(--gold)',
        marginTop: '1px',
      }}>◆</span>
      <p style={{
        fontSize: 'clamp(13px, 1.3vw, 15px)',
        color: 'rgba(255,255,255,0.80)',
        lineHeight: 1.6,
      }}>
        {text}
      </p>
    </div>
  )
}

export default function RebuildPro() {
  return (
    <>
      {/* ══ HERO con formulario integrado ══ */}
      <Hero />

      {/* ══ ROADMAP HORIZONTAL — Aprenderás ══ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(56px,8vw,100px) clamp(20px,4vw,48px)',
      }}>
        <SectionBg
          src={BG_ROADMAP}
          overlay="linear-gradient(180deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.86) 50%, rgba(0,0,0,0.93) 100%)"
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
              En esta masterclass aprenderás
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-0.8px',
              color: '#fff',
              lineHeight: 1.15,
            }}>
              Lo que vas a descubrir el{' '}
              <span style={{ color: 'var(--gold)' }}>4 de mayo</span>
            </h2>
          </div>

          {/* Timeline horizontal */}
          <div className="roadmap-scroll" style={{ position: 'relative' }}>
            {/* Línea horizontal */}
            <div style={{
              position: 'absolute',
              top: '28px',
              left: '28px',
              right: '28px',
              height: '2px',
              background: 'linear-gradient(to right, var(--gold-border), var(--gold), var(--gold-border))',
              zIndex: 0,
            }} />

            <div className="roadmap-track" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '16px',
            }}>
              {learnItems.map(({ num, title, desc }) => (
                <div key={num} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'center',
                }}>
                  {/* Nodo */}
                  <div style={{
                    flexShrink: 0,
                    width: '56px',
                    height: '56px',
                    background: 'rgba(0,0,0,0.8)',
                    border: '2px solid var(--gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--gold)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {num}
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    width: '100%',
                    background: 'rgba(17,17,17,0.7)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '8px',
                    padding: '18px 16px',
                    backdropFilter: 'blur(6px)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gold-border)'}
                  >
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(14px, 1.3vw, 16px)',
                      color: 'var(--gold)',
                      marginBottom: '6px',
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(12px, 1.1vw, 14px)',
                      color: 'rgba(255,255,255,0.70)',
                      lineHeight: 1.55,
                    }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#registro" className="btn-gold cta-pulse">QUIERO MI LUGAR GRATIS →</a>
          </div>
        </div>
      </section>

      {/* ══ SECCIONES LADO A LADO: Para ti + Por qué hoy ══ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(56px,8vw,100px) clamp(20px,4vw,48px)',
      }}>
        <SectionBg
          src={BG_DUAL}
          overlay="linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.87) 50%, rgba(0,0,0,0.92) 100%)"
        />

        <div className="dual-section-grid" style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px,4vw,48px)',
          alignItems: 'stretch',
        }}>

          {/* ── Izquierda: Para ti si (jerarquía invertida) ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 32px)',
              letterSpacing: '-0.5px',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '8px',
            }}>
              Esta clase es{' '}
              <span style={{ color: 'var(--gold)' }}>para ti si</span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'var(--white-faint)',
              letterSpacing: '0.3px',
              marginBottom: '24px',
              lineHeight: 1.5,
            }}>
              ¿Te identificas con alguna de estas situaciones?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {forWhoItems.map((item, i) => (
                <DualCard key={i} text={item} />
              ))}
            </div>
          </div>

          {/* ── Derecha: Por qué registrarte hoy ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 32px)',
              letterSpacing: '-0.5px',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '8px',
            }}>
              Por qué debes{' '}
              <span style={{ color: 'var(--gold)' }}>registrarte hoy</span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'var(--white-faint)',
              letterSpacing: '0.3px',
              marginBottom: '24px',
              lineHeight: 1.5,
            }}>
              No lo dejes para después
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {whyTodayItems.map((item, i) => (
                <DualCard key={i} text={item} />
              ))}
            </div>
          </div>

        </div>

        {/* CTA centrado */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          marginTop: 'clamp(32px,4vw,48px)',
        }}>
          <a href="#registro" className="btn-gold cta-pulse">SÍ, QUIERO REGISTRARME →</a>
        </div>
      </section>

      {/* ══ URGENCY BAND ══ */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(18px,2.5vw,24px) clamp(20px,5vw,40px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        textAlign: 'center',
      }}>
        <SectionBg
          src={BG_URGENCY}
          overlay="linear-gradient(90deg, rgba(232,201,106,0.95) 0%, rgba(201,168,76,0.95) 100%)"
        />
        <p style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          color: '#000',
          letterSpacing: '-0.2px',
        }}>
          Cupos limitados — 4 de mayo · 8:00 p.m. EST
        </p>
        <a href="#registro" style={{
          position: 'relative',
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#000',
          color: 'var(--gold)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          padding: '11px 24px',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#1a1a1a'}
        onMouseLeave={e => e.currentTarget.style.background = '#000'}
        >
          REGISTRARME AHORA →
        </a>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 820px) {
          .dual-section-grid { grid-template-columns: 1fr !important; }
          .roadmap-track {
            grid-template-columns: 1fr !important;
            max-width: 400px;
            margin: 0 auto;
          }
          .roadmap-scroll > div:first-child {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
