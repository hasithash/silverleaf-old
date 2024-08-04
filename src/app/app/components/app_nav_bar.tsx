import React from 'react'
import styles from './app_nav_bar.module.scss';
import UserPlate from './user_plate/user_plate';
import { NavLink } from '@/app/components/homepage/foreground/navbar/link';
export default function AppNavBar() {
  return (
    <div className={`w-full h-[70px] flex flex-row items-center justify-between p-1 dark:bg-zinc-900 ${styles.appNavBar}`}>
        <div className='flex flex-row items-center gap-2'>
            <NavLink blackText to='/app'>
                Home
            </NavLink>
            <NavLink blackText to='/app/search'>
                Search
            </NavLink>
            <NavLink blackText to='/app/conversations'>
                Conversations
            </NavLink>
        </div>
        <UserPlate/>
    </div>
  )
}
