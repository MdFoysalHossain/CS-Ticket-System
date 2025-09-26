import { use, } from "react";
import TaskGot from "../TaskGot/TaskGot";
import Resolved from "../Resolved/Resolved";
import { toast } from 'react-toastify';

const TicketDetails = ({promisedTickets,ticketsHas, setTickets, setDefault, getDefault, taskGot, setTaskGot,setResolved, resolved}) => {
    
    let promisedData = use(promisedTickets);

    if(getDefault === true){
        setTickets(promisedData);
        setDefault(false);
    }
    
    
    let storedDetails = ticketsHas;


    return (
        <div className='max-w-[1440px] mx-auto 
            px-5 lg:px-5 xl:px-2 2xl:px-0
        '>
            <h2 className="text-[#34485A] font-semibold text-2xl text-left mb-5">Customer Tickets</h2>
            <div className="flex gap-5
                
                flex-col  xl:flex-row 2xl:flex-row
            ">

                <div className="all-tickets flex-4 grid  gap-5
                
                grid-cols-1 lg:grid-cols-2
                auto-rows-[250px] md:auto-rows-[210px] lg:auto-rows-[220px] 
                "> 
                    {
                        storedDetails.map(item => <AllTicketsStored key={item.id} item={item} taskGot={taskGot} setTaskGot={setTaskGot} ticketsHas={ticketsHas} setTickets={setTickets}></AllTicketsStored>)
                    }
                </div>

                <div className="flex-1 
                -mt-0 xl:-mt-[52px] md:-mt-0 
                
                ">
                    <h2 className="text-[#34485A] font-semibold text-2xl mb-5 text-left">Task Status</h2>
                    <TaskGot setResolved={setResolved} resolved={resolved} ticketsHas={ticketsHas} taskGot={taskGot} setTaskGot={setTaskGot} setTickets={setTickets}></TaskGot>

                    <h2 className="text-[#34485A] font-semibold text-2xl mb-5 text-left">Resolved Task</h2>
                    <Resolved resolved={resolved}></Resolved>
                </div>
            </div>
        </div>
    );
};


function AllTicketsStored ({item, setTaskGot, ticketsHas, setTickets}) {
    const {createdAt, id, customer, description, priority, status, title} = item;


    function gotClicked() {
        if(item.status === "Open"){
        setTaskGot(prev => [...prev, item]);
        updateDetails()
        }
        
    } 

    function updateDetails() {
        let newItems = []

        for(let items of ticketsHas){
            if(items.id !== item.id){
                newItems.push(items)
            }else if(items.id === item.id){
                
                let createObj = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    customer: item.customer,
                    priority: item.priority,
                    status:  "In-Progress",
                    createdAt: item.createdAt,
                }
                
                newItems.push(createObj)
            }
        }
        
        
        setTickets(newItems);

        toast(`Task #${id} has been added`);
    }


    return (
        <div onClick={gotClicked} className="bg-white shadow-sm rounded-xl overflow-hidden p-5 
        
        max-h-[300px] lg:max-h-[220px] 
        
        ">
            <div className="upper flex">
                <h2 className="flex-1 text-left font-inter text-[#001931] text-xl">{title}</h2>
                {
                    status === "Open" ? <span className="bg-green-300 h-[30px] w-[80px] lg:h-[40px] lg:w-[110px] flex justify-center items-center rounded-3xl text-green-800 font-inter text-md lg:text-lg font-semibold"> <div className="h-[15px] w-[15px] lg:h-[20px] lg:w-[20px] inline-block bg-green-600 rounded-2xl mr-2"></div> {status}</span>
                    : status === "In-Progress" ? <span className="bg-yellow-200 h-[30px] w-[130px] lg:h-[40px] lg:w-[160px] flex justify-center items-center rounded-3xl text-yellow-800 font-inter text-md lg:text-lg font-semibold"> <div className="h-[15px] w-[15px] lg:h-[20px] lg:w-[20px] inline-block bg-yellow-400 rounded-2xl mr-2"></div> {status}</span> 
                    : ""
                }
            </div>
            <p className="text-[#627382] text-left text-lg mt-2 line-clamp-2">{description}</p>

            <div className="flex mt-4 
                flex-col xl:flex-row
            
            ">
                <div className="upper flex ">
                    <span className="text-[#566572] mr-2 text-xl">#{id}</span>
                    <p className={`${priority === "MEDIUM PRIORITY" ? "text-yellow-600" : priority === "HIGH PRIORITY"? "text-red-600" : "text-green-400" } text-lg font-semibold`}>{priority}</p>
                </div>
                <div className="upper flex flex-1 
                    justify-start xl:justify-end
                
                ">
                    <span className="text-[#566572] text-right mr-3 text-lg ">{customer}</span>
                    <p className="text-[#627382] text-lg"><i className="fa-regular fa-calendar"></i> {createdAt}</p>
                </div>
            </div>
        </div>
    )
}



export default TicketDetails;