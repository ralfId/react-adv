import { FormikErrors, useFormik } from 'formik';

interface FormValues{
    FirstName: string;
    LastName: string;
    Email: string;
}

export const FormikBasicPage = () => {
  
    const validate = (values: FormValues)=>{
        const errors: FormikErrors<FormValues> = {};

        if(!values.FirstName){
            errors.FirstName = 'Required';
        }else  if(values.FirstName.length > 15){
            errors.FirstName = 'Must be 15 characters or less';
        }

        if(!values.LastName){
            errors.LastName = 'Required';
        }else  if(values.LastName.length > 15){
            errors.LastName = 'Must be 15 characters or less';
        }

        if (!values.Email) {
            errors.Email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
            errors.Email = 'Invalid email address';
          }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            Email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });




    return (
        <div >
            <h3>Formik Basic Page</h3>
            <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="FirstName">First name</label>
                <input name="FirstName" placeholder="First Name" type="text" onChange={formik.handleChange} value={formik.values.FirstName} onBlur={formik.handleBlur}/>
                {formik.touched.FirstName && formik.errors.FirstName && <span>{formik.errors.FirstName}</span>}

                <label htmlFor="LastName">Last name</label>
                <input name="LastName" placeholder="Last Name" type="text" onChange={formik.handleChange} value={formik.values.LastName} onBlur={formik.handleBlur}/>
                {formik.touched.LastName && formik.errors.LastName && <span>{formik.errors.LastName}</span>}

                <label htmlFor="email">User Name</label>
                <input name="Email" placeholder="email" type="email" onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.handleBlur}/>
                {formik.touched.Email && formik.errors.Email && <span>{formik.errors.Email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
