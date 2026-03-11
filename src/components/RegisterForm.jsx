import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { registroSchema } from '../utils/validation'

const COUNTRY_CODES = [
  { code: '+1',   label: '🇺🇸 +1'   },
  { code: '+52',  label: '🇲🇽 +52'  },
  { code: '+57',  label: '🇨🇴 +57'  },
  { code: '+58',  label: '🇻🇪 +58'  },
  { code: '+51',  label: '🇵🇪 +51'  },
  { code: '+54',  label: '🇦🇷 +54'  },
  { code: '+55',  label: '🇧🇷 +55'  },
  { code: '+56',  label: '🇨🇱 +56'  },
  { code: '+593', label: '🇪🇨 +593' },
  { code: '+502', label: '🇬🇹 +502' },
  { code: '+503', label: '🇸🇻 +503' },
  { code: '+504', label: '🇭🇳 +504' },
  { code: '+505', label: '🇳🇮 +505' },
  { code: '+506', label: '🇨🇷 +506' },
  { code: '+507', label: '🇵🇦 +507' },
  { code: '+34',  label: '🇪🇸 +34'  },
  { code: '+44',  label: '🇬🇧 +44'  },
]

export default function RegisterForm() {
  const navigate = useNavigate()
  const [countryCode, setCountryCode] = useState('+1')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registroSchema) })

  const onSubmit = async (data) => {
    const payload = {
      name: data.nombre,
      email: data.email,
      phone: `${countryCode}${data.telefono}`,
    }
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/ii90EqqPaxlfzhF7czC1/webhook-trigger/c60e6642-9206-452e-a60e-0eb12a33f4a3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (_) {}
    navigate('/gracias')
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(232,201,106,0.25)',
    color: '#ffffff',
    padding: '14px 16px',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '6px',
  }

  const errorStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    color: '#ff6b6b',
    marginTop: '4px',
  }

  return (
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

      {/* Teléfono con selector de país */}
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
        {isSubmitting ? 'Enviando...' : 'QUIERO MI LUGAR →'}
      </button>

      <p style={{
        fontSize: '11px',
        color: 'var(--white-faint)',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.3px',
      }}>
        ⚡ Cupos limitados · Sin spam · 100% gratuita
      </p>
    </form>
  )
}
