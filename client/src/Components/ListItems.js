import { useState } from 'react';
import Modal from './Modal';
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";


function ListItems({task, getData}) {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async () => {
    const option = {
      method: 'DELETE'
    }
    const response = await fetch(`http://localhost:8000/todos/${task.id}`, option);
    if (response.status === 200) {
      getData();
    }
  };

  return (
    <li className="list-items">
      <div className="info-container">
        <TickIcon/>
        <p>{task.title}</p>
        <ProgressBar/>
      </div>

      <div className="button-container">
        <button className="edit" onClick={()=> setShowModal(true)}>EDIT</button>
        <button className="delete" onClick={deleteItem}>DELETE</button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
    </li>
  );
}
  
  export default ListItems;