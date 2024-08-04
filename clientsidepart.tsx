'use client'
import { useVoice, VoiceProvider } from '@humeai/voice-react'
import CallInterface from '../talk/[configId]/components/callInterface';
import React, { useEffect } from 'react';

export function ClientSidePart({prompt, accessToken, startingMessage}: {prompt: string, accessToken: string, startingMessage: string}) {
  return (
    <VoiceProvider 
      onMessage={(message) => {
        console.log(message)
      }} 
      auth={{type:'accessToken', value:accessToken}} 
      sessionSettings={{systemPrompt:prompt, type:'session_settings'}}
    >
      <ClientSidePartContent startingMessage={startingMessage} />
    </VoiceProvider>
  )
}

function ClientSidePartContent({startingMessage}: {startingMessage: string}) {
  return <CallInterface startingMessage={startingMessage} />;
}