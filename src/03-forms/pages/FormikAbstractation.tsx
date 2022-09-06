import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    CustomCheckboxForm,
    CustomInputForm,
    CustomSelectForm,
} from '../components';

export const FormikAbstractation = () => {

    return (
        <div >
            <h3>Formik Abstractation</h3>

            <Formik
                initialValues={{
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Terms: false,
                    JobType: '',
                }}

                onSubmit={(values) => {
                    console.log(values);
                }}

                validationSchema={
                    Yup.object({
                        FirstName: Yup.string().required('Filed is required').max(15, 'Must be 15 characters or less'),
                        LastName: Yup.string().required('Filed is required').max(15, 'Must be 15 characters or less'),
                        Email: Yup.string().required('Filed is required').email('Invalid email adddress'),
                        Terms: Yup.boolean().required('Filed is required').isTrue('You must accept the terms and conditions'),
                        JobType: Yup.string().required('Filed is required').notOneOf(['ti-jr'], 'Junior TI is not allowed'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>

                            <CustomInputForm label='First Name' name="FirstName" />
                            <CustomInputForm label='Last Name' name="LastName" />
                            <CustomInputForm label='Email' name="Email" />

                            <CustomSelectForm name="JobType" label="Seelct Job Type">
                                <option value="">Select a job</option>
                                <option value="sr-dev">Senior developer</option>
                                <option value="jr-dev">Jr developer</option>
                                <option value="ti-sr">Senior TI</option>
                                <option value="ti-jr">Jr TI</option>
                                <option value="hr-intern">Human Resources Intern</option>
                            </CustomSelectForm>

                            <CustomCheckboxForm label="Accep termns and conditions" name="Terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}
