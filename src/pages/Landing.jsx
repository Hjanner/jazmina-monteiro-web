import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'

/* ── Placeholder para imágenes/videos ── */
function MediaPlaceholder({ type = 'VIDEO', label, sublabel }) {
  const isVideo = type === 'VIDEO'
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      paddingBottom: isVideo ? '56.25%' : '50%',
      background: '#0a0a0a',
      border: '1px dashed rgba(232,201,106,0.28)',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        color: 'rgba(232,201,106,0.35)',
      }}>
        <span style={{ fontSize: '44px' }}>{isVideo ? '▶' : '◻'}</span>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(232,201,106,0.5)',
        }}>
          {label || (isVideo ? 'Video del curso' : 'Imagen')}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.18)',
          letterSpacing: '1px',
        }}>
          {sublabel || '— Reemplazar con contenido real —'}
        </p>
      </div>
    </div>
  )
}

/* ── Separador decorativo ── */
function GoldDivider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      margin: '0 auto',
      maxWidth: '200px',
    }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
      <span style={{ color: 'var(--gold)', fontSize: '10px' }}>◆</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--gold-border)' }} />
    </div>
  )
}

/* ── Card de formulario ── */
function FormCard({ headline, sub }) {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
      {headline && (
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#fff',
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
            marginBottom: '8px',
          }}>
            {headline}
          </h2>
          {sub && (
            <p style={{
              fontSize: '13px',
              color: 'var(--white-faint)',
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}>
              {sub}
            </p>
          )}
        </div>
      )}
      <div style={{
        background: 'var(--black-card)',
        border: '1px solid var(--gold-border)',
        borderRadius: '10px',
        padding: 'clamp(24px,4vw,40px)',
      }}>
        <RegisterForm />
      </div>
    </div>
  )
}

const learnItems = [
  'Cómo dejar de ser el cuello de botella de tu propio negocio.',
  'El sistema de ventas y automatizaciones con IA que usan negocios que ya facturan.',
  'Cómo pasar de operador agotado a director estratégico de tu empresa.',
  'Las claves del marketing que genera demanda constante sin depender de ti.',
  'Cómo escalar sin duplicar esfuerzo ni contratar de más.',
]

const forWhoItems = [
  'Ya tienes un negocio que factura, pero sientes que tú eres el negocio.',
  'Trabajas más horas que nunca y los márgenes no crecen al mismo ritmo.',
  'Sabes que necesitas estructura, pero no sabes por dónde empezar.',
  'Quieres automatizar, delegar y tomar decisiones con datos reales.',
]

const sectionWrap = {
  padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,40px)',
}
const innerWrap = {
  maxWidth: '700px',
  margin: '0 auto',
}

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* ══ HERO ══ */}
      <Hero />

      {/* ══ FORMULARIO PRINCIPAL ══ */}
      <section id="registro" style={{
        ...sectionWrap,
        background: 'var(--black-soft)',
        borderTop: '1px solid var(--gold-border)',
      }}>
        <FormCard
          headline={<>Regístrate ahora y <span style={{ color: 'var(--gold)' }}>asegura tu lugar</span></>}
          sub="📅 4 de mayo · 🕒 8:00 p.m. (Miami – EST) · 100% online y gratuita"
        />
      </section>

      {/* ══ VIDEO PLACEHOLDER — Presentación ══ */}
      <section style={{
        padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,40px)',
        background: 'var(--black)',
      }}>
        <div style={{ ...innerWrap, maxWidth: '760px' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(232,201,106,0.5)',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            Video de presentación
          </p>
          <MediaPlaceholder
            type="VIDEO"
            label="Video teaser / Intro de la masterclass"
            sublabel="Reemplazar con video real del curso"
          />
        </div>
      </section>

      {/* ══ APRENDERÁS ══ */}
      <section id="aprende" style={{
        ...sectionWrap,
        background: 'var(--black-soft)',
        borderTop: '1px solid var(--gold-border)',
        borderBottom: '1px solid var(--gold-border)',
      }}>
        <div style={innerWrap}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {learnItems.map((item, i) => (
              <div
                key={i}
                className="learn-card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: 'var(--black-card)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '8px',
                  padding: '18px 20px',
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: '26px',
                  height: '26px',
                  background: 'var(--gold-soft)',
                  border: '1px solid rgba(232,201,106,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'var(--gold)',
                  fontWeight: 700,
                  marginTop: '1px',
                }}>✓</span>
                <p style={{
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.65,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="#registro" className="btn-gold">QUIERO MI LUGAR GRATIS →</a>
          </div>
        </div>
      </section>

      {/* ══ IMAGEN/VIDEO PLACEHOLDER — Material de apoyo ══ */}
      <section style={{
        padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,40px)',
        background: 'var(--black)',
      }}>
        <div style={{ ...innerWrap, maxWidth: '760px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
          className="media-grid"
          >
            <MediaPlaceholder
              type="IMAGE"
              label="Imagen del contenido"
              sublabel="Slide o screenshot del curso"
            />
            <MediaPlaceholder
              type="IMAGE"
              label="Imagen del contenido"
              sublabel="Slide o screenshot del curso"
            />
          </div>
        </div>
      </section>

      {/* ══ PARA TI SI ══ */}
      <section id="para-ti" style={{
        ...sectionWrap,
        background: 'var(--black-soft)',
        borderTop: '1px solid var(--gold-border)',
        borderBottom: '1px solid var(--gold-border)',
      }}>
        <div style={innerWrap}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
              Esta clase es para ti si
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-0.8px',
              color: '#fff',
              lineHeight: 1.15,
            }}>
              ¿Te identificas con alguna{' '}
              <span style={{ color: 'var(--gold)' }}>de estas situaciones?</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {forWhoItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                background: 'var(--black-card)',
                border: '1px solid var(--gold-border)',
                borderRadius: '8px',
                padding: '18px 20px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gold-border)'}
              >
                <span style={{
                  flexShrink: 0,
                  width: '26px',
                  height: '26px',
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
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.65,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="#registro-final" className="btn-gold">SÍ, ES PARA MÍ →</a>
          </div>
        </div>
      </section>

      {/* ══ PLACEHOLDER — Testimonios / Prueba social ══ */}
      <section style={{
        padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,40px)',
        background: 'var(--black)',
      }}>
        <div style={{ ...innerWrap, maxWidth: '760px' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(232,201,106,0.5)',
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            Testimonios / Prueba social
          </p>
          <MediaPlaceholder
            type="VIDEO"
            label="Video de testimonios o resultados"
            sublabel="Reemplazar con video real"
          />
        </div>
      </section>

      {/* ══ URGENCY BAND ══ */}
      <div style={{
        background: 'var(--gold)',
        padding: 'clamp(18px,2.5vw,24px) clamp(20px,5vw,40px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          color: '#000',
          letterSpacing: '-0.2px',
        }}>
          ⚡ Cupos limitados — 4 de mayo · 8:00 p.m. EST
        </p>
        <a href="#registro-final" style={{
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

      {/* ══ FORMULARIO FINAL ══ */}
      <section id="registro-final" style={{
        ...sectionWrap,
        background: 'var(--black-soft)',
        borderTop: '1px solid var(--gold-border)',
      }}>
        <GoldDivider />
        <div style={{ marginTop: '40px' }}>
          <FormCard
            headline={<>Regístrate ahora y <span style={{ color: 'var(--gold)' }}>asegura tu lugar:</span></>}
            sub="Esta masterclass es en vivo · No habrá replay · Los cupos se están agotando."
          />
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .media-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
