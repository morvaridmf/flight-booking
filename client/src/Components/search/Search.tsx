import React,{useState} from 'react'
import "./search.scss"
import { INewFlight } from "../../types/types"
import { useNavigate } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css"
// import { Iflight } from "../../types/types"
// import useFetch from '../../hooks/useFetch'
// import DatePicker from "react-datepicker"









function Search () {

    const navigate = useNavigate();
    const [addFlight, setAddFlight ] = useState<INewFlight>({} as INewFlight)
    //  const [flights, setFlights] = useState<Iflight[]>([])
//  const {error, loading, data, reFetch} = useFetch()
//  const [passengerAdult, setpassengerAdult ] = useState("")
//  const [passengerChild, setpassengerChild] = useState("")
//  const [passengers, setpassengers] = useState(0)

//  const addPassenger = () =>{
//     let total =+passengerAdult + +passengerChild
//     setpassengers(total)
//     console.log(passengers)
//  }

//   useEffect(() => {
//     const fetching = async () =>{
//         const response = await fetch ("http://localhost:5000/flight")
//         const data = await response.json()
//         // console.log(data)
//          setFlights(data)
//     }
//     fetching();
//   }, [])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
     setAddFlight({
      ...addFlight,
      [e.target.name]: e.target.value
    });
    //  addPassenger()
  }
  
  const SelectHandleChange = (e: React.FormEvent<HTMLSelectElement>) =>{
       setAddFlight({
        ...addFlight,
        [e.currentTarget.name]: e.currentTarget.value
      });
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(addFlight)
    //    addPassenger()

       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addFlight)
      }

    fetch("http://localhost:5000/flight", requestOptions)
    .then(res => res.json())
    .then(data => console.log("1",data))

    navigate("/flight")
  } 


  return (
    <div className='search'>
        <h1>Book your flight</h1>
        <form onSubmit={handleSubmit}>
          <div className='search-airport'>
             <div className='search-airport--trip'>
               <label>Trip</label>
                <select id="trip" name="trip" 
                 onChange={SelectHandleChange}>
                    <option value="" selected disabled hidden>Choose your trip</option>
                    <option value="round-trip">Round trip</option>
                    <option value="one-Way">One way</option>
                </select>
             </div>

        
             <div className='search-airport--departure'>
               <label>Departs from</label>
               <select id="departure" name="depatureDestination"
                //  value={addFlight.depatureDestination}
                 onChange={SelectHandleChange} 
                >
                     {/* {flights.map(flight=>(
                        <option value={flight.depatureDestination}>{flight.depatureDestination}</option>
                    ))} */}
                 <option value="" selected disabled hidden>Choose your departure airport</option>
                  <option value="Oslo">Oslo</option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Amsterdam">Amsterdam</option>

                </select>
             </div>

               <div className='search-airport--arrival'>
               <label>Arriving at</label>
                <select id="arriving" name="arrivalDestination" 
                 onChange={SelectHandleChange} 

                // value={addFlight.arrivalDestination}
                //   onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                >
                     {/* {flights.map(flight=>(
                        <option value={flight.arrivalDestination}>{flight.arrivalDestination}</option>
                    ))} */}
                 <option value="" selected disabled hidden>Choose your arrival airport</option>
                  <option value="Oslo">Oslo</option>
                  <option value="Stockholm">Stockholm</option>
                  <option value="Amsterdam">Amsterdam</option>
                </select>
             </div>
            
            </div>
            <div className='search-date'>
                <div className='search-date--departure'>
                    <label>Date of departure</label>
                     <input  name="depatureAt"  type="date" 
                     onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                         min="2022-12-12" max="2022-12-18" 
                         />
                </div>

                 <div className='search-date--arrival'>
                    <label>Date of arrival</label>
                    <input type="date" name="arriveAt"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                    min="2022-12-12" max="2022-12-18"/>

                   
                </div>

                 <div className='search-date--passenger'>
                    <div>
                    <label>Passenger ( Adults )</label>
                    <input type="number" placeholder='0' 
                    name="passengerAdult"
                    // value={passengerAdult} 
                    //  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>setpassengerAdult(e.target.value)} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                    />
                    </div>
             {/* <button onClick={addPassenger} className="search-date-btn">+</button>  */}
                    <div>
                    <label>Passenger ( Children )</label>
                    <input type="number"  placeholder='0'
                    //  value={passengerChild}
                    //  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>setpassengerChild(e.target.value) }
                     name= "passengerChild" 
                     onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                    />
                    </div>
                    <div>
                     <label>Total passengers</label>
                    <input type="number" name= "avaliableSeats" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                    />
                    </div>
                </div>

            </div>
            <div className='search-button'>
                <button >Search flights</button>

            </div>

        </form>
        
    </div>
  )
}


export default Search
