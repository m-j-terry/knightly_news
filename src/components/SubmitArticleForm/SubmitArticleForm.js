import { useEffect, useRef, useState } from 'react'
import styles from './SubmitArticle.module.scss'
import FormInput from '../FormInput/FormInput'
import { submit } from '../../utilities/imageUpload'
import { useNavigate } from 'react-router-dom'

// import { submit } from '../../utilities/admin-api'

function SubmitArticleForm() {
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('');
    const [photoUrl, setPhotoUrl] = useState('')
    const [values, setValues] = useState({
        title: '',
        contributor: '',
        category: '',
        text: '',
        file: ''
    })
    const navigate = useNavigate()


    useEffect(() => {
		async function fetchCategories(){
			const response = await fetch('/api/categories')
			const cats = await response.json()
			console.log(cats)
			setCategories(cats)
		}
		fetchCategories()
	}, [])   
    useEffect(() => {
        console.log(selectedCategory)
    }, [selectedCategory])  

    const inputs = [
        {
            id: "submission-title",
            name: "title",
            type: "text",
            placeholder: "Add title here",
            errorMessage: "Ask Mr. Terry",
            label: "Title: ",
            pattern: "^[A-Za-z0-9]+$",
            required: true,
        },
        {
            id: "submission-contributor",
            name: "contributor",
            type: "name",
            placeholder: "john joe",
            errorMessage: "Ask Mr. Terry!",
            label: "by: ",
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
        accept: ".png, .jpg, .jpeg",
        errorMessage:
        "File type must be .png, .jpeg, or .jpg",
        label: "Article Image:"
    }
    
    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }) 
        handleCategoryChange(e)
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value)
        setSelectedCategory(event.target.value)
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
        formData.append('category', selectedCategory)
        for (let key in values) {
            formData.append(key, values[key])
        }
        console.log('formData = ' + formData)
        const data = await submit(formData)
        console.log(data)
        const newArticle = data.data
        alert(`${newArticle.title} has been submitted!`)
        // navigate(`/Article/${newArticle._id}`)
    }
    
    return (
        <div className="SubmissionForm">
            <h1 className="header">Article Submissions</h1>
            <form  autoComplete="off" onSubmit={handleSubmit}>
                <FormInput {...imageInputProps} handleInputChange={handleImageChange} />
                <label for="categories">Choose a category:</label>
                <select id="category-select" name="categories" value={selectedCategory} onChange={handleInputChange}>
                    {categories.map(({ category, _id }) => (
                        <option key="category-select" value={ _id }>{ category }</option>
                    ))}
                </select>
                {inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
                <button formMethod='dialog'>Submit</button>
            </form>
        </div>
    )
}

export default SubmitArticleForm