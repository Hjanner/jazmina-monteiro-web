import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registroSchema } from '../utils/validation'

const desafios = [
  { value: '', label: 'Selecciona tu mayor desafío' },
  { value: 'ventas', label: 'Aumentar ventas y conversiones' },
  { value: 'automatizacion', label: 'Automatizar mis procesos operativos' },
  { value: 'ia', label: 'Implementar IA en mi negocio' },
  { value: 'marca', label: 'Fortalecer mi marca y posicionamiento' },
  { value: 'equipo', label: 'Escalar sin depender de mí' },
]

export default function Registro() {
  const [success, setSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registroSchema),
  })

  const onSubmit = (data) => {
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {})
    }
    setSuccess(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.2)',
    color: 'var(--white)',
    padding: '14px 16px',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '6px',
  }

  const errorStyle = {
    fontSize: '12px',
    color: '#e06060',
    marginTop: '4px',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '72px' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,50px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* LEFT: Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--cyan-soft)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: 'var(--cyan-bright)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '100px',
            alignSelf: 'flex-start',
          }}>
            <span style={{ fontSize: '8px' }}>◆</span> REGISTRO GRATUITO
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.0,
            letterSpacing: '-2px',
          }}>
            EMPIEZA TU{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>TRANSFORMACIÓN</em>{' '}
            HOY
          </h1>

          <p style={{
            fontSize: '16px',
            color: 'var(--muted)',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Accede a la masterclass gratuita donde aprenderás a implementar IA y automatización en tu negocio — sin importar tu nivel técnico.
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Estrategia de IA aplicada a tu industria',
              'Flujos de automatización que puedes copiar',
              'Casos reales de negocios como el tuyo',
              'Sesión de preguntas y respuestas en vivo',
            ].map(item => (
              <li key={item} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '14px',
                color: '#c4a060',
                lineHeight: 1.6,
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'var(--cyan)',
                  flexShrink: 0,
                  marginTop: '1px',
                }}>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Small photo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(201,168,76,0.35)',
              flexShrink: 0,
            }}>
              <img
                src="https://buildflow.isayahagency.com/wp-content/uploads/2026/03/Gemini_Generated_Image_l4rxfkl4rxfkl4rx.png"
                alt="Jazmina Monteiro"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '14px', color: 'var(--white)' }}>
                Jazmina Monteiro
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                Estratega · Consultora de IA
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '4px',
          padding: 'clamp(28px,4vw,44px)',
        }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '28px',
              }}>◆</div>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '24px',
                marginBottom: '12px',
                color: 'var(--cyan-bright)',
              }}>
                ¡Registro completado!
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                Recibirás los detalles de acceso en tu email. ¡Nos vemos en la masterclass!
              </p>
            </div>
          ) : (
            <>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--cyan-soft)',
                border: '1px solid rgba(201,168,76,0.25)',
                color: 'var(--cyan-bright)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '100px',
                marginBottom: '20px',
              }}>
                ◆ 100% GRATUITO
              </div>

              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '-0.5px',
                marginBottom: '28px',
                lineHeight: 1.2,
              }}>
                REGISTRA TU ACCESO GRATUITO
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={labelStyle}>Nombre completo</label>
                  <input {...register('nombre')} placeholder="Tu nombre" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                  {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input {...register('email')} type="email" placeholder="tu@email.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>

                <div>
                  <label style={labelStyle}>WhatsApp</label>
                  <input {...register('whatsapp')} placeholder="+1 555 0000" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                  {errors.whatsapp && <p style={errorStyle}>{errors.whatsapp.message}</p>}
                </div>

                <div>
                  <label style={labelStyle}>¿Cuál es tu mayor desafío?</label>
                  <select {...register('desafio')} style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a84c' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  >
                    {desafios.map(o => (
                      <option key={o.value} value={o.value} style={{ background: 'var(--card)', color: o.value ? 'var(--white)' : 'var(--muted)' }}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.desafio && <p style={errorStyle}>{errors.desafio.message}</p>}
                </div>

                <button type="submit" className="cta-pulse" style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#0a0905',
                  background: 'var(--cyan)',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '6px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cyan-bright)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Quiero mi acceso gratuito →
                </button>

                <p style={{ fontSize: '11px', color: 'rgba(122,110,80,0.7)', textAlign: 'center', lineHeight: 1.5 }}>
                  ◆ 100% gratuita · Sin spam · Sin compromisos
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .registro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
