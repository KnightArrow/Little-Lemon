import BookingForm from "./BookingForm";
import React from 'react'

export default function BookingPage() {
    const updateTimes=(state,action)=>{
        return state;
      }
      const initializeTimes=()=>{
        return [
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00"
        ]
      }
      const [availableTimes,dispatch]=React.useReducer(updateTimes,[],initializeTimes);
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </div>
  )
}
