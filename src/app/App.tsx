// import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/login/ui/LoginPage.tsx'
import HomePage from '@/pages/home/ui/HomePage.tsx'

function App() {
  return (
    <BrowserRouter basename="/FE_react-sgroup">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App