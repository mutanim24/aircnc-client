import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-10 md:px-20'>
            {children}
        </div>
    );
};

export default Container;