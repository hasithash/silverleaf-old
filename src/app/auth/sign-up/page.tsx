"use client"
import React, { useContext, useState } from 'react'
import { FirebaseContext} from '../../components/context/app_wrapper'
import { auth } from '../../firebase/firebase';
import { AuthError, createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import Button from '../../components/general/button/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import Scrollbars from 'react-custom-scrollbars';
import RenderIfClient from '../../components/general/renderIfClient';

type SignUpInput = {
  email: string,
  password: string,
}

export default function SignUp() {
  const context = useContext(FirebaseContext);
  const [errorMessage,setErrorMessage] = useState("");
  const {register,formState: {errors},watch,handleSubmit} = useForm<SignUpInput>();
  const [error,setError] = useState("");
  const router = useRouter();
  const onSubmit: SubmitHandler<SignUpInput> = async(data)=>{
    try{
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      router.push('/app');
    }
    catch (e) {
      const err = e as AuthError;
      setError(err.message);
    }
  };
  return (
          <form className='flex-grow w-full h-full flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
            <div className='w-[350px] p-2 rounded-[20px] gap-3 border border-black dark:border-[rgba(255,255,255,0.1)]
            flex flex-col items-center'>
              <h1 className='text-2xl font-bold'>Sign Up</h1>
              <input required type='email' {...register("email",{validate:(val)=>{
                      return (val).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?.length ? true : "Invalid Email"
                    }
                  }
                )
              } placeholder='Email' className='input input-bordered w-full'/>
              <span className='text-error'>
                {errors.email && errors.email.message}
              </span>
              <input required type='password' {...register("password",{minLength:{value:6,message:'Password must be at least 6 characters long.'}})} placeholder='Password'
              className='input input-bordered w-full'/>
              <span className='text-error'>
                {errors.password && errors.password.message}
              </span>
              <Link href={'/log-in'}>Already have an account? Log in instead</Link>
              <span className='text-error text-center'>
                {error}
              </span>
              <div className='flex flex-col flex-grow justify-center'>
                <input type='submit' className='hidden' id='submitButton'/>
                <label htmlFor='submitButton'>
                  <Button fill text='Sign In'/>
                </label>
                
              </div>
            </div>
          </form>
  )
}
