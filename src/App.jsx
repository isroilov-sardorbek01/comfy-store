import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:id' element={<Details></Details>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
       </div>
  )
}

export default App