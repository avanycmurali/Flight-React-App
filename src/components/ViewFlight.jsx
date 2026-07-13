import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewFlight = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/flights").then(

            (response) => {

                changeData(response.data)

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect (
        () => {
            fetchData()
        },[]
    )


return (
    <div>
        <NavigationBar/>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">flight_numder</th>
                    <th scope="col">airline</th>
                    <th scope="col">origin</th>
                    <th scope="col">deestination</th>
                    <th scope="col">departure_date</th>
                    <th scope="col">departure_time</th>
                    <th scope="col">arrival_time</th>
                    <th scope="col">fare</th>
                    <th scope="col">total_seats</th>
                    <th scope="col">available_seats</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (value, index )=> {
                        return (
                            <tr>
                                
                                <td>{value.flight_number}</td>
                                <td>{value.airline}</td>
                                <td>{value.origin}</td>
                                <td>{value.destination}</td>
                                <td>{value.departure_date}</td>
                                <td>{value.departure_time}</td>
                                <td>{value.arrival_time}</td>
                                <td>{value.fare}</td>
                                <td>{value.total_seats}</td>
                                <td>{value.available_seats}</td>
                                <td>{value.status}</td>

                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
    </div>
)
}



export default ViewFlight