// components/Tag.js
import React from 'react';

export const Tag = ({ text } : {text:string}) => {
  return (
    <div className="bg-blue-900 text-white rounded-full px-2 py-1 text-xs inline-block">
      {text}
    </div>
  );
};

export default Tag;