import { useState, useEffect } from 'react';
import Administrator from '../Administrator/Administrator'
import { getAdmin, checkToken } from '../../utilities/admin-services'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle'
import CategoryListsComponent from '../../components/CategoryArticleLists/CategoryArticleLists';
import HotOffThePress from '../../components/HotOffThePress/HotOffThePress';

export default function Home() {
	const [contributor, setContributor] = useState('')	
	return(
			<div className="HomePage">
				<center>
				
				<FeaturedArticle />
				<CategoryListsComponent />
				<HotOffThePress />
				<ContributorsList />

				</center>
			</div>
	) 
}
