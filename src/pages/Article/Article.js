import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

export default function Article() {
	const [category, setCategory] = useState('')
    const [article, setArticle] = useState({})
	const [articles, setCategoryArticles] = useState([])
    const [contributor, setContributor] = useState({})
	const [contributorArticles, setContributorArticles] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function fetchArticle() {
            const response = await fetch(`/api/articles/${id}`)
			const art = await response.json()
			setArticle(art)
        }
		fetchArticle()
    }, [id])

	useEffect(() => {
		if (Object.keys(article).length > 0) {
			async function fetchContributor(name){
				console.log('article.name = ' + encodeURIComponent(name))
				const response = await fetch(`/api/contributors/name/${encodeURIComponent(name)}`)
				const cont = await response.json()
				setContributor(cont)
			}
			fetchContributor(article.contributor)
			async function fetchCategory(id) {
				const response = await fetch(`/api/categories/${id}`)
				const cat = await response.json()
				setCategory(cat.category)
			}
			fetchCategory(article.category)
		}
	}, [article])

	useEffect(() => {
		if (Object.keys(article).length > 0) {
			async function fetchArticlesByCategory(id){
				const response = await fetch(`/api/categories/articles/${id}`)
				const arts = await response.json()
				// const articleIndex = arts.indexOf(article)
				// const artsAbbreviated = arts.splice(articleIndex, 0)
				// const artsAbbr = artsAbbreviated.slice(0, 3)
				// console.log(artsAbbr)
				// setCategoryArticles(artsAbbr)
				setCategoryArticles(arts)
				/* 1. create a route and controller function for finding articless by category. 2. inside of the div for article, add another div (so that it is in the same column, and have it extract the contributor's articles. 3. fetch the articles by category, display them in the aside. 4. set parent div display to flex and row */ 
			}
			fetchArticlesByCategory(article.category)
		}
	}, [category])

	useEffect(() => {
        if (Object.keys(contributor).length > 0) {
            console.log(contributor)
            async function fetchArticlesByContributor(name) {
                const response = await fetch(`/api/articles/contributor/${encodeURIComponent(name)}`)
                const arts = await response.json()
                setContributorArticles(arts)
            }
            fetchArticlesByContributor(article.contributor)
        }
    }, [contributor])

	useEffect(() => {
		if (contributorArticles.length > 0) {
			console.log(contributorArticles)
		}
	}, [contributorArticles])	

	function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }


	return(
		<div className="ArticlePage">
			<center> 
					<div className="columns">
						<div className="articleDisplay">
							<h1 className="articleTitle">{article.title}</h1>
							<h2 className="articleContributor">by {article.contributor}</h2>
							<h2 className="articleCategory">in {category}</h2>
							<img className="articleImage" src={article.imageUrl}></img>
							<p className="articleText">{article.text}</p>
							<div className="articlesBy"> 
								<h1>More by {article.contributor}...</h1>
								{contributorArticles.map(({title, imageUrl, text, _id }) => (
									<div className='articleThumbnail'>
										<img className="articleImage" src={imageUrl}></img>
										<h1 className="articleTitle">{title}</h1>
										<p className="articleText">{trimText(text)}</p>
										<button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
									</div>
								))}
							</div>
						</div>	
						<div className="aside">
							<h2 className="banner">More from {category}</h2>
							{articles.map( (article) => (
								<div className='articleThumbnail'>
									<img className='articleImage' src={article.imageUrl} max-width='15%'></img>
									<h2 className='articleTitle'>{article.title}</h2>
									<h3 className='articleContributor'>by {article.contributor}</h3>
									<h4 className='articleText'>{trimText(article.text)}</h4>
								</div>
							))}
						</div>
					</div>
			</center>
		</div>
	) 
}