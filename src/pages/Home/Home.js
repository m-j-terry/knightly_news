import { useState, useEffect } from 'react';
import Administrator from '../Administrator/Administrator'
import { getAdmin, checkToken } from '../../utilities/admin-services'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle'
import CategoryListsComponent from '../../components/CategoryArticleLists/CategoryArticleLists';

export default function Home() {
	const [token, setToken] = useState('')
	const [admin, setAdmin] = useState(getAdmin())
	// useEffect(() => {
	// 	async function sendToken(){ 
	// 		checkedToken = await checkToken()
	// 		if (checkedToken === true) {
	// 			setToken(localStorage.token)
	// 		} else {
	// 			setToken(null)
	// 		}
	// 		console.log(token)
	// 	}
	// 	sendToken()
	// }, [admin])
	return(
			<div className="HomePage">
				<center>
				<h1>This is the Home page</h1>			
				</center>
				<FeaturedArticle />
				<CategoryListsComponent />
				<ContributorsList />
			</div>
	) 
}
