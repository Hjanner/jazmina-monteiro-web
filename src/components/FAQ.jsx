import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito conocimientos técnicos para implementar IA en mi negocio?',
    a: 'No. Mi método está diseñado para empresarios y equipos sin perfil técnico. Te guío paso a paso en cada implementación, usando herramientas sin código cuando es posible y explicando todo en lenguaje de negocio.',
  },
  {
    q: '¿En cuánto tiempo veo resultados?',
    a: 'La mayoría de mis clientes ven los primeros resultados medibles entre las semanas 3 y 5. Para la semana 8, el sistema completo está operativo y generando impacto real en métricas de ventas, tiempo o costos operativos.',
  },
  {
    q: '¿Qué tipo de negocios pueden trabajar contigo?',
    a: 'Trabajo con emprendedores, consultores, agencias, SaaS y empresas de servicios. Si tienes un negocio con al menos 6 meses de operación y clientes reales, podemos encontrar palancas de crecimiento rápidas.',
  },
  {
    q: '¿Cuál es la inversión para trabajar juntos?',
    a: 'Cada proyecto es diferente porque cada negocio tiene necesidades distintas. Agenda una llamada estratégica gratuita y en 30 minutos te doy una evaluación honesta de lo que necesitas y lo que costaría construirlo.',
  },
  {
    q: '¿Qué diferencia a Rebuild Pro™ de otros programas de IA?',
    a: 'No enseñamos IA genérica. Construimos sistemas específicos para tu modelo de negocio, tu etapa de crecimiento y tus recursos. Implementamos contigo — no solo te damos acceso a un curso.',
  },
  {
    q: '¿Puedo trabajar contigo si estoy fuera de Latinoamérica?',
    a: 'Sí, trabajo con clientes en toda América Latina, España y Estados Unidos. Todo el trabajo es remoto, con sesiones por video y seguimiento continuo por canales digitales.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const answerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight)
    }
  }, [a])

  return (
    <div style={{
      borderBottom: '1px solid var(--gold-border)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '20px',
        }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '15px',
          color: 'var(--text)',
          lineHeight: 1.45,
        }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          color="var(--gold)"
          style={{
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div style={{
        overflow: 'hidden',
        maxHeight: open ? `${height}px` : '0px',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.4s ease, opacity 0.3s ease',
      }}>
        <div ref={answerRef} style={{
          paddingBottom: '24px',
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.78,
          fontWeight: 400,
        }}>
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
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
        Preguntas frecuentes
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
        Resolvemos tus <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>dudas</em>
      </h2>

      <div style={{ maxWidth: '800px' }}>
        {faqs.map(item => (
          <FAQItem key={item.q} {...item} />
        ))}
      </div>
    </section>
  )
}
