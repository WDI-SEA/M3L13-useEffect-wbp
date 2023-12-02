// IMPORT useEffect and useRef
import { useState, useEffect, useRef } from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);
  // ADD useRef
	const countries = useRef([]);
  // ADD useEffect
	useEffect(function() {
		async function getUser() {
		const userInfo = await usersAPI.getUsers();
		setUserData(userInfo);
		countries.current = [...new Set(userInfo.map(u => u.location.country).fillter((country, i, self) => self.indexOf(country) === i))];
		}
		getUser();
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
        					{countries.current.map((c) => {
							<li key={c} >
								c
							</li>})}
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
