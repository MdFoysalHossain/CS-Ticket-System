import React from 'react';

const Loader = () => {
    return (
        <div className='max-w-[1440px] h-full mx-auto flex justify-center items-center'>
            <span className="loading loading-infinity loading-xl scale-150 text-black"></span>
        </div>
    );
};

export default Loader;