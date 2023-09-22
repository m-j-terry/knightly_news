import { useState, useEffect } from 'react'

function FeaturedArticle() {
    const [featuredArticle, setFeaturedArticle] = useState({})
    const [contributor, setContributor] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        async function fetchFeaturedArticle() {
            const response = await fetch(`/api/articles/featured`)
			const art = await response.json()
			setFeaturedArticle(art)
        }
		fetchFeaturedArticle()
        async function fetchCategory(){
            const response = await fetch(`/api/categories/${featuredArticle.category}`)
            const cat = await response.json()
            setCategory(cat.category)
        }
    }, [])
	useEffect(() => {
		console.log('contributor = ' + contributor)
		contributor.name === featuredArticle.contributor ? console.log('true') : console.log('false')
    }, [contributor])
	useEffect(() => {
		async function fetchContributor(name){
			const response = await fetch(`/api/contributor/${name}`)
			const cont = await response.json()
			setContributor(cont)
		}
        fetchContributor()
    }, [featuredArticle])

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
				{featuredArticle === {} ? <h1>Article loading...</h1> : 
					
					<div className="FeaturedArticleDisplay">
						{console.log(featuredArticle)}	
                        {console.log(contributor)}
						
					</div>	
				}	
			</center>
		</div>
	) 
}

export default FeaturedArticle