// IMPORT useEffect and useRef
import { useState, useEffect} from 'react';
import * as usersAPI from '../utilities/users-api'
import './App.css';

function App() {
	const [userData, setUserData] = useState([]);
	const [countries, setCountries] = useState([]);
  // ADD useRef

  // ADD useEffect
  useEffect(()=>{
	async function fetchData(){
	const data = await usersAPI.getUsers()
	console.log(data)
	setUserData(data)
	}
	fetchData()
	
  },[])

  useEffect(()=>{
	setCountries( Array.from(new Set(userData.map(e=>e.location.country))))
  },[userData])

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
			  {countries.map(country=>(<li>{country}</li>))}
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
