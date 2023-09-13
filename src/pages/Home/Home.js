import { useState, useEffect } from 'react';
import Administrator from '../Administrator/Administrator'
import { getAdmin, checkToken } from '../../utilities/admin-services'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle'
import CategoryListsComponent from '../../components/CategoryArticleLists/CategoryArticleLists';

export default function Home() {	
	return(
			<div className="HomePage">
				<center>
				</center>
				<FeaturedArticle />
				<CategoryListsComponent />
				<ContributorsList />
			</div>
	) 
}
