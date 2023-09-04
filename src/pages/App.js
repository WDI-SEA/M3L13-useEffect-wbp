// IMPORT useEffect and useRef
import { useState, useEffect, useRef} from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);
	// ADD useRef

	// ADD useEffect

	useEffect(() => {
		// Fetch data when component mounts
		const data = usersAPI
			.getUsers()
			.then((data) => {
				setUserData(data)
				console.log(data)
			})
			.catch((error) => {
				console.error("An error occurred while fetching data:", error);
			});
		// console.log(data)
	}, []); // Empty dependency array means this useEffect runs once when the component mounts

	const uniqueCountries = Array.from(new Set(userData.map(user => user.location.country)));

	return (
		<div>
			<header></header>
			<main>
				<h1>Current Users</h1>
				<article>
					<section>
						<h2 id="countries">Countries</h2>
						<ul aria-labelledby="countries">
							{uniqueCountries.map((country, index) => {
								return (
									<li key={index}>{country}</li>
								)
							})}
						</ul>
					</section>
					<section>
						<h2 id="profiles">User Profiles</h2>
						<ul aria-labelledby="profiles">
							{userData.map((user, index) => {
								return (
									<li key={index}>
										{user.name.first} -{" "}
										{user.location.country}
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
