import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function FeaturedArticle() {
    const [featuredArticle, setFeaturedArticle] = useState({})
    const [contributor, setContributor] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        async function fetchFeaturedArticle() {
            const response = await fetch(`/api/articles/show/featured`)
			const art = await response.json()
			setFeaturedArticle(art)
        }
		fetchFeaturedArticle()
    }, [])
	useEffect(() => {
        if (Object.keys(featuredArticle).length > 0) {
            async function fetchContributor(name){
                const response = await fetch(`/api/contributor/${encodeURIComponent(name)}`)
                const cont = await response.json()
                setContributor(cont)
            }
            fetchContributor(featuredArticle.contributor)
            async function fetchCategory(){
                const response = await fetch(`/api/categories/${featuredArticle.category}`)
                const cat = await response.json()
                setCategory(cat.category)
            }
            fetchCategory()
        }
    }, [featuredArticle])

    useEffect(() => {
        if (Object.keys(category).length > 0) {
            console.log(category)
        }
    }, [category])

    useEffect(() => {
        if (Object.keys(contributor).length > 0) {
            console.log(contributor)
        }
    }, [contributor])

    function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

	return(
		<div className="FeaturedArticle">
			<center>
            <h1 className='heading'>Featured Article</h1>
				{featuredArticle === {} ? <h1>Article loading...</h1> : 
					<div className="FeaturedArticleDisplay">
                        <div className='left'>
                            <img src={featuredArticle.imageUrl} width="400rem" ></img>
                            </div>
						<div className='right'>
                            <h1 className='articleTitle'>{featuredArticle.title}</h1>
                            <h3 className='articleContributor'>by {featuredArticle.contributor}</h3>
                            <h3 className='articleCategory'>in {category.category}</h3>
                            <p className='articleText'>{featuredArticle.text}</p>
                            <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${featuredArticle._id}`}>Continue Reading...</Link></button>
                        </div>
                        
						
					</div>	
				}	
			</center>
		</div>
	) 
}

export default FeaturedArticle