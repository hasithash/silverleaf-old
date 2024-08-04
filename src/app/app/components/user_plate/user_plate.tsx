"use client"
import React, { useContext } from 'react'
import styles from './user_plate.module.scss';
import CircleAvatar from '../circle_avatar/circle_avatar';
import { FirebaseContext } from '@/app/components/context/app_wrapper';
import Link from 'next/link';
export default function UserPlate() {
  const context = useContext(FirebaseContext);
  return (
    <Link href={context.user ? '/app/account-settings' : '/auth/log-in'}>
      <div className={`w-[230px] rounded-md flex p-1 flex-row h-full items-center overflow-hidden ${styles.userPlate}`}>
        <CircleAvatar radius={20} image={context.user?.photoURL ?? undefined}/>
        <div className='flex-grow h-full flex flex-col items-start justify-start overflow-hidden'>
          <div className='w-full h-full'>
            <h1 className='font-semibold text-sm overflow-hidden w-full'>{context.user?.email ?? "Not Logged In"}</h1>
            <h1 className='text-sm overflow-hidden w-full'>{context.user ? "Account Settings" : "Log In"}</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}
