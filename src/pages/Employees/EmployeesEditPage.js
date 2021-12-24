import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

export const EmployeesEditPage = () => {
    const ID = useParams().id;
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: '', address: '', phone: '', date_of_birth: '', salary: '', status: ''
    });

    useEffect(()=>{
        axios.get(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/employees/${ID}.json`)
            .then((response)=>{
                setData(response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    }, [ID]);

    const pressHandler = async (event)  => {
        await axios.put(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/employees/${ID}.json`, data)
        .then((response)=>{
            console.log(response);
            navigate('/employees/list');
        })
        .catch(error => {
            console.log('error', error);
        })
    }

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <h1>
                Client Edit Page
            </h1>
            <div className="row">
                <div>
                    <div className="input-field">
                        <input
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={data.name}
                            onChange={changeHandler}
                        />
                        <label className="active" htmlFor="link">Enter the name</label>
                    </div>
                    <div className="input-field">
                        <input
                            name="address"
                            type="text"
                            className="validate"
                            value={data.address}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        Date of birth:
                        <input
                            type="text"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        Salary:
                        <input
                            type="text"
                            name="salary"
                            value={data.salary}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <select
                            className="browser-default"
                            defaultValue={data.status}
                            name="status"
                            onChange={changeHandler}
                        >
                            <option value='Choose your option' disabled>Choose your option</option>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </select>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={pressHandler}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}