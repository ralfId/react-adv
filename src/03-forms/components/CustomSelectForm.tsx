import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    options?: { id: number, label: string }[]; //iterable property to map values i this component
    [x: string]: any;
}

export const CustomSelectForm = ({label, ...props}:Props) => {

    const [ field ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name}>{label}</label>
            <select {...field} {...props} >
                <option key="-1" value="">Select a option</option>
                {
                    props.options?.map((opt) => (<option key={opt.id} value={opt.id}>{opt.label}</option>))
                }
            </select>
            <ErrorMessage name={props.name} component="span"/>

            {/* {
                meta.touched && meta.error && (<span> { meta.error } </span>)
            } */}
        </>
    )
}
