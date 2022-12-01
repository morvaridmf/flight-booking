import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IFlight } from '../../types/types';
import "./info.scss"
import { IPassengerInfo } from "../../types/types"


function Info() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [passengerData, setPassengerData] = useState<IPassengerInfo[]>([])

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/passenger/search");
        const data = await res.json();
        console.log("dataaa1", data);
        setPassengerData(data);


      } catch (err: any) {
        setError(err);

      }
      setLoading(false)
    }
    getData();

  }, [])


  return (
    <div className='info'>
      {loading ? (<h1>Loading...</h1>) : (
        <>
          <nav>
            <Link to="/" >
              <h3>Home</h3>
            </Link>
            <Link to="/flight" >
              <h3>Flight info</h3>
            </Link>
            <Link to="/passenger" >
              <h3>Passenger info</h3>
            </Link>
          </nav>
          <div>


            {passengerData.length > 0 && passengerData.map(p => (

              <p>{p.firstName}</p>
            ))
            }
          </div>
        </>
      )}

    </div>
  )
}

export default Info