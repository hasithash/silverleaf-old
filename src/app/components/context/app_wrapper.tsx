"use client"
import React, { useState,createContext, useEffect } from 'react'
import {User,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,getAuth, Auth} from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { doc, onSnapshot,getDoc,getDocs } from 'firebase/firestore';
import { stat } from 'fs';
import { auth } from '@/app/firebase/firebase';
type Context = {
    user:User|null|undefined,
};
const defaultValue:Context = {
    user: undefined,
};
export const FirebaseContext = createContext<Context>(defaultValue);
export default function FirebaseWrapper({children}:{children:React.ReactNode}) {
  let[user,setUser] = useState<User|undefined|null>(null);
  const init = async()=>{
   
    onAuthStateChanged(auth,(newUser)=>{
      setUser(newUser); //this new user could as well be null.
    });
    return null;
  }   
  useEffect(()=>{
    init();
  },[])//will only run once
  const state = {
    user:user,
  }; //not a useState so that it changes with each state change
  
  return (
    <FirebaseContext.Provider value={state}>
        {children}
    </FirebaseContext.Provider>
  )
}
