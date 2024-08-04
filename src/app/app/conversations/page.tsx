import React from 'react'
import { Info } from '../components/icons/icons'
import AiModel from './components/ai_model'

export default async function Conversations() {
  const models = await fetch(process.env.URL+'/app/models.json', { cache: 'no-store' });
  const modelsJson = await models.json() as {id:number,name:string,emoji:string,category:string,prompt:string,description:string,image_url:string|null,tags:string[],starting_message:string}[];
  console.log("Fetched models:", JSON.stringify(modelsJson, null, 2));
  
  return (
    <div className='w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>Select a simulation</h1>
          <button className='text-blue-500 hover:text-blue-600 transition-colors duration-300'>My Account &gt;</button>
        </div>
        
        <div className='mb-8'>
          <input 
            type="text" 
            placeholder="Search simulations" 
            className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
          />
        </div>

        <h2 className='text-2xl font-bold text-gray-500 dark:text-white mb-4'>Featured</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-8'>A curated list of frequently picked use cases</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {modelsJson.map((model) => {
            console.log("Mapping model:", JSON.stringify(model, null, 2));
            return (
              <AiModel 
                key={model.id}
                name={model.name} 
                emoji={model.emoji || '🔄'}
                category={model.category || 'Uncategorized'}
                id={model.id}
                description={model.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}