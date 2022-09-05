import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYUPPage = () => {

    const formik = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            Email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            FirstName: Yup.string().required('Filed is required').max(15, 'Must be 15 characters or less'),
            LastName: Yup.string().required('Filed is required').max(15, 'Must be 15 characters or less'),
            Email: Yup.string().required('Filed is required').email('Invalid email adddress'),
        })

    });




    return (
        <div >
            <h3>Formik YUP Page</h3>
            <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="FirstName">First name</label>
                <input placeholder="First Name" type="text" {...formik.getFieldProps('FirstName')}/>
                {formik.touched.FirstName && formik.errors.FirstName && <span>{formik.errors.FirstName}</span>}

                <label htmlFor="LastName">Last name</label>
                <input placeholder="Last Name" type="text" {...formik.getFieldProps('LastName')}/>
                {formik.touched.LastName && formik.errors.LastName && <span>{formik.errors.LastName}</span>}

                <label htmlFor="email">User Name</label>
                <input placeholder="email" type="email"  {...formik.getFieldProps('Email')}/>
                {formik.touched.Email && formik.errors.Email && <span>{formik.errors.Email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
