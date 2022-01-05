import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import styles from '../../styles/LogIn.module.css'
function Login() {
    const { register, handleSubmit, formState: { errors } , getValues} = useForm();
    async function authenticate(data){
        axios.get(`http://localhost:3001/writers/${data.username}`)
        .then(res=> console.log(res))
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(authenticate)}>
                <label>Username</label>
                <input placeholder="johndoe95" type="text" {...register("username", {required:true})}/>
                <label>Password</label>
                <input type="password" {...register("password", {required:true})}/>
                <button type='submit'>Log in</button>
            </form> 
        </div>
    )
}

export default Login