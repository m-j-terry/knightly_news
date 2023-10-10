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
        }
        fetchContributor()
    }, [id])
    useEffect(() => {
        if (Object.keys(contributor).length > 0) {
            console.log(contributor)
            async function fetchArticlesByContributor(name) {
                const response = await fetch(`/api/articles/contributor/${encodeURIComponent(name)}`)
                const arts = await response.json()
                setArticles(arts)
            }
            fetchArticlesByContributor(contributor.name)
        }
    }, [contributor])
    useEffect(() => {
        console.log(articles)
    }, [articles])
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
			<h1  className="sectionHeader">{contributor.name}</h1>
            <div className='articles'>
                {articles === null ? <h2>Articles Loading...</h2> 
                : articles.map(({ title, imageUrl, text, _id }) => (
                    <div className='articleThumbnail'>
                        <img className='articleImage' src={imageUrl} height='200vmin'></img>
                        <h2 className='articleTitle'>{title}</h2>
                        <p className='articleText'>{trimArticleText(text)}</p>
                        <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
                    </div>
                ))} 
                </div>
			</center>
		</div>
	) 
}