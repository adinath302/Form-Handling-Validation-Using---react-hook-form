import React from 'react'
import { useForm } from 'react-hook-form';

const React_hook_form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();  // react hook form is a library for handling forms in react js

    const onsubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex flex-col'>
            <h1>Login Form</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>
                <label htmlFor="">
                    Email -
                    <input
                        type='email'
                        {...register("email", {
                            required: 'Email is requred',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                            }
                        })} placeholder='enter email' />
                    {errors.email && <p className='font-bold text-sm text-pink-300'>{errors.email.message}</p>}
                </label>
                <label htmlFor="">
                    Password -
                    <input
                        type='password'
                        {...register("password", {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} placeholder='enter password' />
                    {errors.password && <p className='font-bold text-sm text-pink-300'>{errors.password.message}</p>}
                </label>
                <button type='submit' className=''>Submit</button>
            </form>
        </div>
    )
}

export default React_hook_form;