import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { modalSchema } from '../utils/validation'

export default function Modal({ isOpen, onClose }) {
  const [success, setSuccess] = useState(false)
  const overlayRef = useRef(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(modalSchema),
  })

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) { setSuccess(false); reset() }
  }, [isOpen, reset])

  const onSubmit = (data) => {
    console.log('Modal form:', data)
    setSuccess(true)
  }

  if (!isOpen) return null

  const inputStyle = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--gold-border)',
    color: 'var(--text)',
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '6px',
  }

  const errorStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '12px',
    color: '#c0392b',
    marginTop: '4px',
  }

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(26,14,6,0.55)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--gold-border)',
        borderRadius: '8px',
        padding: '48px 44px',
        width: '100%',
        maxWidth: '480px',
        position: 'relative',
        animation: 'fadeUp 0.3s ease both',
        boxShadow: '0 24px 80px rgba(26,14,6,0.14)',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <X size={18} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'var(--gold-soft)',
              border: '1px solid var(--gold-border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '24px',
              color: 'var(--gold)',
            }}>◆</div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '22px',
              marginBottom: '12px',
              color: 'var(--gold)',
            }}>
              ¡Tu mensaje fue enviado!
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Gracias por escribirme. Te contactamos pronto.
            </p>
          </div>
        ) : (
          <>
            {/* Micro badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--gold-soft)',
              border: '1px solid var(--gold-border)',
              color: 'var(--gold)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '100px',
              marginBottom: '20px',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              ◆ PRIMER PASO
            </div>

            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '24px',
              letterSpacing: '-0.5px',
              marginBottom: '8px',
              color: 'var(--text)',
            }}>
              UN PASO PARA EMPEZAR
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              lineHeight: 1.65,
            }}>
              Cuéntame sobre tu negocio y agendamos una llamada estratégica.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input {...register('nombre')} placeholder="Tu nombre" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--gold-border)'}
                />
                {errors.nombre && <p style={errorStyle}>{errors.nombre.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input {...register('email')} type="email" placeholder="tu@email.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--gold-border)'}
                />
                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>WhatsApp</label>
                <input {...register('whatsapp')} placeholder="+1 555 0000" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--gold-border)'}
                />
                {errors.whatsapp && <p style={errorStyle}>{errors.whatsapp.message}</p>}
              </div>
              <div>
                <label style={labelStyle}>
                  Mensaje <span style={{ fontWeight: 400, textTransform: 'none', fontSize: '10px' }}>(opcional)</span>
                </label>
                <textarea {...register('mensaje')} placeholder="Cuéntame brevemente sobre tu proyecto..." rows={3}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--gold-border)'}
                />
              </div>
              <button type="submit" className="cta-pulse" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#FDFAF5',
                background: 'var(--brown-dark)',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '4px',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.target.style.background = 'var(--brown-dark)'; e.target.style.transform = 'translateY(0)' }}
              >
                Enviar mensaje →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
