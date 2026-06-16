function Button({ label, onClick, variant = 'primary' }) {
  const styles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }

  return (
    <button style={styles[variant]} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
