import { Form, Formik } from "formik";
import * as Yup from 'yup';
import '../styles/styles.css';
import { CustomInputForm } from "../components";


export const RegisterFormikPage = () => {


    return (
        <div>
            <h3>Register Formik Form</h3>

            <Formik initialValues={{ userName: '', email: '', password: '', repeat_Password: '' }}
                onSubmit={(values) => { console.log(values); }}
                validationSchema={
                    Yup.object({
                        userName: Yup.string().required('Username is required').min(2, 'must be 2 characters or more').max(15, 'Must be 15 characters or less'),
                        email: Yup.string().required('Email is required').email('Invalid email address'),
                        password: Yup.string().required('Password is required').min(6, 'must be 6 characters or more').max(15, 'Must be 15 characters or less'),
                        repeat_Password: Yup.string().required('Password is required').min(6, 'must be 6 characters or more').max(15, 'Must be 15 characters or less').equals([Yup.ref('password')], 'Password must match'),
                    })
                }
            >
                {
                    (formik) => (

                        <Form>
                            <CustomInputForm label="User name" name="userName" type="text" />
                            <CustomInputForm label="Email" name="email" type="email" />
                            <CustomInputForm label="Password" name="password" type="password" />
                            <CustomInputForm label="Repeat Password" name="repeat_Password" type="password" />

                            <button type="submit">Submit</button>
                            <button type="button" onClick={formik.handleReset}>Reset</button>
                        </Form>

                    )

                }
            </Formik>
        </div>

    )
}
