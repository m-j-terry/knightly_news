import { useEffect, useRef, useState } from 'react'
import styles from './SubmitArticle.module.scss'
import FormInput from '../FormInput/FormInput'
import { submit } from '../../utilities/imageUpload'
import { useNavigate } from 'react-router-dom'

// import { submit } from '../../utilities/admin-api'

function SubmitArticleForm() {
    const [categories, setCategories] = useState([])
    const [contributors, setContributors] = useState([])
    const [file, setFile] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedContributor, setSelectedContributor] = useState('')
    const [selectedContributor2, setSelectedContributor2] = useState('')
    const [selectedFeature, setSelectedFeature] = useState('')
    const [values, setValues] = useState({
        title: '',
        contributor: '',
        contributor2: '',
        category: '',
        featured: '',
        text: '',
        file: ''
    })


    useEffect(() => {
		async function fetchCategories(){
			const response = await fetch('/api/categories')
			const cats = await response.json()
			console.log(cats)
			setCategories(cats)
		}
		fetchCategories()
        async function fetchContributors() {
            const response = await fetch('/api/contributors')
            const conts = await response.json()
            console.log(conts)
            setContributors(conts)
        }
        fetchContributors()
	}, [])   
    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory])  

    useEffect(() => {
        console.log(selectedContributor)
    }, [selectedContributor])
    useEffect(() => {
        console.log(selectedFeature)
    }, [selectedFeature])
    const inputs = [
        {
            id: "submission-title",
            name: "title",
            type: "text",
            placeholder: "Add title here",
            errorMessage: "Ask Mr. Terry",
            label: "Title: ",
            required: true,
        },
        {
            id: "submission-text",
            name: "text",
            type: "text",
            placeholder: "Add submission text here",
            errorMessage: "Ask Mr. Terry",
            label: "Text: ",
        },
    ]
    
    const imageInputProps = {
        id: "upload-image",
        name: "file",
        type: "file",
        accept: ".png, .jpg, .jpeg, .pdf",
        errorMessage:
        "File type must be .png, .jpeg, .jpg, or .pdf",
        label: "Article Image:"
    }
    
    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }) 
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        setValues({ ...values, [event.target.name]: event.target.value }) 
        setSelectedCategory(event.target.value)
    }

    const handleContributorChange = (event) => {
        console.log(event.target.value)
        setValues({ ...values, [event.target.name]: event.target.value }) 
        setSelectedContributor(event.target.value)
    }

    const handleContributor2Change = (event) => {
        console.log(event.target.value)
        setValues({ ...values, [event.target.name]: event.target.value }) 
        setSelectedContributor2(event.target.value)
    }

    const handleFeatureChange = (event) => {
        console.log(event.target.value)
        // setValues({ ...values, [event.target.name]: event.target.value }) 
        // // setSelectedFeature(event.target.value)
        // setSelectedFeature(event.target.value === 'true')
        const isFeatured = event.target.value === 'true'; // Convert to boolean
        setValues({ ...values, featured: isFeatured }); // Update "featured" in values
        setSelectedFeature(isFeatured)
    }

    const handleImageChange = (e) => {
        e.preventDefault()
        console.log(e.target.files)
        let reader = new FileReader()
        let thisFile = e.target.files[0]
        reader.onloadend = () => {
            setFile(thisFile)
        }
        reader.readAsDataURL(thisFile)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let formData = new FormData()
        console.log('values = ' + values)
        formData.append('file', file)
        for (let key in values) {
            formData.append(key, values[key])
        }
        console.log('formData = ' + formData)
        const data = await submit(formData)
        console.log(data.data)
        const newArticle = data.data
        alert(`${newArticle.title} has been submitted!`)
        // navigate(`/Article/${newArticle._id}`)
    }
    
    return (
        <div className="SubmissionForm">
            <h1 className="header">Article Submissions</h1>
            <form  autoComplete="off" onSubmit={handleSubmit}>
                <FormInput {...imageInputProps} handleInputChange={handleImageChange} />
                <div>
                    <label for="categories">Category:</label>
                    <select id="category-select" name="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value=''>Select a category</option>
                        {categories.map(({ category, _id }) => (
                            <option key="category-select" value={ _id }>{ category }</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="contributors">Contributor:</label>
                    <select id="contributor-select" name="contributor" value={selectedContributor.name} onChange={handleContributorChange}>
                        <option value=''>Select a contributor</option>
                        {contributors.map(({ name, _id }) => (
                            <option key="contributor-select" value={ name }>{ name }</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="contributor2">Contributor:</label>
                    <select id="contributor2-select" name="contributor2" value={selectedContributor2.name} onChange={handleContributor2Change}>
                        <option value=''>Select a contributor</option>
                        {contributors.map(({ name, _id }) => (
                            <option key="contributor2-select" value={ name }>{ name }</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="featured">Featured:</label>
                    <select id="featured-select" name="featured" value={selectedFeature} onChange={handleFeatureChange}>
                        <option value=''>Select True or False</option>
                        <option key="featured-select" value={ false }>false</option>
                        <option key="featured-select" value={ true }>true</option>
                    </select>
                </div>
                {inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
                <button formMethod='dialog'>Submit</button>
            </form>
        </div>
    )
}

export default SubmitArticleForm