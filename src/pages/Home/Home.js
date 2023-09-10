import { useState, useEffect } from 'react';
import Administrator from '../Administrator/Administrator'
import { getAdmin, checkToken } from '../../utilities/admin-services'

export default function Home() {
	const [token, setToken] = useState('')
	const [admin, setAdmin] = useState(getAdmin())
	useEffect(() => {
		async function sendToken(){ 
			checkedToken = await checkToken()
			if (checkedToken === true) {
				setToken(localStorage.token)
			} else {
				setToken(null)
			}
			console.log(token)
		}
		sendToken()
	}, [admin])
	return(
		<>
			{token === null} ? 
			<div className="HomePage">
				<center>
				<h1>This is the Home page</h1>			
				</center>
			</div>
			:
			<Administrator />
		</>
	) 
}
