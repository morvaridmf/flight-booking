import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




interface ISearch {
    depatureAt:string;
    arriveAt:string;
    avaliableSeats:number;
    id:number;
    prices:any[]
}


function FlightItem( i:ISearch) {
  const {depatureAt, arriveAt,avaliableSeats,prices,id} = i
  const [show, setShow] = useState(false)
  const navigate = useNavigate();


  const handleClick = ()=>{
     setShow(!show)
  }

  const handleSubmit = (id:number) =>{
    // if(i.id === id ) 
    //  const newF = {depatureAt, arriveAt,avaliableSeats,prices}
    console.log(id)  
    navigate("/passenger ") 
    

  }

   
  return (
    <div className='flighItem'>
        <div>
            <p><span>departure time: </span>{depatureAt}</p>
             <p><span>arrival time: </span>{arriveAt}</p>
                    {
                      prices.map(item=>(
                        <div key={id}>
                        <p><span>price: </span>{item.adult} {item.currency}</p>
                        <div className='moreInfo'>
                          <p><span>avaliable Seats: </span>{avaliableSeats}</p>
                          <p><span>price for children: </span>{item.child}  {item.currency}</p>
                        </div>
                      </div>
                      
                      ))
                    }
        </div>

            <div className="flight-info-more">
                  {/* <Link to={`/editpuppies/${id}`}> */}
                     <button className='btn-select' type='submit' onClick={()=>handleSubmit(id)}>Select</button>
                  {/* </Link> */}
                <button className='btn-detail' onClick={handleClick}>View details</button>
              </div>      
              
    </div>
  )
}

export default FlightItem


