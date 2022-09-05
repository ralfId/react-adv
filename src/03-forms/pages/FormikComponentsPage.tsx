import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

export const FormikComponentsPage = () => {

    return (
        <div >
            <h3>Formik components</h3>

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
                            
                            <label htmlFor="FirstName">First name</label>
                            <Field name="FirstName" type="text" />
                            <ErrorMessage name="FirstName" component="span" />

                            <label htmlFor="LastName">Last name</label>
                            <Field name="LastName" type="text" />
                            <ErrorMessage name="LastName" component="span" />

                            <label htmlFor="email">User Name</label>
                            <Field name="Email" type="text" />
                            <ErrorMessage name="Email" component="span" />

                            <label htmlFor="JobType">User Name</label>
                            <Field name="JobType" as="select">
                                <option value="">Select a job</option>
                                <option value="sr-dev">Senior developer</option>
                                <option value="jr-dev">Jr developer</option>
                                <option value="ti-sr">Senior TI</option>
                                <option value="ti-jr">Jr TI</option>
                                <option value="hr-intern">Human Resources Intern</option>
                            </Field>
                            <ErrorMessage name="JobType" component="span" />

                            <label><Field name="Terms" type="checkbox" /> First name</label>
                            
                            <ErrorMessage name="Terms" component="span" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}
