// import logo from './logo.svg';
import { useEffect, useState } from "react";
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
    'Bangla Book'
  ];

  const cinemas = [
    { name: "3 idiots", hero: "amir khan" },
    { name: "tere naam", hero: "salman khan" },
    { name: "total dhamal", hero: "ritesh" },
    { name: "barfi", hero: 'ranbeer' }
  ];

  return (
    <div className="App">
      <h2 className="section-heading">Similar In Look,Different In Data</h2>
      <div className="player-box">
        <Player name="sakib al hasan" category="all-rounder"></Player>
        <Player name="Tamim Iqbal" category="Batsman"></Player>
        <Player name="Mushfiq" category="Batsman"></Player>
      </div>

      {/* <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul> */}

      <h2 className="section-heading">Books [Arrays Data [book name]]</h2>
      <div className="books-box">

        {books.map(book => <Books book={book}></Books>)}
      </div>





      <h2 className="section-heading">Friends [Arrays Object Data]</h2>
      <div className="friends-box">
        <Friends friend={friends[0]}></Friends>
        <Friends friend={friends[1]}></Friends>
        <Friends friend={friends[2]}></Friends>
      </div>




      <h2 className="section-heading">Cinema dynamic component</h2>
      <div className="cinema-box">
        {cinemas.map(cinema => <Cinema cinema={cinema.name} hero={cinema.hero}></Cinema>)}
      </div>


      <h2 className="section-heading">Counter dynamic component</h2>
      <div className="counter-box">
        <Counter></Counter>
      </div>



      <h2 className="section-heading">External user component</h2>
      <div className="external-user-box">
        <ExternalUser></ExternalUser>
      </div>




      {/* 
      <h2 className="section-heading">Show user Specially component</h2>
      <div className="special-user-box">
        <User></User>
      </div> */}







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
      }}>
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
      }}>
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
      }}>
      <h3>Book Name :{props.book} </h3>
    </div>
  );
}



function Cinema(props) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "blue",
        padding: "3px",
        margin: "3px",
      }}>
      <h3>cinema name : {props.cinema} </h3>
      <h4>hero : {props.hero} </h4>
    </div>
  );
}









// Advanced state component and hooks  

function Counter(props) {
  const [count, setCount] = useState(5)
  console.log(count, setCount);
  const countHandler = () => setCount(count + 1);
  const countHandlerMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };
  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={countHandler} >Click to increase</button>
      <button onClick={countHandlerMinus} >Click to Decrease</button>
    </div>
  )

}





// external user

function ExternalUser() {
  const [users, setUsers] = useState([])
  // useEffect(() => { console.log("inside use effect") }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))

  }, [])

  console.log(users, setUsers);
  return (
    <div className="user-box">
      {users.map(user => <div><User name={user.name} email={user.email}></User></div>)}
      <p>User Length : {users.length}</p>
    </div>
  )
}




function User(props) {

  return (

    <div style={{
      color: "white",
      backgroundColor: "#f2cc8f",
      padding: "3px",
      margin: "3px",
      height: '140px'


    }}>
      <h3>User Name  : {props.name}</h3>
      <h2>User Email  : {props.email}</h2>
    </div>
  )

}

export default App;
