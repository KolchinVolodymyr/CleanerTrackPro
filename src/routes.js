import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ClientPage} from './pages/ClientPage';
import {EmployeesPage} from './pages/EmployeesPage';
import {EquipmentPage} from './pages/EquipmentPage';
import {JobsPage} from './pages/JobsPage';
import {WorksitesPage} from './pages/WorksitesPage';

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/client' exact element={<ClientPage />} />
            <Route path='/employees' exact element={<EmployeesPage />} />
            <Route path='/equipment' exact element={<EquipmentPage />} />
            <Route path='/jobs' exact element={<JobsPage />}/>
            <Route path='/worksites' exact element={<WorksitesPage />}/>
        </Routes>
    )
}