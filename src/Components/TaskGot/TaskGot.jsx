import React from 'react';
import { toast } from 'react-toastify';

const TaskGot = ({taskGot, setTaskGot, ticketsHas, setTickets, resolved, setResolved}) => {
    if(taskGot.length === 0){
        return(
            <div className='flex-1 w-[320px] md:w-[350px]'>
                <p className='text-left text-gray-400 font-inter mb-[50px]'>Select a ticket to add to Task Status</p>

            </div>
        )
    }
    return (
        <div className='flex-1 w-[320px] md:w-[350px] '>
            {
                taskGot.map(item => <SingleTask resolved={resolved} setResolved={setResolved} taskGot={taskGot} setTaskGot={setTaskGot} ticketsHas={ticketsHas} key={item.id} item={item} setTickets={setTickets}> </SingleTask>)
            }
        </div>
    );
};

function SingleTask({item, ticketsHas, setTickets, setTaskGot, taskGot, setResolved}){
    const {title} = item;
    const {id} = item;
    
    function buttonClicked(){

        let newArr = taskGot.filter(itemData => itemData.id !== item.id)
        setTaskGot(newArr)
        
        let allNewTickets = ticketsHas.filter(itemData => itemData.id !== item.id)
        setTickets(allNewTickets)

        setResolved(prev => [...prev, item]);

        toast(`Task #${id} has been completed`);

    }

            return(
            <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
                <h2 className='text-black mb-2 text-md font-inter text-left'>{title}</h2>
                <button onClick={buttonClicked} className='btn bg-green-600 border-none shadow-none text-white font-inter text-lg w-full'>Complete</button>
            </div>
        )

    
}



export default TaskGot;


