import  { useState, useEffect } from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {

const [users, setUser] = useState([]);
const [allusers, setAllUser] = useState([]);

useEffect(() => {
  (async () => {
    let userData;
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      userData = await response.json();
    } catch (error){
      console.log(error);
      userData = [];
    }

    setAllUser(userData);
    setUser(userData);
  })();
}, []);

const filtercards = event => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = allusers.filter(
    user => (`${user.name}`
    .toLowerCase()
    .includes(value)
    )
  );

  setUser(filteredUsers);
};

  return (
    <div className="App">
      <h1>User Social Info</h1>

        <input className='search' placeholder='Search...' onInput={filtercards}/>

      <div className='card-container'>

        {users.map((user, index) => (
          <UserProfile userData={user} key={index}/>
        ))};
      </div>
    </div>
  );
};

export default App;
