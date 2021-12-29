import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from './../../components/Button';

export const WorksitesPage = () => {
    const [data, setData] = useState({
        name: '', address: '', type: '', status: '', worksitesClient: ''
    });
    const [dataClient, setDataClient] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadMessage = async () => {
        const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json');
        let newArr = [];
        Object.entries(response.data).forEach((key, index)=> {
            newArr.push({
                id: key,
                name: `Client ${index+1}`
            })
            setIsLoaded(true);
        })
        setDataClient(newArr);
        console.log('dataClient', dataClient);
    };
    // Note: an empty array of dependencies [] means that
    // this useEffect will run once
    // similar to componentDidMount ()
    useEffect(()=> {
        loadMessage();
    }, [])

    const handleSubmitCreate = (event) => {
        axios.post('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/worksites.json', data)
            .then((response)=>{
                console.log(response);
            })
            .catch(error => {
                console.log('error', error);
            })
        event.preventDefault();
    };

//    const handleSubmitReadList = event => {
//        axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/worksites.json')
//         .then((response)=>{
//            Object.keys(response.data).forEach((key, index)=> {
//                client.push({
//                    id: key,
//                    name: `Client ${index+1}`
//                })
//                setClient({client});
//            })
//         })
//         .catch(error => {
//            console.log('error', error);
//         })
//    }

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <h1>
                Worksites Page
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
                    Address:
                    <input
                        type="text"
                        name="address"
                        onChange={changeHandler}
                    />
                </label>
                <label>Corporate or personal?</label>
                <select
                    className="browser-default"
                    defaultValue='Choose your option'
                    name="type"
                    onChange={changeHandler}
                >
                    <option value='Choose your option' disabled>Choose your option</option>
                    <option value='office'>office</option>
                    <option value='residential building'>residential building</option>
                    <option value='personal home'>personal home</option>
                    <option value='individual apartment'>individual apartment</option>
                    <option value='manufacturing'>manufacturing</option>
                    <option value='warehouse'>warehouse</option>
                    <option value='outdoor'>outdoor</option>
                    <option value='field'>field</option>
                    <option value='other'>other</option>
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
        </div>
    )
}