import { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import { submit } from '../../utilities/imageUpload'
import { submitPdf } from '../../utilities/imageUpload'

// create a model for archive
// create a controller function in admin for handling .create()
// create a route at '/api/admin/pdf' for sending the submission along to the controller


function Archive() {
    const [file, setFile] = useState(null)

    const [values, setValues] = useState({
        title: '',
        pdfUrl: ''
        
    })

    const inputs = [
        {
            id: "edition-title",
            name: "title",
            type: "text",
            placeholder: "Add name of edition here",
            errorMessage: "Ask Mr. Terry",
            label: "Title: ",
            required: true,
        },
        {
            id: "img-url",
            name: "imgUrl",
            type: "text",
            placeholder: "Paste published img url here",
            errorMessage: "Ask Mr. Terry",
            label: "url: ",
            required: true,
        },
        {
            id: "pdf-url",
            name: "pdfUrl",
            type: "text",
            placeholder: "Paste published url here",
            errorMessage: "Ask Mr. Terry",
            label: "url: ",
            required: true,
        }
    ]

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }) 
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let formData = new FormData()
        console.log('values = ' + values)
        formData.append('file', file)
        for (let key in values) {
            formData.append(key, values[key])
        }
        const data = await submitPdf(formData)
        console.log(data.data)
        const newEdition = data.data
        alert(`${newEdition.title} has been submitted!`)
    }
    return(
        <div>
            <h1 className="header">Archive Submissions</h1>
            <form  autoComplete="off" onSubmit={handleSubmit}>
                {inputs.map(input => <FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />)}
                <button formMethod='dialog'>Submit</button>
            </form>
        </div>
    )
}

export default Archive