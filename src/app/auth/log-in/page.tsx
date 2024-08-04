"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Button from '../../components/general/button/button';
import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../firebase/firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FirebaseContext } from '../../components/context/app_wrapper';
type LogInInput = {
  email: string,
  password: string,
}
export default function SignIn() {
  const context = useContext(FirebaseContext);
  const {register,formState: {errors},watch,handleSubmit} = useForm<LogInInput>();
  const [error,setError] = useState("");
  const router = useRouter();
  const toScroll = useRef<HTMLDivElement | null>(null);
  const onSubmit: SubmitHandler<LogInInput> = async(data)=>{
    try{
      await signInWithEmailAndPassword(
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
    <form className='flex flex-col w-full h-full flex-grow items-center justify-center' onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
              <div className='w-[350px] p-2 rounded-[20px] gap-3 border border-black dark:border-[rgba(255,255,255,0.1)]
              flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>Sign In</h1>
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
                <Link href={'/sign-up'}>Don't have an account? Sign up instead</Link>
                <span className='text-error text-center'>
                  {error}
                </span>
                <div className='flex flex-col flex-grow justify-center'>
                <input type='submit' className='hidden' id='submitButton'/>
                <label htmlFor='submitButton'>
                  <Button fill text='Log In'/>
                </label>
            </div>
          </div>
      </form>
  )
}
