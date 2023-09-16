import { useState, useEffect } from 'react';
import styles from './Category.module.scss'
import { useParams } from 'react-router-dom'

export default function Category() {
    const [category, setCategory] = useState('')
    const [articles, setArticles] = useState([])
    const [contributors, setContributors] = useState({})
    let { id } = useParams()

    useEffect(() => {
        async function fetchCategory() {
            const response = await fetch(`/api/categories/${id}`)
			const cat = await response.json()
			setCategory(cat.category)
        }
        fetchCategory()
        async function fetchArticles() {
            const response = await fetch(`/api/categories/articles/${id}`)
			const arts = await response.json()
			setArticles(arts)
        }
        fetchArticles()
    }, [id])

    function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

	return(
		<div className="CategoryPage">
			<center>
			<h1>This is the {category} page</h1>
            {articles.map(({ title, contributor, imageUrl, text }) => (
                <div>
                    <img src={imageUrl} max-width='200vmin'></img>
                    <h2>{title}</h2>
                    <h3>by: {contributor}</h3>
                    <p>{trimText(text)}</p>
                </div>
            ))}
			</center>
		</div>
	) 
}