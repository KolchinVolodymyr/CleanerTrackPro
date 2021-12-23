import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import {Button} from './../components/Button';

export const ClientListPage = () => {
    const [client, setClient] = useState([]);
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const loadMessage = async () => {
        const response = await axios.get('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/Test.json');
        console.log('response', response.data);
        Object.keys(response.data).forEach((key, index)=> {
            client.push({
                id: key,
                name: `Client ${index+1}`
            })
            setClient({client});
            setIsLoaded(true);
        })
        Object.values(response.data).forEach((key, index)=> {
            data.push({value: key});
            setData({data})
        })
//
//        console.log('Object.entries(response.data)', Object.entries(response.data));
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
    console.log('data',data)
        return(
            <div>
                <h1>
                    Client List Page
                </h1>
                {data.value.map(item => {
                return(
                    <li key={item.id}>
                        {item.name}
                    </li>)
                })}
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