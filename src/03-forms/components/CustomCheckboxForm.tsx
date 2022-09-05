import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const CustomCheckboxForm = ({ label, ...props }: Props) => {

    const [field ] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span"/>
            {/* {
                meta.touched && meta.error && (<span> {meta.error} </span>)
            } */}
        </>
    )
}
