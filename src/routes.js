import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ClientAddPage} from './pages/ClientAddPage';
import {ClientListPage} from './pages/ClientListPage';
import {ClientEditPage} from './pages/ClientEditPage';
import {ClientDeletePage} from './pages/ClientDeletePage';
import {EmployeesPage} from './pages/EmployeesPage';
import {EquipmentPage} from './pages/EquipmentPage';
import {JobsPage} from './pages/JobsPage';
import {WorksitesPage} from './pages/WorksitesPage';

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/client' exact element={<ClientAddPage />} />
            <Route path='/client/list' exact element={<ClientListPage />} />
            <Route path='/client/:id/edit' element={<ClientEditPage />} />
            <Route path='/client/:id/delete' element={<ClientDeletePage />} />
            <Route path='/employees' exact element={<EmployeesPage />} />
            <Route path='/equipment' exact element={<EquipmentPage />} />
            <Route path='/jobs' exact element={<JobsPage />}/>
            <Route path='/worksites' exact element={<WorksitesPage />}/>
        </Routes>
    )
}