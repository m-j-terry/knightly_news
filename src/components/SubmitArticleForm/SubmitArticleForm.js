import { useEffect, useRef, useState } from 'react'
import styles from './SubmitArticle.module.scss'
import FormInput from '../FormInput/FormInput'

function SubmitArticleForm() {
    const [categories, setCategories] = useState([])
    const [values, setValues] = useState({})

    useEffect(() => {
		async function fetchCategories(){
			const response = await fetch('/api/categories')
			const cats = await response.json()
			console.log(cats)
			setCategories(cats)
		}
		fetchCategories()
	}, [])     

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
    }
    
    const handleImageChange = (e) => {
        e.preventDefault()
        console.log(e.target.files)
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            setValues({ ...values, file: reader.result })
        }
        reader.readAsDataURL(file)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = { ...values }
        console.log(formData)
        delete formData.confirm

    }
    
    return (
        <div className="SubmissionForm">
            <h1 className="header">Article Submissions</h1>
            <form onSubmit={handleSubmit} >
                <FormInput {...imageInputProps} handleInputChange={handleImageChange} />
                <label for="categories">Choose a category:</label>
                <select id="categories" name="categories">
                    {categories.map(({ category, _id }) => (
                        <option value={ _id }>{ category }</option>
                    ))}
                </select>
                {inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
                <button formMethod='dialog'>Submit</button>
            </form>
        </div>
    )
}

export default SubmitArticleForm