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


function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      {/* <Card /> */}
      <Game />
      <Footer />
    </div>
  );
}

export default App;
