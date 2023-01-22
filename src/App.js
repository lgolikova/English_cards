import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Table from './components/Table/Table'
import Game from './components/Game/game';
import NotFound from './components/NotFound/notfound';
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
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer className="footer" />
    </div>
    </BrowserRouter>
  );
}

export default App;
