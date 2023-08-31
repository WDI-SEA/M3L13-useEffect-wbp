import { useEffect } from 'react';
import { useState} from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		const getUsers = async() => {
			const data = await usersAPI.getUsers()
			setUserData(data)
		}
		getUsers()
	}, [])

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

export default App;
