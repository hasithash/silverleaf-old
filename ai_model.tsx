import React from 'react'
import Link from 'next/link'

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'professional': return 'bg-blue-200 text-blue-800';
    case 'fun': return 'bg-green-200 text-green-800';
    case 'health': return 'bg-red-200 text-red-800';
    default: return 'bg-gray-300 text-gray-800';
  }
}

export default function AiModel({emoji, name, category, id, description}: {emoji: string, name: string, category: string, id: number, description: string}) {
  const categoryColor = getCategoryColor(category);

  return (
    <Link href={`/app/conversations/talk/${id}`} className='block'>
      <div className='w-[400px] min-h-[200px] bg-gray-200 rounded-lg p-6 flex flex-col cursor-pointer hover:shadow-md transition-shadow duration-300'>
        <div className='flex items-center mb-2'>
          <span className='text-2xl mr-3'>{emoji || '🔄'}</span>
          <h2 className='text-2xl font-bold text-gray-800'>{name}</h2>
        </div>
        <p className='text-gray-600 mb-2 flex-grow'>{description}</p>
        <div>
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${categoryColor}`}>
            {category || 'Uncategorized'}
          </span>
        </div>
      </div>
    </Link>
  )
}