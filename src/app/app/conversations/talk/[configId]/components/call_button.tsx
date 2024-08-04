"use client"
import { PhoneFill } from "@/app/app/components/icons/icons";
import { useVoice } from "@humeai/voice-react";
import { useRef } from "react";

export const CallButton = ({onClick}:{onClick:()=>void})=>{
    return (
        <>
        <div onClick={onClick} className="p-4 w-fit transition-all hover:cursor-pointer hover:scale-105 active:scale-95 rounded-md bg-black dark:bg-white flex flex-row items-center justify-center">
            <i className="ph-phone-fill text-white dark:text-black ph-lg m-1"></i>
            <h1 className="font-bold text-white dark:text-black">Start Call</h1>
        </div></>
    )
}