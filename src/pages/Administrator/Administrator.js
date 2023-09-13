import { useState, useEffect } from 'react';
import SubmitArticleForm from '../../components/SubmitArticleForm/SubmitArticleForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'
import styles from './Administrator.module.scss'

export default function Administrator(props) {
	const [token, setToken] = useState('')
	const [storage, setStorage] = useState([])
	useEffect(() => {
		const element = document.querySelector("nav");
		element.classList.add('closed')
	}, [])
	function auth() {
		const localToken = localStorage.getItem('token')
		if (localToken === null || localToken === undefined){
			alert('invalid token')
		} else  {
			setToken(localToken)
		}
	}
	return(
		<div className='admin'>
			{token != null} ?
			<center>
				<h1 className="title">Knightly News</h1>
				<SubmitArticleForm />
				<AddContributorForm />
			</center> 
			:
			<button onClick={auth}>test token</button>
		</div>
	) 
}