import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home';
import Controller from './Controller';
import Buy from './Buy';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Controller' element={<Controller />}></Route>
          <Route path='/Buy' element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App