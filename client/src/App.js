import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CardsPage } from './pages/CardsPage';

function App() {
  return (
    <Router>
      <NavBar/>
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/cards' element={<CardsPage />}/>
    </Routes>
    </div>
    </Router>  
  );
}

export default App;
