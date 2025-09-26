import React from 'react';

const Resolved = ({resolved}) => {

    if(resolved.length === 0){
        return(
            <div className='flex-1 w-[320px] md:w-[350px]'>
                <p className='text-left text-gray-400 font-inter mb-[50px]'>No resolved task yet.</p>

            </div>
        )
    }
    return (
        <div className='flex flex-col gap-3'>
            {
                resolved.map(item => <SingleResolved key={item.id} item={item}></SingleResolved>)
            }
        </div>
    );
};

function SingleResolved({item}) {
    return(
        <div className='bg-gray-200 text-black font-inter text-left p-4 shadow-sm rounded-sm'>
            <h3>{item.title}</h3>
        </div>
    )
}

export default Resolved;