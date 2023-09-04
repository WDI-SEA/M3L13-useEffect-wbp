// IMPORT useEffect and useRef
import { useState, useEffect, useRef} from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

export default function App() {
	const [userData, setUserData] = useState([]);
  // ADD useRef

  // ADD useEffect
  useEffect(function() {
	async function getUsers() {
		const data = await usersAPI.getUsers();
		setUserData(data)
	}
	getUsers() 
  }, []);

	const countries = userData.map(u => u.location.country).filter((country, i, self) => self.indexOf(country) === i)


	return (
		<div>
			<header></header>
			<main>
				<h1>Current Users</h1>
				<article>
					<section>
						<h2 id='countries'>Countries</h2>
						<ul aria-labelledby='countries'>
              {/* RENDER THE LIST OF COUNTRY NAMES */}
			  						{ countries.map(country => <li key={country}> { country } </li>) }

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


