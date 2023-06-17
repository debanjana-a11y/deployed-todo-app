import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";


function ListItems({task}) {
    return (
      <li className="list-items">
        <div className="info-container">
        <TickIcon/>
        <p>{task.title}</p>
        <ProgressBar/>
      </div>

      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
        </div>
      </li>
    );
  }
  
  export default ListItems;