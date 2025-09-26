import React from 'react';
import PregressBack from "../../assets/vector1.png"

const Progress = ({taskGot, resolved}) => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-5 my-16'>

                <div className="single-div relative  flex-1 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-xl
                    mx-2 h-[300px]
                    md:h-[200px]
                
                ">
                    <div className="bgleft h-full w-1/2 bg-no-repeat absolute" style={{ backgroundImage: `url(${PregressBack})` }}></div>
                    <div className="bgleft h-full w-1/2 bg-no-repeat absolute right-[0px] scale-x-[-1]" style={{ backgroundImage: `url(${PregressBack})` }}></div>

                    <div className="details font-inter text-2xl h-full w-full flex flex-col gap-2 justify-center items-center 
                    my-10 md:my-14 lg:my-0 xl:my-0 ">
                        <p className='text-xl'>In-Progress</p>
                        <h2 className='text-6xl font-semibold font-sora'>{taskGot.length}</h2>
                    </div>
                </div>

                <div className="single-div relative  flex-1 bg-gradient-to-br from-[#54CF68] to-[#01827A] rounded-xl
                    mx-2 h-[300px]
                    md:h-[200px]
                    sm:h-[300px]
                ">
                    <div className="bgleft h-full w-1/2 bg-no-repeat absolute" style={{ backgroundImage: `url(${PregressBack})` }}></div>
                    <div className="bgleft h-full w-1/2 bg-no-repeat absolute right-[0px] scale-x-[-1]" style={{ backgroundImage: `url(${PregressBack})` }}></div>

                    <div className="details font-inter text-2xl h-full w-full flex flex-col gap-2 justify-center items-center 
                    my-10 md:my-14 lg:my-0 xl:my-0 
                    
                    ">
                        <p className='text-xl'>Resolved</p>
                        <h2 className='text-6xl font-semibold font-sora'>{resolved.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;