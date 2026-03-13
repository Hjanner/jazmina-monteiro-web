import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { registroSchema } from '../utils/validation'

const COUNTRY_CODES = [
  { code: '+1',   label: '\u{1F1FA}\u{1F1F8} +1'   },
  { code: '+52',  label: '\u{1F1F2}\u{1F1FD} +52'  },
  { code: '+57',  label: '\u{1F1E8}\u{1F1F4} +57'  },
  { code: '+58',  label: '\u{1F1FB}\u{1F1EA} +58'  },
  { code: '+51',  label: '\u{1F1F5}\u{1F1EA} +51'  },
  { code: '+54',  label: '\u{1F1E6}\u{1F1F7} +54'  },
  { code: '+55',  label: '\u{1F1E7}\u{1F1F7} +55'  },
  { code: '+56',  label: '\u{1F1E8}\u{1F1F1} +56'  },
  { code: '+593', label: '\u{1F1EA}\u{1F1E8} +593' },
  { code: '+502', label: '\u{1F1EC}\u{1F1F9} +502' },
  { code: '+503', label: '\u{1F1F8}\u{1F1FB} +503' },
  { code: '+504', label: '\u{1F1ED}\u{1F1F3} +504' },
  { code: '+505', label: '\u{1F1F3}\u{1F1EE} +505' },
  { code: '+506', label: '\u{1F1E8}\u{1F1F7} +506' },
  { code: '+507', label: '\u{1F1F5}\u{1F1E6} +507' },
  { code: '+34',  label: '\u{1F1EA}\u{1F1F8} +34'  },
  { code: '+44',  label: '\u{1F1EC}\u{1F1E7} +44'  },
]

const RECURSO_LABELS = {
  pdf: { articulo: 'un PDF', emoji: '\u{1F4C4}' },
  video: { articulo: 'un video', emoji: '\u{1F3AC}' },
  imagen: { articulo: 'una imagen', emoji: '\u{1F5BC}\u{FE0F}' },
  link: { articulo: 'un enlace', emoji: '\u{1F517}' },
}

export default function Recurso() {
  const [searchParams] = useSearchParams()
  const origin = searchParams.get('origin') || 'direct'
  const keyword = searchParams.get('keyword') || 'general'
  const temp = searchParams.get('temp') || 'frio'
  const recurso = searchParams.get('recurso') || 'pdf'
  const funnel = searchParams.get('funnel') || 'capsula'

  const [countryCode, setCountryCode] = useState('+1')
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registroSchema) })

  const recursoInfo = RECURSO_LABELS[recurso] || RECURSO_LABELS.pdf

  const onSubmit = async (data) => {
    const payload = {
      name: data.nombre,
      email: data.email,
      phone: `${countryCode}${data.telefono}`,
      origin,
      keyword,
      temp,
      recurso,
      funnel,
    }
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/ii90EqqPaxlfzhF7czC1/webhook-trigger/c60e6642-9206-452e-a60e-0eb12a33f4a3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (_) {}
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(232,201,106,0.25)',
    color: '#ffffff',
    padding: '14px 16px',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '6px',
  }

  const errorStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px',
    color: '#ff6b6b',
    marginTop: '4px',
  }

  if (submitted) {
    return (
      <main style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 5vw, 48px)',
      }}>
        <div style={{
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>{recursoInfo.emoji}</div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            ¡Listo!
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}>
            Te enviaremos {recursoInfo.articulo} al correo que indicaste.
            <br />
            Revisa tu bandeja de entrada (y spam, por si acaso).
          </p>
          <div style={{
            width: '48px',
            height: '2px',
            background: 'var(--gold, #c9a84c)',
            margin: '0 auto',
          }} />
        </div>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(24px, 5vw, 48px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(232,201,106,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '440px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold, #c9a84c)',
          marginBottom: '16px',
          textAlign: 'center',
        }}>
          {recursoInfo.emoji} Tu recurso está listo
        </p>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(22px, 5vw, 30px)',
          color: '#fff',
          lineHeight: 1.2,
          marginBottom: '12px',
          textAlign: 'center',
        }}>
          Recibe {recursoInfo.articulo} en tu correo
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '15px',
          color: 'rgba(255,255,255,0.50)',
          lineHeight: 1.6,
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          Completa tus datos y te lo enviamos al instante.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}
        >
          {/* Nombre */}
          <div>
            <label style={labelStyle}>Nombre completo</label>
            <input
              {...register('nombre')}
              placeholder="Tu nombre y apellido"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.background = 'rgba(232,201,106,0.05)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(232,201,106,0.25)'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
            />
            {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>Correo electrónico</label>
            <input
              {...register('email')}
              type="email"
              placeholder="tu@correo.com"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.background = 'rgba(232,201,106,0.05)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(232,201,106,0.25)'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
            />
            {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          </div>

          {/* Teléfono */}
          <div>
            <label style={labelStyle}>Teléfono / WhatsApp</label>
            <div style={{ display: 'flex', gap: '6px' }}>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                style={{
                  ...inputStyle,
                  width: 'auto',
                  flexShrink: 0,
                  padding: '14px 10px',
                  cursor: 'pointer',
                  background: 'rgba(232,201,106,0.08)',
                }}
              >
                {COUNTRY_CODES.map(c => (
                  <option key={c.code} value={c.code} style={{ background: '#111', color: '#fff' }}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                {...register('telefono')}
                type="tel"
                placeholder="555 000 0000"
                style={{ ...inputStyle, flex: 1 }}
                onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.background = 'rgba(232,201,106,0.05)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(232,201,106,0.25)'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
              />
            </div>
            {errors.telefono && <p style={errorStyle}>{errors.telefono.message}</p>}
          </div>

          {/* Consentimiento */}
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <input
                type="checkbox"
                {...register('consentimiento')}
                id="consentimiento-recurso"
                style={{
                  width: '16px',
                  height: '16px',
                  marginTop: '2px',
                  flexShrink: 0,
                  accentColor: 'var(--gold)',
                  cursor: 'pointer',
                }}
              />
              <label
                htmlFor="consentimiento-recurso"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.5,
                  cursor: 'pointer',
                }}
              >
                Acepto recibir comunicaciones de Jazmina Monteiro con el recurso solicitado y contenido relacionado. Puedo darme de baja cuando quiera.
              </label>
            </div>
            {errors.consentimiento && <p style={errorStyle}>{errors.consentimiento.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold cta-pulse"
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '14px',
              marginTop: '4px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'wait' : 'pointer',
            }}
          >
            {isSubmitting ? 'Enviando...' : 'ENVÍAME EL RECURSO →'}
          </button>

          <p style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.25)',
            textAlign: 'center',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.3px',
          }}>
            Sin spam · 100% gratuito
          </p>
        </form>
      </div>
    </main>
  )
}
