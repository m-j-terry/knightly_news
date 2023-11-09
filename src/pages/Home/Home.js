import { useState, useEffect } from 'react';
import Administrator from '../Administrator/Administrator'
import { getAdmin, checkToken } from '../../utilities/admin-services'
import ContributorsList from '../../components/ContributorsList/ContributorsList'
import FeaturedArticle from '../../components/FeaturedArticle/FeaturedArticle'
import CategoryListsComponent from '../../components/CategoryArticleLists/CategoryArticleLists';
import HotOffThePress from '../../components/HotOffThePress/HotOffThePress';

export default function Home() {
	const [contributor, setContributor] = useState('')	
	const [color, setColor] = useState('')
	const homePage = document.querySelector('.HomePage')
	window.addEventListener('scroll', () => {
		if (window.scrollY >= 4750){
			console.log('white')
			setColor('white')
		} else if (window.scrollY <= 2750){
			console.log('white')
			setColor('white')
		} else if (window.scrollY > 2750 && window.scrollY < 4750){
			console.log('blue')
			setColor('blue')
		} 
	})
	// useEffect(() => {
	// 	color === 'blue' ? console.log(color) : console.log(color)
	// }, [color])
	return(
			<div className="HomePage">
				<FeaturedArticle />
				<center>
				<CategoryListsComponent />
				<HotOffThePress color={color}/>
				<ContributorsList />

				</center>
			</div>
	) 
}
