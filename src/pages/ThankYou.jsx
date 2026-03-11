import { useState, useEffect } from 'react'

/* ══ REEMPLAZAR con el link real del grupo VIP de WhatsApp ══ */
const WA_GROUP_LINK = 'https://chat.whatsapp.com/LINK_GRUPO_VIP'

const checkItems = [
  'Busca el correo de confirmación (revisa spam si no lo ves).',
  'Guarda la fecha: 4 de mayo, 8:00 p.m. EST.',
  'Únete al grupo VIP de WhatsApp para recibir el enlace del webinar.',
]

export default function ThankYou() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          window.location.href = WA_GROUP_LINK
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center' }}>
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        padding: 'clamp(32px,5vw,56px) clamp(20px,5vw,40px)',
        width: '100%',
      }}>

        {/* ── Header ── */}
        <div style={{
          textAlign: 'center',
          marginBottom: '28px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--gold-border)',
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            background: 'var(--gold-soft)',
            border: '2px solid var(--gold)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '22px',
            color: 'var(--gold)',
          }}>⚠</div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(20px, 4vw, 28px)',
            letterSpacing: '-0.8px',
            color: '#fff',
            marginBottom: '10px',
            lineHeight: 1.2,
          }}>
            <span style={{ color: 'var(--gold)' }}>Solo un paso más</span>
          </h1>

          <p style={{
            fontSize: '14px',
            color: 'var(--white-muted)',
            lineHeight: 1.6,
          }}>
            Revisa tu correo — ahí te enviamos la confirmación y el enlace para el webinar.
          </p>
        </div>

        {/* ── Redirect notice ── */}
        <div style={{
          background: 'rgba(232,201,106,0.08)',
          border: '1px solid var(--gold-border)',
          borderRadius: '8px',
          padding: '16px 20px',
          textAlign: 'center',
          marginBottom: '24px',
        }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            color: 'var(--gold)',
            marginBottom: '4px',
          }}>
            Redirigiendo al grupo VIP en {countdown}s…
          </p>
          <p style={{ fontSize: '12px', color: 'var(--white-faint)', fontFamily: "'Inter', sans-serif" }}>
            Ahí recibirás el enlace del webinar y novedades exclusivas.
          </p>
        </div>

        {/* ── Checklist ── */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {checkItems.map((item, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontSize: '14px',
              color: 'var(--white-muted)',
              lineHeight: 1.6,
            }}>
              <span style={{
                flexShrink: 0,
                width: '22px',
                height: '22px',
                background: 'var(--gold-soft)',
                border: '1px solid var(--gold-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                color: 'var(--gold)',
                marginTop: '1px',
              }}>⚠</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── WhatsApp CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={WA_GROUP_LINK}
            className="btn-gold cta-pulse"
            style={{ display: 'inline-flex', justifyContent: 'center', width: '100%', fontSize: '14px' }}
          >
            UNIRME AL GRUPO VIP →
          </a>
          <p style={{
            fontSize: '11px',
            color: 'var(--white-faint)',
            fontFamily: "'Inter', sans-serif",
            marginTop: '10px',
          }}>
            ⚡ Cupo limitado · 100% gratuito
          </p>
        </div>

      </div>
    </div>
  )
}
