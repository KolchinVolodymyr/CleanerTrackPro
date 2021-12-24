import React, {useState} from 'react';
import {Button} from './../components/Button';
import axios from 'axios';

export const EmployeesPage = () => {
    const [data, setData] = useState({
        name: '', address: '', phone: '', salary: '', date_of_birth: '', status: ''
    });
    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    const handleSubmitCreate = (event) => {
        axios.post('https://cleanertrackpro-c446c-default-rtdb.europe-west1.firebasedatabase.app/employees.json', data)
            .then((response)=>{
                console.log(response);
            })
            .catch(error => {
                console.log('error', error);
            })
        event.preventDefault();
    };

    return(
        <div>
            <h1>
                Employees Page
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
                    Salary:
                    <input
                        type="number"
                        name="salary"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Date of birth:
                    <input
                        type="text"
                        name="date_of_birth"
                        onChange={changeHandler}
                    />
                </label>
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