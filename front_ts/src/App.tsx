
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import AddEvent from './event/AddEvent'
import Home from "./components/Home"
import Events from './event/Events'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import AppBar from "./Appbar"
import './App.css'


function App() {
 
  return (
    <>
          

           
        <RecoilRoot>
       
            <Router>
            <AppBar/>
              <Routes>
                <Route path = '/signup' element= {<Signup/>}></Route>
                <Route path = '/login' element= {<Signin/>}></Route>
                <Route path = '/' element= {<Home/>}></Route>
                <Route path = '/addEvent' element= {<AddEvent/>}></Route>
                <Route path = '/events' element= {<Events/>}></Route>
              
               
              </Routes>
            </Router>
        </RecoilRoot>
      
    </>
  )
}

export default App
