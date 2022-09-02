import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import '../styles/styles.css';
export const RegisterPage = () => {

const { user_name, email, password,  repeat_password, onChange, FormData } = useForm({
	user_name: '',
	email: '',
	password: '',
	repeat_password: '',
});

    const onSubmit = (ev: FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        console.log(FormData);
    }

    return (
        <div>
            <h3>Register page</h3>
            <form onSubmit={onSubmit}>
                <input name="user_name" placeholder="user name" value={user_name} onChange={onChange} />
                <input name="email" placeholder="email" value={email} onChange={onChange} />
                <input name="password" placeholder="password" value={password} onChange={onChange} />
                <input name="repeat_password" placeholder="repeat password" value={repeat_password} onChange={onChange} />
                <button type="submit">Register</button>
            </form>
        </div>
		
    )
}
