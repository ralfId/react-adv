import { ChangeEvent, useState } from 'react'

export const useForm = <T>(initialFormState: T) => {

    const [formData, setFormData] = useState(initialFormState);


    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    return { ...formData, FormData, onChange }
}
