import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import {Button} from './../components/Button';

export const ClientListPage = () => {
    const [client, setClient] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const loadMessage = async () => {
        const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json');
        Object.entries(response.data).forEach((key, index)=> {
            client.push({
                id: key,
                name: `Client ${index+1}`
            })
            setClient({client});
            setIsLoaded(true);
        })
    };

    // Note: an empty array of dependencies [] means that
    // this useEffect will run once
    // similar to componentDidMount ()
    useEffect(()=> {
        loadMessage();
    }, [])

    if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <div>
                <h1>
                    Client List Page
                </h1>
                <div className="row">
                    {client.client.map(item => {
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
                                    <a href="#">Edit</a>
                                    <a href="#">Delete</a>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

//export const ClientListPage = () => {
//  const [error, setError] = useState(null);
//  const [isLoaded, setIsLoaded] = useState(false);
//  const [data, setData] = useState([]);
//
//  // Примечание: пустой массив зависимостей [] означает, что
//  // этот useEffect будет запущен один раз
//  // аналогично componentDidMount()
//  useEffect(() => {
//    axios.get("https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json")
//      .then((response)=>{
//          console.log(response);
//          const client = [];
//          Object.keys(response.data).forEach((key, index)=> {
//              console.log('key', key);
//              console.log('index', index);
//              client.push({
//                  id: key,
//                  name: `Client ${index+1}`
//              })
//              setIsLoaded(true);
//              setData({client});
//
//
//          })
//      })
//
//  }, [])
//
//  if (error) {
//    return <div>Ошибка:</div>;
//  } else if (!isLoaded) {
//    return <div>Загрузка...</div>;
//  } else {
//  console.log('data 2 client', data.client)
//    return (
//      <div>
//        {data.client.map(el => {
//        console.log('ell', el);
//        return (
//          <li key={el.id}>
//            {el.name} {el.price}
//          </li>
//          )
//        })}
//      </div>
//    );
//  }
//}