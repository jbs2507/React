// import { useState } from 'react'
// import './src/shared/styles/App.css'

import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import Props from "./features/layout/components/Props"

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Content></Content >}> </Route>
        <Route path="/props" element={<Props></Props>}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App