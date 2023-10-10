import { useState, useEffect } from 'react';
import SubmitArticleForm from '../../components/SubmitArticleForm/SubmitArticleForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'
import Archive from '../../components/Archive/Archive'
import styles from './Administrator.module.scss'
import routes from '../../router/routes'
import { Link } from 'react-router-dom';


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
	function homePage(){
		
	}
	return(
		<div className='admin'>
			{token != null} ?
			<center>
				<h1 className="title" >Knightly News</h1>
				<SubmitArticleForm />
				<Archive />
				<AddContributorForm />
			</center> 
			:
			<button onClick={auth}>test token</button>
		</div>
	) 
}