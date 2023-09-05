import { useState, useEffect, useRef } from 'react';
import * as usersAPI from '../utilities/users-api';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);
  const countriesRef = useRef([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await usersAPI.getUsers();
      setUserData(data);

      // Generate unique list of countries
      const uniqueCountries = Array.from(new Set(data.map(u => u.location.country)));
      countriesRef.current = uniqueCountries;
    };

    getUsers();
  }, []);

  return (
    <div>
      <header></header>
      <main>
        <h1>Current Users</h1>
        <article>
          <section>
            <h2 id='countries'>Countries</h2>
            <ul aria-labelledby='countries'>
              {countriesRef.current.map((country, index) => (
                <li key={index}>{country}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 id='profiles'>User Profiles</h2>
            <ul aria-labelledby='profiles'>
              {userData.map((user, index) => (
                <li key={index}>
                  {user.name.first} - {user.location.country}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
