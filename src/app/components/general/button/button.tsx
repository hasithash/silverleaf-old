import React from 'react';
import './buttonStyles.scss';
export default function Button(props:{text:string,fill?:boolean,onTap?:()=>void}) {
  return (
    <div className={`rounded-md button ${props.fill ? 'fill' : 'hollow'}`} onClick={props.onTap}>
      {props.text}
    </div>
  )
}
