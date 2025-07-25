import React from 'react'
import{BrowserRouter , Routes , Route} from 'react-router-dom';
import Users from './Users';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';
import LoginPage from './LoginPage';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Users />}></Route>
        <Route path='/login' element = {<LoginPage />}></Route>
        <Route path='/create' element = {<CreateUsers />}></Route>
        <Route path='/update/:id' element = {<UpdateUsers />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
