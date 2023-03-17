import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from './AuthContext';
import Login from './Login';
import Register from './Register';
import { Tost } from './Tost';
import Customer from './Customer';
import Service from './Service';
import NewPostCre from './NewPostCre';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tost>
          <AuthContext>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/reg' element={<Register />} />
              <Route path='/cus' element={<Customer/>} />
              <Route path='/service' element={<Service/>}/>
              <Route path='/postNewRooms' element={<NewPostCre/>} />
            </Routes>
          </AuthContext>
        </Tost>
      </BrowserRouter>
    </div>
  );
}

export default App;
