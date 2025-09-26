import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Progress from './Components/Progress/Progress'
import TicketDetails from './Components/TicketDetails/TicketDetails'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'
import { ToastContainer } from 'react-toastify';

const ticketPromise = async() => {
    const res = await fetch("/tickets.json");
    return res.json()
}

const promisedTickets = ticketPromise()

function App() {

  let [ticketsHas, setTickets] = useState([]);
  let [getDefault, setDefault] = useState(true);
  let [taskGot, setTaskGot] = useState([])
  let [resolved, setResolved] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Progress taskGot={taskGot} resolved={resolved} setResolved={setResolved}></Progress>
      <Suspense fallback={<Loader></Loader>}>

        <TicketDetails 
            ticketsHas={ticketsHas} 
            setTickets={setTickets} 

            getDefault={getDefault} 
            setDefault={setDefault} 

            promisedTickets={promisedTickets}

            taskGot={taskGot}
            setTaskGot={setTaskGot}

            resolved={resolved}
            setResolved={setResolved}
        ></TicketDetails>

        <Footer></Footer>
        

        

        
        
      </Suspense>
      
      <ToastContainer/> 
    </>
  )
}

export default App
