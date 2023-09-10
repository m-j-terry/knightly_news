import { useState } from 'react';
import SubmitArticleForm from '../../components/SubmitArticleForm/SubmitArticleForm'
import AddContributorForm from '../../components/AddContributorForm/AddContributorForm'

export default function Administrator(props) {
	return(
		<div className="AdministratorPage">
			<center>
			<h1>This is the Admin page</h1>
				<SubmitArticleForm />
				<AddContributorForm />
			</center>
		</div>
	) 
}