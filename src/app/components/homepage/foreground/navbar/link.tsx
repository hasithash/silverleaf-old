import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from './link.module.scss'
export const NavLink:React.FC<{children:ReactNode,to:string,fill?:boolean,blackText?:boolean}> = ({children,to,fill,blackText})=>{
    return (
    <Link href={to} className={`text-[18px] transition-all active:brightness-95 ${blackText ? 'text-black dark:text-white' : 'text-white'} m-3 p-3 ${fill ? styles.link : ''}`}>
        {children}
    </Link>
  )
}
