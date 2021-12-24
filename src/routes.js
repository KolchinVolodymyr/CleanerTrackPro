import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ClientAddPage} from './pages/Client/ClientAddPage';
import {ClientListPage} from './pages/Client/ClientListPage';
import {ClientEditPage} from './pages/Client/ClientEditPage';
import {ClientDeletePage} from './pages/Client/ClientDeletePage';
import {EmployeesPage} from './pages/Employees/EmployeesPage';
import {EmployeesListPage} from './pages/Employees/EmployeesListPage';
import {EmployeesEditPage} from './pages/Employees/EmployeesEditPage';
import {EquipmentPage} from './pages/Equipment/EquipmentPage';
import {JobsPage} from './pages/Jobs/JobsPage';
import {WorksitesPage} from './pages/Worksites/WorksitesPage';

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/client' exact element={<ClientAddPage />} />
            <Route path='/client/list' exact element={<ClientListPage />} />
            <Route path='/client/:id/edit' element={<ClientEditPage />} />
            <Route path='/client/:id/delete' element={<ClientDeletePage />} />
            <Route path='/employees' exact element={<EmployeesPage />} />
            <Route path='/employees/list' exact element={<EmployeesListPage />} />
            <Route path='/employees/:id/edit' element={<EmployeesEditPage />} />
            <Route path='/equipment' exact element={<EquipmentPage />} />
            <Route path='/jobs' exact element={<JobsPage />}/>
            <Route path='/worksites' exact element={<WorksitesPage />}/>
        </Routes>
    )
}