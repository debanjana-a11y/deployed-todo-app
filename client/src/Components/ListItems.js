import { useState } from 'react';
import Modal from './Modal';
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";


function ListItems({task}) {
  const [showModal, setShowModal] = useState(false);

    return (
      <li className="list-items">
        <div className="info-container">
          <TickIcon/>
          <p>{task.title}</p>
          <ProgressBar/>
        </div>

        <div className="button-container">
          <button className="edit" onClick={()=> setShowModal(true)}>EDIT</button>
          <button className="delete">DELETE</button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal}/>}
      </li>
    );
  }
  
  export default ListItems;