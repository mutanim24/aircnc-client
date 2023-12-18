import React from 'react';

const CategoriesBox = ({label, icon: Icon}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer hover:text-gray-400">
           <Icon className="text-2xl"></Icon> 
           <p className='font-semibold'>{label}</p>
        </div>
    );
};

export default CategoriesBox;