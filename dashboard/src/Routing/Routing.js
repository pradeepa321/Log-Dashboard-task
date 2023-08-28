import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Dashboard/dashBoard'
import AttackLogs from '../ApacheLogs/attackLogs'
import AccessLogs from '../ApacheLogs/accessLogs'
import ErrorLogs from '../ApacheLogs/errorLogs'
import NgAccesslog from '../Ngnix/NgAccesslog'
import NgErrorlog from '../Ngnix/NgErrorlog'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<DashBoard />}></Route>
        <Route path='/attacklog' element={<AttackLogs />}></Route>
        <Route path='/accesslogs' element={<AccessLogs />}></Route>
        <Route path='errorlogs' element={<ErrorLogs />}></Route>
        <Route path='ngaccesslog' element={<NgAccesslog />}></Route>
        <Route path='/ngerrorlog' element={<NgErrorlog />}></Route>
    </Routes>
  )
}

export default Routing