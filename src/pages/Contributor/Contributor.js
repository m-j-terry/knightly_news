import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


export default function Contributor() {
	const [contributor, setContributor] = useState('')
    const [articles, setArticles] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function fetchContributor() {
            const response = await fetch(`/api/contributors/${id}`)
			const cont = await response.json()
			setContributor(cont)
			setArticles(cont.articles)
        }
        fetchContributor()
    }, [id])

    function trimText(text) {
        let arr = text.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

	return(
		<div className="ContributorPage">
			<center>
			<h1>{contributor.name}</h1>
            {articles.map(({ title, imageUrl, text }) => (
                <div>
                    <img src={imageUrl} height='200vmin'></img>
                    <h2>{title}</h2>
                    <p>{trimText(text)}</p>
                </div>
            ))}
			</center>
		</div>
	) 
}