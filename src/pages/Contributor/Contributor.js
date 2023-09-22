import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';



export default function Contributor() {
	const [contributor, setContributor] = useState('')
    const [articles, setArticles] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        async function fetchContributor() {
            const response = await fetch(`/api/contributors/${id}`)
			const cont = await response.json()
			setContributor(cont)
            async function expand(id){
                return await fetch(`api/articles/${id}`)
            }
            let expanded = cont.articles.map(article => expand(article) /*need to fetch for each article id and */ )
			setArticles(expanded)
        }
        fetchContributor()
    }, [id])
console.log(contributor)
console.log(articles)
    function trimArticleText(text) {
        console.log(text)
        let arr = text?.split('')
        let arr2 = arr?.slice(0, 65)
        arr2?.push('...')
        let arr3 = arr2?.join('')
        return arr3?.toString()
    }

	return(
		<div className="ContributorPage">
			<center>
			<h1>{contributor.name}</h1>
            {articles === null ? <h2>Articles Loading...</h2> 
            : articles.map(({ title, imageUrl, text, _id }) => (
                <div>
                    <img src={imageUrl} height='200vmin'></img>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
                </div>
            ))} 
            
			</center>
		</div>
	) 
}