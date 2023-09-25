import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function ArticlesList({ category }) {
    const [categoryArticles, setCategoryArticles] = useState([])

    useEffect(() => {
        async function fetchArticlesByCategory(id){
            const response = await fetch(`/api/categories/articles/${id}`)
            let arts = await response.json()
            if (arts.length > 5){
                arts = arts.slice(0, 4) 
            }
            // const articleIndex = arts.indexOf(article)
            // const artsAbbreviated = arts.splice(articleIndex, 0)
            // const artsAbbr = artsAbbreviated.slice(0, 3)
            // console.log(artsAbbr)
            // setCategoryArticles(artsAbbr)
            setCategoryArticles(arts)
            /* 1. create a route and controller function for finding articless by category. 2. inside of the div for article, add another div (so that it is in the same column, and have it extract the contributor's articles. 3. fetch the articles by category, display them in the aside. 4. set parent div display to flex and row */ 
        }
        fetchArticlesByCategory(category._id)
	}, [category])
    // useEffect(() => {
    //     async function fetchArticles(id){
    //         const response = await fetch(`/api/categories/articles/${id}`)
    //         let arts = await response.json()
    //         if (arts.length > 4){
    //             arts = arts.slice(0, 3) 
    //         }
    //     }
    //         let fetchedArticles = fetchArticles(category._id)
    //         Promise.all(fetchedArticles).then(results => { setArticles(results) })
    //         // fetchArticles(category._id)
    //         //     .then(results => setArticles(results))
    // }, [])

    useEffect(() => {
        if (categoryArticles.length > 0) {
            console.log(categoryArticles)
        }
    }, [categoryArticles])

    function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

    return (
        <div className='category' key={category}>
            <h1 className='categoryHeader'>{category.category}</h1>
            {categoryArticles.map(({ title, imageUrl, contributor, text, _id }) => (
                <div className='articleThumbnail'>
                    <img className='articleImage' src={imageUrl}></img>
                    <h2 className='articleTitle '>{title}</h2>
                    <h2 className='articleContributor'>by {contributor}</h2>
                    <p className='articleText'>{trimText(text)}</p>
                    <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
                </div>
            ))} 
        </div>
    )
                    
}

export default ArticlesList