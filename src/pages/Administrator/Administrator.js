import { useState, useEffect } from 'react';
import SubmitArticleForm from '../../components/SubmitArticleForm/SubmitArticleForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'
import styles from './Administrator.module.scss'

export default function Administrator(props) {
	useEffect(() => {
		const element = document.querySelector("nav");
		console.log(element)
		element.classList.add('closed')
	}, [])
	return(
		<div className='admin'>
			<center>
				<SubmitArticleForm />
				<AddContributorForm />
			</center>
		</div>
	) 
}