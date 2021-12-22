import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from './../components/Button';

export const ClientListPage = () => {
    const [client, setClient] = useState([]);
    const loadMessage = async () => {
        try {
            const response = await axios.get('https://json.versant.digital/.netlify/functions/fake-api/message');
            Object.keys(response.data).forEach((key, index)=> {
                console.log('key', key);
                console.log('index', index);
                client.push({
                    id: key,
                    name: `Client ${index+1}`
                })
                console.log('client', client);
                setClient({client});

          })
        } catch (e) {
          this.setState({ message: e.message });
        }
    };
    useEffect(()=> {
//        axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json')
//        .then((response)=>{
//            console.log(response);
//            const client = [];
//            Object.keys(response.data).forEach((key, index)=> {
//                console.log('key', key);
//                console.log('index', index);
//                client.push({
//                    id: key,
//                    name: `Client ${index+1}`
//                })
//                console.log('client', client);
//                setClient({client});
//
//            })
//        })
//        .catch(error => {
//            console.log('error', error);
//        })
        loadMessage();
    }, [])

    return(
        <div>
            <h1>
                Client List Page
            </h1>

        </div>
    )
}