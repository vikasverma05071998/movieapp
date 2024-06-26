
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import MoviesPage from './Component/MoviesPage'
import DescriptionPage from './Component/DescriptionPage'


export default function App() {
  return (
    <div>
     
      <Router>
        {/* <Link to='/'><i className="fa fa-arrow-circle-left" style={{fontSize:"48px",color:"red"}}/></Link> */}
        <Routes>
          <Route path='/' element={<MoviesPage/>}/>
          <Route path='/DescriptionPage/:id' element={<DescriptionPage/>}/>
        </Routes>
       </Router>
     </div>
   )
 }
