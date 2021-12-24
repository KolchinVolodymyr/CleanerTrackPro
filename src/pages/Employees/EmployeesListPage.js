import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export const EmployeesListPage = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const loadMessage = async () => {
        const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/employees.json');
        let newArr = [];
        Object.entries(response.data).forEach((key, index)=> {
            newArr.push({
                id: key,
                name: `Employees ${index+1}`
            })
            setIsLoaded(true);
        })
        setData(newArr);
    };

    // Note: an empty array of dependencies [] means that
    // this useEffect will run once
    // similar to componentDidMount ()
    useEffect(()=> {
        loadMessage();
    }, [])

    const onRemove = (id)  => {
        axios.delete(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/employees/${id}.json`)
        .then((response)=>{
            loadMessage();
        })
    }

    if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <div>
                <h1>
                    Employees List Page
                </h1>
                <div className="row">
                    {data.map(item => {
                    return(
                        <div className="col s12 m6" key={item.id[0]}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{item.name}</span>
                                    <ul>
                                        <li>Name:{item.id[1].name}</li>
                                        <li>Primary office address: {item.id[1].address}</li>
                                        <li>Contact phone: {item.id[1].phone}</li>
                                        <li>Date of birth: {item.id[1].date_of_birth}</li>
                                        <li>Salary: {item.id[1].salary}</li>
                                        <li>Status: {item.id[1].status}</li>
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <Link to={`/employees/${item.id[0]}/edit`}>Edit</Link>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => onRemove(item.id[0])}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}