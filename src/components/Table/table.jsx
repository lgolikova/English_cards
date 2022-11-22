import TableString from './TableString';
import list from '../list';
import "./table.scss";



function Table() {
    return (
        <div className='table-container'>
            <div className='table-header'>
                <div>Word</div>
                <div>Transcription</div>
                <div>Translation</div>
                <div>Actions</div>
            </div>
            {list.map((item, index) => <TableString index={index} en={item.en} ru={item.ru} transcription={item.transcription} key={item.id} />)}
        </div>
    )
}

export default Table;