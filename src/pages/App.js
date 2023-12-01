// IMPORT useEffect and useRef
import { useState, useEffect } from "react";
import * as usersAPI from "../utilities/users-api";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  // ADD useRef

  // ADD useEffect
  useEffect(() => {
    usersAPI.getUsers().then((result) => {
      setUserData(result);
    });
  }, []);

  return (
    <div>
      <header></header>
      <main>
        <h1>Current Users</h1>
        <article>
          <section>
            <h2 id="countries">Countries</h2>
            <ul aria-labelledby="countries">
              {userData.map((user, index) => {
                return <li key={index}>{user.location.country}</li>;
              })}{" "}
            </ul>
          </section>
          <section>
            <h2 id="profiles">User Profiles</h2>
            <ul aria-labelledby="profiles">
              {userData.map((user, index) => {
                return (
                  <li key={index}>
                    {user.name.first} - {user.location.country}
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
