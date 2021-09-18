// import logo from './logo.svg';
import "./App.css";

function App() {
  const friends = [
    { name: "mohsin", age: 22 },
    { name: "abcd", age: 23 },
    { name: "xyz", age: 53 },
  ];

  const books = [
    "python",
    "story book",
    "programming book",
    "math book",
    "JS books",
  ];

  return (
    <div className="App">
      <h6>Similar In Look,Different In Data</h6>
      <div className="player-box">
        <Player name="sakib al hasan" category="all-rounder"></Player>
        <Player name="Tamim Iqbal" category="Batsman"></Player>
        <Player name="Mushfiq" category="Batsman"></Player>
      </div>

      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>

      <h6>Books [Arrays Data [book name]]</h6>
      <div className="books-box">
        <Books books={books[0]}></Books>
        <Books books={books[1]}></Books>
        <Books books={books[2]}></Books>
      </div>

      <h6>Friends [Arrays Object Data]</h6>
      <div className="friends-box">
        <Friends friend={friends[0]}></Friends>
        <Friends friend={friends[1]}></Friends>
        <Friends friend={friends[2]}></Friends>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Player(props) {
  return (
    <div
      style={{
        color: "red",
        backgroundColor: "pink",
        padding: "3px",
        margin: "3px",
      }}
    >
      <h3>Hello I'm Player : {props.name}</h3>
      <h4>Category : {props.category}</h4>
    </div>
  );
}

function Friends(props) {
  const { name, age } = props.friend;
  // console.log(props);
  return (
    <div
      style={{
        color: "black",
        backgroundColor: "orange",
        padding: "3px",
        margin: "3px",
      }}
    >
      <h3>Friend Name : {name} </h3>
      <h4>Friend Age :{age} </h4>
    </div>
  );
}

function Books(props) {
  return (
    <div
      style={{
        color: "black",
        backgroundColor: "cyan",
        padding: "3px",
        margin: "3px",
      }}
    >
      <h3>Book Name : {props.books}</h3>
    </div>
  );
}

export default App;
