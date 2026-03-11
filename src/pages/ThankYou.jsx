import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const checkItems = [
  'Guarda la fecha en tu calendario para no olvidarlo.',
  'Busca el correo de confirmación (revisa spam si no lo ves).',
  'Agrega a Jazmina Monteiro en Instagram para recibir recordatorios antes del evento.',
  'Comparte con alguien más que lo necesite — los cupos son limitados.',
]

const learnItems = [
  'Cómo dejar de ser el cuello de botella de tu propio negocio.',
  'El sistema de ventas y automatizaciones con IA que usan negocios que ya facturan.',
  'Cómo pasar de operador agotado a director estratégico de tu empresa.',
  'Las claves del marketing que genera demanda constante sin depender de ti.',
  'Cómo escalar sin duplicar esfuerzo ni contratar de más.',
]

export default function ThankYou() {
  const handleShare = () => {
    const url = window.location.origin
    if (navigator.share) {
      navigator.share({ title: 'Rebuild Pro — Masterclass Gratuita', url }).catch(() => {})
    } else {
      navigator.clipboard.writeText(url)
        .then(() => alert('¡Enlace copiado al portapapeles!'))
        .catch(() => {})
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '68px' }}>
        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,40px)',
        }}>

          {/* ── Header ── */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
            paddingBottom: '36px',
            borderBottom: '1px solid var(--gold-border)',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'var(--gold-soft)',
              border: '2px solid var(--gold)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '22px',
              color: 'var(--gold)',
            }}>✓</div>

            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 4vw, 34px)',
              letterSpacing: '-0.8px',
              color: '#fff',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}>
              ¡Ya tienes tu lugar en{' '}
              <span style={{ color: 'var(--gold)' }}>Rebuild Pro!</span>
            </h1>

            <p style={{
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'var(--white-muted)',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}>
              Revisa tu correo — ahí te enviamos la confirmación y el enlace para el webinar.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 16px',
              justifyContent: 'center',
              fontSize: '13px',
              color: 'var(--white-muted)',
              fontFamily: "'Inter', sans-serif",
            }}>
              <span>📅 4 de mayo</span>
              <span>🕒 8:00 p.m. (Miami – EST)</span>
              <span>💻 Enlace en tu correo</span>
            </div>
          </div>

          {/* ── Checklist ── */}
          <div style={{ marginBottom: '32px' }}>
            <p className="section-label">Antes del 4 de mayo, haz esto:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {checkItems.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: 'clamp(13px, 1.4vw, 14px)',
                  color: 'var(--white-muted)',
                  lineHeight: 1.65,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    background: 'var(--gold-soft)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: 'var(--gold)',
                    marginTop: '2px',
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Lo que aprenderás ── */}
          <div style={{
            background: 'var(--black-card)',
            border: '1px solid var(--gold-border)',
            borderRadius: '8px',
            padding: 'clamp(20px,3vw,32px)',
            marginBottom: '24px',
          }}>
            <p className="section-label">Lo que vas a descubrir el 4 de mayo:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {learnItems.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: 'clamp(13px, 1.3vw, 14px)',
                  color: 'var(--white-muted)',
                  lineHeight: 1.65,
                }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '10px', marginTop: '5px' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Comparte ── */}
          <div style={{
            background: 'var(--black-soft)',
            border: '1px solid var(--gold-border)',
            borderRadius: '8px',
            padding: 'clamp(20px,3vw,28px)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              color: '#fff',
              marginBottom: '8px',
            }}>
              ¿Conoces a alguien que también lo necesite?
            </p>
            <p style={{
              fontSize: '13px',
              color: 'var(--white-faint)',
              lineHeight: 1.65,
              marginBottom: '20px',
            }}>
              Comparte el enlace de registro. Los cupos son limitados y se están agotando.
            </p>
            <button
              onClick={handleShare}
              className="btn-gold"
              style={{ margin: '0 auto' }}
            >
              COMPARTIR LA MASTERCLASS →
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
