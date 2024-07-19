import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';

function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/cart" element={<CardDetails />} />
    </Routes>
   </>
  );
}

export default App;
