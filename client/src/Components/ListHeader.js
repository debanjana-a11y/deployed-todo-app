import Modal from './Modal';

function ListHeader({listName}) {
  const create = () => {
    // return (
    //   <Modal/>
    // );
    return;
  };

  const signout = () => {
    console.log("sign out");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={create}>ADD NEW</button>
        <button className="signout" onClick={signout}>SIGN OUT</button>
        <Modal mode={'edit'}/>
      </div>
    </div>
  );
  }
  
  export default ListHeader;
  