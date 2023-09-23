import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Article() {
	const [category, setCategory] = useState('')
    const [article, setArticle] = useState({})
	const [articles, setArticles] = useState([])
    const [contributor, setContributor] = useState('')
	const [contributorArticles, setContributorArticles] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function fetchArticle() {
            const response = await fetch(`/api/articles/${id}`)
			const art = await response.json()
			setArticle(art)
        }
		fetchArticle()
    }, [])

	useEffect(() => {
		if (Object.keys(article).length > 0) {
			async function fetchContributor(name){
				const response = await fetch(`/api/contributor/${name}`)
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

			async function fetchArticlesByCategory(category){
				const response = await fetch(`/api/categories/articles/${category}`)
				const arts = await response.json()
				const articleIndex = arts.indexOf(article)
				const artsAbbreviated = arts.splice(articleIndex, 0)
				const artsAbbr = artsAbbreviated.slice(0, 3)
				console.log(artsAbbr)
				setArticles(artsAbbr)
				/* 1. create a route and controller function for finding articless by category. 2. inside of the div for article, add another div (so that it is in the same column, and have it extract the contributor's articles. 3. fetch the articles by category, display them in the aside. 4. set parent div display to flex and row */ 
			}
			fetchArticlesByCategory(article.category)
		}
	}, [article])

	useEffect(() => {
		if (Object.keys(contributor).length > 0) {
			async function fetchContributorArticle(id){
				const response = await fetch(`/api/articles/${id}`)
				const art = await response.json()
				console.log(art)
				setContributorArticles([...contributorArticles, art])
			}
			contributor.articles.forEach( article => fetchContributorArticle(article))
		}
	}, [contributor])

	useEffect(() => {
		if (contributorArticles.length > 0) {
			console.log(contributorArticles)
		}
	}, [contributorArticles])
	useEffect(() => {
		if (Object.keys(contributor).length > 0) {
			console.log('contributor = ' + contributor)
			contributor.name === article.contributor ? console.log('true') : console.log('false')
		}
	}, [contributor])	


	return(
		<div className="ArticlePage">
			<center>
				{article === {} ? <h1>Article loading...</h1> : 
					<div className="columns">
						<div className="articleDisplay">
							<h1 className="articleTitle">{article.title}</h1>
							<h2 className="articleContributor">by {article.contributor}</h2>
							<h2 className="articleCategory">in {category}</h2>
							<img className="articleImage" src={article.imageUrl}></img>
							<p className="articleText">{article.text}</p>
							<div className="articlesBy"> 
								<h1>More by {article.contributor}...</h1>
								{contributorArticles.map(({title, imageUrl, text, _id }) => {
									<div>
										<img className="articleImage" src={imageUrl}></img>
										<h1 className="articleTitle">{title}</h1>
										<p className="articleText">{text}</p>
										<button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
									</div>
								})}
							</div>
						</div>	
						<div className="aside">
							<h2 className="banner">More from {category}</h2>
							{articles.map( (article) => {
								<div>
									<img src={article.imageUrl}></img>
									<h2>{article.title}</h2>
									<h3>by {article.contributor}</h3>
									<h4>{trimText(article.text)}</h4>
								</div>
							})}
						</div>
					</div>	
				}	
			</center>
		</div>
	) 
}