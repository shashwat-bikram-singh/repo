function Card({ title, content, footer }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginBottom: '16px'
    }}>
      {title && (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderBottom: '1px solid #ddd'
        }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
      )}
      <div style={{ padding: '16px' }}>
        {content}
      </div>
      {footer && (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '12px 16px',
          borderTop: '1px solid #ddd',
          textAlign: 'right'
        }}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card
