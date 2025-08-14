import React from 'react';

const FiltersBar = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      <select className=" rounded-sm py-3 outline-1 outline-offset-[-1px] outline-neutral-200">
        <option>Select Category</option>
      </select>
      <select className="rounded-sm py-3 outline-1 outline-offset-[-1px] outline-neutral-200">
        <option>Select Price</option>
      </select>
      <select className="rounded-sm py-3 outline-1 outline-offset-[-1px] outline-neutral-200">
        <option>Select Rating</option>
      </select>
     
      <div className="ml-auto">
        <select className="rounded-sm py-3 outline-1 outline-offset-[-1px] outline-neutral-200">
        <option>Sort by Latest</option>
      </select>
       <select className="rounded-sm py-3 outline-1 outline-offset-[-1px] outline-neutral-200">
        <option>Show: 16</option>
      </select>
      </div>
    </div>
  );
};

export default FiltersBar;
