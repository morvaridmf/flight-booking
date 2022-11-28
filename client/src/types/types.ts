export interface Iflight {
  flight_id: String;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: {
    depatureAt:string;
    arriveAt:string;
    avaliableSeats:number;
    prices:{
      currency:string;
      adult:number;
      child:number
    }[]
  }[]

}