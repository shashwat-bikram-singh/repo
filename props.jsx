function UserCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>User Cards Demo</h1>
      <UserCard name="shashwat" age={19} />
      <UserCard name="john" age={25} />
      <UserCard name="jane" age={23} />
    </div>
  )
}

export default App