import { useState, useEffect } from 'react'
import ArticlesList from '../ArticlesList/ArticlesList'
// 1. fetch articles by category use a map to complete the next steps. For each category:
// 2. Create a splice of the the articles by category from index 0-4
// 3. Each of the articles should display using similar styling to the Category display.
function CategoryListsComponent() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch('/api/categories')
            const cats = await response.json()
            setCategories(cats)
        }
        fetchCategories()
    }, [])

    return (
        <div>
            {categories.map((category) => (
                <div>
                    <ArticlesList category={category}/>
                    
                </div>
            ))}
        </div>
    )
                    
}

export default CategoryListsComponent