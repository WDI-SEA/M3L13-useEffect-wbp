import { useState, useEffect, useRef} from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);

  const countriesRef = useRef([])

  useEffect(function(){
    async function getUsers() {
      const user = await usersAPI.getUsers();
      countriesRef.current = [...new Set(user.map(user => user.country))];
      setUserData(user)
    }
    getUsers();
  }, [])
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
                <li key = {index}>{country}</li>
              ))}
						</ul>
					</section>
					<section>
						<h2 id='profiles'>User Profiles</h2>
						<ul aria-labelledby='profiles'>
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
