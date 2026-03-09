const stats = [
  { num: '200+', label: 'Empresas transformadas' },
  { num: '8 SEM', label: 'Resultados en semanas' },
  { num: '2x', label: 'Promedio de crecimiento' },
  { num: '$0', label: 'Herramientas innecesarias' },
]

export default function Stats() {
  return (
    <div className="stats-grid" style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--gold-border)',
      borderBottom: '1px solid var(--gold-border)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{
          textAlign: 'center',
          padding: '36px 20px',
          borderRight: i < stats.length - 1 ? '1px solid var(--gold-border)' : 'none',
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 800,
            color: 'var(--gold)',
            lineHeight: 1,
          }}>
            {s.num}
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '11px',
            color: 'var(--text-muted)',
            marginTop: '8px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}>
            {s.label}
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
