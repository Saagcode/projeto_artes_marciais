import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Sheets from '../src/pages/Sheets';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path='/tabelas' element={ <Sheets /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes