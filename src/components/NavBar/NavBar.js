import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import styles from './NavBar.module.scss'
import routes from '../../router/routes'

function NavBar() {
	const [categories, setCategories] = useState([])
	const Category = routes[3]
	useEffect(() => {
		async function fetchCategories(){
			const response = await fetch('/api/categories')
			const cats = await response.json()
			setCategories(cats)
		}
		fetchCategories()
	}, []) 
	return (
		<>
		<nav className="Nav">
			<Link className="Home" key='Home' to='/'> Knightly News </Link>	
			{categories.map(({ category,  _id }) => (
				<Link className="categories" key={Category.key} to={`/Category/${_id}`}>
					{category}
				</Link>
			))}
		</nav>
		</>
	);
};

export default NavBar;
