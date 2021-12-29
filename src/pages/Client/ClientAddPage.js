import React, {useState} from 'react';
import axios from 'axios';
import {Button} from './../../components/Button';

export const ClientAddPage = () => {
    const [data, setData] = useState({
        name: '', address: '', phone: '', contactPerson: '', client: '', status: ''
    });
     const [client, setClient] = useState([]);


    const handleSubmitCreate = (event) => {
        axios.post('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json', data)
            .then((response)=>{
                console.log(response);
            })
            .catch(error => {
                console.log('error', error);
            })
        event.preventDefault();
    };

    const handleSubmitReadList = event => {
        axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json')
         .then((response)=>{
            Object.keys(response.data).forEach((key, index)=> {
                client.push({
                    id: key,
                    name: `Client ${index+1}`
                })
                setClient({client});
            })
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
                Client Page
            </h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Primary office address:
                    <input
                        type="text"
                        name="address"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Contact phone:
                    <input
                        type="text"
                        name="phone"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Contact person:
                    <input
                        type="text"
                        name="contactPerson"
                        onChange={changeHandler}
                    />
                </label>
                <label>Corporate or personal?</label>
                <select
                    className="browser-default"
                    defaultValue='Choose your option'
                    name="client"
                    onChange={changeHandler}
                >
                    <option value='Choose your option' disabled>Choose your option</option>
                    <option value='Corporate'>Corporate</option>
                    <option value='Personal'>Personal</option>
                </select>
                <label>Status</label>
                <select
                    className="browser-default"
                    defaultValue='Choose your option'
                    name="status"
                    onChange={changeHandler}
                >
                    <option value='Choose your option' disabled>Choose your option</option>
                    <option value='true'>true</option>
                    <option value='false'>false</option>
                </select>
                <Button onClick={handleSubmitCreate} type="primary">Create</Button>
            </form>
            <Button onClick={handleSubmitReadList} type="primary">Read</Button>
        </div>
    )
}