import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import TableString from './components/Table/TableString';
import '../../cards/src/styles/variables.scss'
import list from './components/list';
import Table from './components/Table/Table';


function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
