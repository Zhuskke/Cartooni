import React from 'react'
import { Routes, Route } from 'react-router'
import HomeScreens from './screens/HomeScreens'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreens/> }/>
      </Routes>
    </div>
  )
}

export default App
