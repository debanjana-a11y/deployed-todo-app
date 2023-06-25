import { useState } from 'react';
import Modal from './Modal';

function ListHeader({listName, getData}) {
  const [showModal, setShowModal] = useState(false);

  const signout = () => {
    console.log("sign out");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={()=> setShowModal(true)}>ADD NEW</button>
        <button className="signout" onClick={signout}>SIGN OUT</button>
        {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}
      </div>
    </div>
  );
  }
  
  export default ListHeader;
  