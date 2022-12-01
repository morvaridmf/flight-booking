import React from 'react'



interface ISearch {
    depatureAt:string;
    arriveAt:string;
    avaliableSeats:number;
    prices:any[]
}


function FlightItem( {depatureAt, arriveAt,avaliableSeats,prices}:ISearch) {

   
  return (
    <div className='flighItem'>
        <div>
            <p><span>departure time: </span>{depatureAt}</p>
             <p><span>arrival time: </span>{arriveAt}</p>
                    {
                      prices.map(item=>(<p><span>price: </span>{item.adult} {item.currency}</p>))
                    }
        </div>

            <div className="flight-info-more">
                <button className='btn-select'>Select</button>
                <button className='btn-detail'>View details</button>
              </div>      
    </div>
  )
}

export default FlightItem