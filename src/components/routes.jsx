import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import ChooseWallet from './chooseW';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='chooseWallet' element={<ChooseWallet/>}></Route>
    </Routes>

  )
}
