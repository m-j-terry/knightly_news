import { useState } from "react"
import styles from './FormInput.module.scss'

export default function FormInput(props) {
    const [isBlur, setIsBlur] = useState(false)
    const { label, errorMessage, handleInputChange, id, ...inputProps } = props

    const handleInputBlur = (e) => {
        setIsBlur(true)
    }
    if (id === "submission-text") {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <textarea 
                    id={id}
                    cols="40"
                    rows="5"
                    wrap="hard"
                    {...inputProps}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    blurred={isBlur.toString()}
                    onFocus={() => inputProps.name === 'confirm' && setIsBlur(true)}
                    >
                    </textarea>
            </div>
        )
    }else {
        return (
            <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...inputProps}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                blurred={isBlur.toString()}
                onFocus={() => inputProps.name === 'confirm' && setIsBlur(true)}
            />
            </div>
        )
    }
}