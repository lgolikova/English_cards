import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Card from './components/Card/card';
import TableString from './components/Table/TableString';
import '../../cards/src/assets/styles/variables.scss'
import list from './components/list';
import Table from './components/Table/Table';


function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      {/* {list.map(item => <TableString  en={item.en} ru={item.ru} transcription={item.transcription} />)} */}
    </div>
  );
}

export default App;
