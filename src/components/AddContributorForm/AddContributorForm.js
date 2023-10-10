    import { useEffect, useRef, useState } from 'react'
    import styles from './AddContributorForm.module.scss'
    import FormInput from '../FormInput/FormInput'
    import { createContributor } from '../../utilities/admin-services'

function AddContributorForm() {
        const [categories, setCategories] = useState([])
        const [values, setValues] = useState({
            "name": ""
        })
    
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
                id: "submission-contributor",
                name: "name",
                type: "name",
                placeholder: "john joe",
                errorMessage: "Ask Mr. Terry!",
                label: "Contributor Name: ",
                required: true,
            }
        
        ]
        
        const handleInputChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value })
        }
        
        const handleSubmit = async (e) => {
            e.preventDefault()
            const formData = { ...values }
            console.log(formData)
            delete formData.confirm
            console.log(formData)
            const contributor = await createContributor(formData)
            alert(`${contributor.name} has been added`)
        }
        
        return (
            <div className="ContributorForm">
                <h1 className="header">Add Contributor</h1>
                <form autoComplete="off" onSubmit={handleSubmit} >
                    {inputs.map(input => <FormInput key={input.id} {...input} value={values[input.contributor]} handleInputChange={handleInputChange} />)}
                    <button formMethod='dialog'>Submit</button>
                </form>
            </div>
        )
    }

export default AddContributorForm
