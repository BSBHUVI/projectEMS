
import './App.css';
import AuthenticationContext from './Context/AuthenticationContext';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Department from './components/Department';
import Employee from './components/Employee';
import Home from './components/Home';
import Leaves from './components/Leaves';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <AuthenticationContext>
    <Router>
 
      <Routes>
      
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <ProtectedRoutes>
      <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index path='/' element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/employee" element={<Employee/>}/>
      <Route path="/leaves" element={<Leaves/>}/>
      <Route path="/department" element={<Department/>}/>
    
    </Route>
      </Routes>
      </ProtectedRoutes>
   
    </Router>
    </AuthenticationContext>
  );
}

export default App;
