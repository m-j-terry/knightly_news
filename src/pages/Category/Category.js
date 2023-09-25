import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            console.log('arts = ' + arts)
			setArticles(arts)
        }
        fetchArticles()
    }, [id])

    useEffect(() => {
        console.log('category = ' + category)
    }, [category])

    useEffect(() => {
        console.log('articles = ' + articles)
    }, [articles])

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
			<h1  className="sectionHeader">This is the {category} page</h1>
            <div className='list'>
                {articles.map(({ title, contributor, imageUrl, text, _id }) => (
                    <div className='listItem'>
                        <img src={imageUrl} max-width='15%'></img>
                        <h2 className='articleTitle'>{title}</h2>
                        <h3>by: {contributor}</h3>
                        <p>{trimText(text)}</p>
                        <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
                    </div>
                ))}
            </div>
			</center>
		</div>
	) 
}