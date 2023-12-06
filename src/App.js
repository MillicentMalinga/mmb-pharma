import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusinessForm from './components/BusinessForm';
import { PatientForm } from './components/PatientForm';
import Topbar from './components/Topbar';
import CustomFooter from './components/Footer';

function App() {
  return (
    <div className="App">
        <Topbar/>
     <Router>
    

      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path='/business' element={<BusinessForm/>}> </Route>
        <Route path='patient' element={<PatientForm/>}> </Route>
      </Routes>
     </Router>
<CustomFooter/>
    </div>
  );
}

export default App;
