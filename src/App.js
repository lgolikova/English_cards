import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import TableString from './components/Table/TableString';
import '../../cards/src/styles/variables.scss'
import list from './components/list';
import Table from './components/Table/Table';
import Game from './components/Game/game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/table' element={<Table />} />
          <Route path='/game' element={<Game />} />
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
