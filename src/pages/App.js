// IMPORT useEffect and useRef
import { useState, useEffect, useRef } from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);
  // ADD useRef
	const usersRef = useRef([]);
  // ADD useEffect
	useEffect(function(){
		// usersAPI.getUsers() to update userData state var
		async function getAllUsers() {
			const users = await usersAPI.getUsers();
			usersRef.current = [...new Set(users.map(user => user.name.first))]
			setUserData(users);
			console.log(users)
		}
		getAllUsers();
		// Derive list of countries from state
		// Use .reduce() or .map() + .filter()
		// console.log(users)
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
              {/* RENDER THE LIST OF COUNTRY NAMES */}
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
