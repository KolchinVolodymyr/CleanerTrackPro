import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

export const ClientEditPage = () => {
    const ID = useParams().id;
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: '', address: '', phone: '', contactPerson: '', client: '', status: ''
    });

    useEffect(()=>{
        axios.get(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test/${ID}.json`)
            .then((response)=>{
                setData(response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    }, [ID]);

    const pressHandler = (event)  => {
        axios.put(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test/${ID}.json`, data)
        .then((response)=>{
            console.log(response);
        })
        .catch(error => {
            console.log('error', error);
        })
        navigate('/client/list');
        event.preventDefault();
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
                        Contact person:
                        <input
                            type="text"
                            name="contactPerson"
                            value={data.contactPerson}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label>Corporate or personal?</label>
                        <select
                            className="browser-default"
                            defaultValue='Choose your option'
                            name="client"
                            value={data.client}
                            onChange={changeHandler}
                        >
                            <option value='Choose your option' disabled>Choose your option</option>
                            <option value='Corporate'>Corporate</option>
                            <option value='Personal'>Personal</option>
                        </select>
                    </div>
                    <div>
                        <label>Status</label>
                        <select
                            className="browser-default"
                            defaultValue='Choose your option'
                            name="status"
                            value={data.status}
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