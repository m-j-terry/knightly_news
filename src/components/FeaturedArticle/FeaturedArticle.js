import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function FeaturedArticle() {
    const [featuredArticle, setFeaturedArticle] = useState({})
    const [contributor, setContributor] = useState('')
    const [category, setCategory] = useState('')
    const [text, setText] = useState('')

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
                const response = await fetch(`/api/contributors/name/${encodeURIComponent(name)}`)
                const cont = await response.json()
                setContributor(cont)
            }
            fetchContributor(featuredArticle.contributor)
            async function fetchCategory(id){
                const response = await fetch(`/api/categories/${id}`)
                const cat = await response.json()
                setCategory(cat.category)
            }
            fetchCategory(featuredArticle.category)
        }
        if (featuredArticle.text === undefined){
            console.log(featuredArticle.text)
        } else {
            console.log(featuredArticle.text)
            setText(trimText(featuredArticle.text))
        }
    }, [featuredArticle])

    useEffect(() => {
        if (Object.keys(category).length > 0) {
            console.log('category = ' + category.category)
        }
    }, [category])

    useEffect(() => {
        if (Object.keys(contributor).length > 0) {
            console.log(contributor)
        }
    }, [contributor])

    function trimText(string) {
        console.log(string)
        let arr = string.split(' ')
        let arr2 = arr.slice(0, 65)
        arr2.splice(64, 1, `${arr2[64]}...`)
        let arr3 = arr2.join(' ')
        return arr3.toString()
    }

	return(
		<div className="FeaturedArticle">
			<center>
				{featuredArticle === {} ? <h1>Article loading...</h1> : 
					<div className="FeaturedArticleDisplay">
                        <div className='background'>
                            <img src={featuredArticle.imageUrl}></img>
                            </div>
						<div className='display'>
                            <h1 className='articleTitle'>{featuredArticle.title}</h1>
                            <h3 className='articleContributor'>by {featuredArticle.contributor}</h3>
                            <h3 className='articleCategory'>in {category}</h3>
                            <p className='articleText'>{text}</p>
                            <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${featuredArticle._id}`}>Continue Reading...</Link></button>
                        </div>
                        
						
					</div>	
				}	
			</center>
		</div>
	) 
}

export default FeaturedArticle