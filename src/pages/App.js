// IMPORT useEffect and useRef
import { useState, useEffect, useRef } from 'react'
import * as usersAPI from '../utilities/users-api'
import './App.css'

function App() {
	const [userData, setUserData] = useState([])
	const [activeCountries, setActiveCountries] = useState('')

  // ADD useRef
	const countriesRef = useRef([])

  // ADD useEffect
	useEffect(
		function() {
			async function getUsers() {
				const randomUsers = await usersAPI.getUsers()
				countriesRef.current = [...new Set(randomUsers.map(user => user.location.country))].sort()
				setUserData(randomUsers)
				setActiveCountries(countriesRef.current[0])
				//console.log(randomUsers)
			}
			getUsers()
		}, []
	)

	return (
		<div>
			<header></header>
			<main>
				<h1>Current Users</h1>
				<article>
					<section>
						<h2 id='countries'>Countries</h2>
						<ul aria-labelledby='countries'>
              {
								countriesRef.current.map((country, index) => {
									return(
										<li key={index}>
											{country}
										</li>
									)
								})
							}
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
