import axios from 'axios'
import React, { useState } from 'react'

const AddFlight = () => {
    const [input, changeInput] = useState(
        {

        flight_number: "",
        airline: "",
        origin: "",
        destination: "",
        departure_date: "",
        departure_time: "",
        arrival_time: "",
        fare: "",
        total_seats: "",
        available_seats:"",
        status: ""
        }

    )

const inpuHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(input)
    axios.post(" https://host-demo-app.onrender.com/api/add-flight",input).then(
        (response)=>{
            alert("Flight added successfully")
        }
    ).catch(
        (error)=>{
            console.error("Error adding flight",error)
            alert("failed to add flight")
        }
    )
    
}


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">flight_number</label>
                                <input 
                                name="flight_number"
                                value={input.flight_number}
                                onChange={inpuHandler}
                                type="text" className="form-control"
                                 />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">airline</label>
                                <input 
                                name="airline"
                                value={input.airline}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">origin</label>
                                <input 
                                name="origin"
                                value={input.origin}
                               onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">destination</label>
                                <input
                                name="destination"
                                value={input.destination}
                                onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">departure_date</label>
                                <input 
                                name="departure_date"
                                value={input.departure_date}
                               onChange={inpuHandler}
                                type="date" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">departure_time</label>
                                <input 
                                name="departure_time"
                                value={input.departure_time}
                                onChange={inpuHandler}
                                
                                type="time" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">arrival_time</label>
                                <input 
                                name="arrival_time"
                                value={input.arrival_time}
                                onChange={inpuHandler}
                                type="time" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">fare</label>
                                <input
                                name="fare"
                                value={input.fare}
                                onChange={inpuHandler}
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">total_seats</label>
                                <input 
                                name="total_seats"
                                value={input.total_seats}
                                onChange={inpuHandler}
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">available_seats</label>
                                <input
                                name="available_seats"
                                value={input.available_seats}
                                onChange={inpuHandler}
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <select name="" id="" className="form-control" name="status" value={input.status} onChange={inpuHandler}>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="On Time">On Time</option>
                                    <option value="Delayed">Delayed</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFlight