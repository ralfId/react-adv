import { Form, Formik } from 'formik';
import { CustomCheckboxForm, CustomInputForm, CustomSelectForm } from '../components';
import formField from './data/formData.json'
import * as Yup from 'yup';

const initialFormValues: { [key: string]: any } = {};
const fieldsValidations: { [key: string]: any } = {};

for (const field of formField) {
    initialFormValues[field.name] = field.value;

    if(!field.validations) continue;

    let schema = Yup.string();

    for (const validation of field.validations) {
        if(validation.type === 'required'){
            schema =  schema.required(validation.message);
        }

        if(validation.type === 'minLength'){
            schema = schema.min(Number(validation.value), validation.message);
        }

        if(validation.type === 'maxLength'){
            schema = schema.max(Number(validation.value), validation.message);
        }

        if(validation.type === 'isEmail'){
            schema = schema.email(validation.message);
        }

        //Other validations...


    }

    fieldsValidations[field.name] = schema;
}

const validationSchema = Yup.object({...fieldsValidations})

export const DynamicFormikForm = () => {

    return (
        <>
            <div>
                <h2> Dynamic Formik Form </h2>
                <Formik initialValues={initialFormValues} onSubmit={(values) => { console.log(values) }} validationSchema={ validationSchema }>
                    {
                        (formik) => (
                            <Form>
                                <h3>Hola mundo</h3>
                                {
                                    formField.map(({ fieldType, inputType, label, name, placeholder, options }) => {
                                        if (fieldType === 'input' && (inputType === 'text' || inputType === 'email' || inputType === 'password')) {
                                            return <CustomInputForm key={name} label={label} name={name} placeholder={placeholder} type={inputType as any} />
                                        }
                                        if (fieldType === 'checkbox') {
                                            return <CustomCheckboxForm key={name} label={label} name={name} type={inputType as any} />
                                        }

                                        if (fieldType === 'select') {
                                            return <CustomSelectForm label={label} name={name} options={options} />
                                        }

                                        return <h4>The field type:"{fieldType}" is not supported</h4>;
                                    })
                                }
                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </>
    )
}
