import { useState, useEffect } from 'react'
// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function ArticlesList({ category }) {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        async function fetchArticles(id){
            const response = await fetch(`/api/categories/articles/${id}`)
            let arts = await response.json()
            if (arts.length > 4){
                arts = arts.slice(0, 3) 
            }
        }
            let fetchedArticles = fetchArticles(category._id)
            Promise.all(fetchedArticles).then(results => { setArticles(results) })
            // fetchArticles(category._id)
            //     .then(results => setArticles(results))
    }, [])
    useEffect(() => {
        if (articles.length > 0) {
            console.log(articles)
        }
    }, [articles])
    function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

    return (
        <div key={category}>
            <h1>{category.category}</h1>
            {articles.map(({ title, imageUrl, text, _id }) => (
                <div>
                    <img src={imageUrl} height='200vmin'></img>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button className='continueReading'><Link className="continueReadingLink" key='Article' to={`/Article/${_id}`}>Continue Reading...</Link></button>
                </div>
            ))} 
        </div>
    )
                    
}

export default ArticlesList