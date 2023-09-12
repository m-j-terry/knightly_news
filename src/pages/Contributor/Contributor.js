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
			console.log(cont)
			setContributor(cont)
			setArticles(cont.articles)
        }
        fetchContributor()
    }, [id])
	return(
		<div className="ContributorPage">
			<center>
			<h1>{contributor.name}</h1>
            {articles.map(({ title, contributor, imageUrl, text }) => (
                <div>
                    <img src={imageUrl} height='200vmin'></img>
                    <h2>{title}</h2>
                    <h3>by: {contributor}</h3>
                    <p>{trimText(text)}</p>
                </div>
            ))}
			</center>
		</div>
	) 
}