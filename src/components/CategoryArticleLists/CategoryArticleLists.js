import { useState, useEffect } from 'react'
// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function CategoryListsComponent() {
    const [categories, setCategories] = useState([])
    const [articles, setArticles] = useState({})
    const [catArts, setCatArts] = useState([])
    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch('/api/categories')
            const cats = await response.json()
            const cat = {}
            setCategories(cats)
        }
        fetchCategories()
    }, [])
    useEffect(() => {
        if (categories.length > 0) {
                async function fetchArticles(id){
                const response = await fetch(`/api/categories/articles/${id}`)
                const arts = await response.json()
                if (arts.length > 4){
                    return arts.slice(0, 3) 
                } else {
                    return arts 
                }
            }
            let categoriesMap = new Map()
            // let arts = []
            for (let i = 0; i < categories.length; i++){
                let currentCat = categories[i]
                let fetchedArticles = fetchArticles(currentCat._id)
                console.log (fetchedArticles)
                // arts.push(fetchedArticles)
                categoriesMap.set(currentCat.category, fetchedArticles)
            }
            const cats = Object.fromEntries(categoriesMap)
            Promise.all(Object.values(cats)).then(results => { setArticles(results) })
            // setArticles(cats)
            // Promise.all(arts).then(results => {console.log(results)})
            // setArticles(arts)
        }
    }, [categories])
    useEffect(() => {
        console.log(articles)
    }, [articles])
    function trimText(String) {
        let arr = String.split('')
        let arr2 = arr.slice(0, 65)
        arr2.push('...')
        let arr3 = arr2.join('')
        return arr3.toString()
    }

    return (
        <div>
            {categories.map((category, index) => (
                <div key={category}>
                    <h1>{category.category}</h1>
                    
                </div>
            ))}
        </div>
    )
                    
}

export default CategoryListsComponent