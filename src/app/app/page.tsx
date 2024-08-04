import React, { useState } from 'react'
import { VoiceProvider } from '@humeai/voice-react';
import { getHumeAccessToken } from '@/utils/get_hume_access_token';
import { CallButton } from './conversations/talk/[configId]/components/call_button';
import Thumbnails from './components/thumbnails';

export default async function App() {
  const accessToken = await getHumeAccessToken();
  if(!accessToken){
    throw new Error("Error getting api key.");
  }
  return (
    <div className='w-full h-full'>
      <VoiceProvider auth={{type:"accessToken",value:accessToken}}>
        <div className='w-full h-full flex flex-col p-2 items-center'>
          <h1 className='text-5xl font-bold'>
            SilverLeaf
          </h1>
          <Thumbnails/>
        </div>
      
      </VoiceProvider>
    </div>  
  );
}
