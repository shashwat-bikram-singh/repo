function UserCard(props) {
    return (
        <div>
            Name: {props.name}
            <br />
            Age: {props.age}
        </div>
    );
}
function App() {
    return (


        <UserCard name="shashwat" age={19} />);
}
export default App;