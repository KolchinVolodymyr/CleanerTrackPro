import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export const ClientListPage = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
//    const loadMessage = async () => {
//        const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json/');
//        Object.entries(response.data).forEach((key, index)=> {
//            client.push({
//                id: key,
//                name: `Client ${index+1}`
//            })
//            setClient({client});
//            setIsLoaded(true);
//        })
//    };
    const loadMessage = useCallback(async () => {
        try {
            const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json/');
                let newArr = [];
                Object.entries(response.data).forEach((key, index)=> {
                    newArr.push({
                        id: key,
                        name: `Client ${index+1}`
                    })
                    setIsLoaded(true);
                })
                setData(newArr);
        } catch (e) {
            console.log(e);
        }
    }, []);

    // Note: an empty array of dependencies [] means that
    // this useEffect will run once
    // similar to componentDidMount ()
    useEffect(()=> {
        loadMessage();
    }, [])

    const onRemove = (event)  => {
        console.log(event);
        axios.delete(`https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test/${event}.json`)
        .then((response)=>{
            loadMessage();
        })
    }

    if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
    console.log('data 222', data)
        return(
            <div>
                <h1>
                    Client List Page
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
                                        <li>Contact person: {item.id[1].contactPerson}</li>
                                        <li>Corporate or personal: {item.id[1].client}</li>
                                        <li>Status: {item.id[1].status}</li>
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <Link to={`/client/${item.id[0]}/edit`}>Edit</Link>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => onRemove(item.id[0])}
                                        value={item.id[0]}
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