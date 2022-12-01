export interface IFlight {
  flight_id: string;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: IItinerariesEntity[];
}
export interface IItinerariesEntity {
  depatureAt: string;
  arriveAt: string;
  avaliableSeats: number;
  prices: IPricesEntity[];
}
export interface IPricesEntity {
  currency: string;
  adult: number;
  child: number;
}



export interface INewFlight {
  flight_id: string;
  trip:string;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: INewItinerariesEntity;
}
export interface INewItinerariesEntity {
  depatureAt: string;
  arriveAt: string;
  passengerAdult:number;
  passengerChild:number
}

