function Welcome() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to React</h1>
      <p>This is a simple welcome component</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  )
}

export default App