"use client"
import React, { useState } from 'react'
import Thumbnail from './thumbnail/thumbnail'

export default function Thumbnails() {
const [hoveredThumbnail,setHoveredThumbnail] = useState<string|undefined>(undefined);
  return (
    <div className='flex flex-row w-full justify-center'>
          <Thumbnail 
            image='/app/create.png' 
            hoveredId={hoveredThumbnail} 
            id='1' 
            setHoveredThumbnail={setHoveredThumbnail} 
            href='/app/conversations/create' 
            title='Create a Model'/>
          <Thumbnail 
            image='/app/talk.jpg' 
            hoveredId={hoveredThumbnail} 
            id='2' 
            setHoveredThumbnail={setHoveredThumbnail} 
            href='/app/conversations' 
            title='Talk Now'/>
            <Thumbnail
            image='/app/previous-conversations.jpg' 
            hoveredId={hoveredThumbnail} 
            id='3' 
            setHoveredThumbnail={setHoveredThumbnail} 
            href='/app/conversations/previous-conversations' 
            title='Previous Conversations'/>
          <Thumbnail 
            image='/app/explore.jpg' 
            hoveredId={hoveredThumbnail} 
            id='4' 
            setHoveredThumbnail={setHoveredThumbnail} 
            href='/app/conversations/search' 
            title='Explore Models'/>
    </div>
  )
}
