import React, { ReactNode } from "react";
import { SlideIn } from "@/app/components/general/slideIn/slideIn";

export const PillarCard:React.FC<{icon:ReactNode,title:string,body:string,animId:string,delay?:number}> = (props)=>{
    return (
        <SlideIn delay={props.delay} animateId={props.animId}>
            <div className="w-[250px] h-[250px] rounded-lg bg-[rgb(15,17,31)] shadow-lg flex flex-col items-center p-2">
                <span className="text-6xl text-white">
                    {props.icon}
                </span>
                <div className="h-16 flex flex-col justify-center items-center">
                    <h1 className="font-extrabold h-fit text-2xl text-center">{props.title.toUpperCase()}</h1>
                </div>
                <p className="text-center">{props.body}</p>
            </div>
        </SlideIn>
    );
}