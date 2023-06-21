import {useState} from 'react';

function Modal({mode, setShowModal}) {
    const [data, setData] = useState(
      {
        user_email: "",
        title: "",
        progress: "",
        date: mode==='edit'? "" : new Date()
      }
    );

    const handleChange = (e) => {
      const {name, value} = e.target;
      setData(prevValue => {
        return {
          ...prevValue, [name]: value
        }
      });
    };

    return (
      <div className="overlay">
        <div className ="modal">
          <div className="form-title-container">
            <h3>Let's {mode} your task</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>

          <form>
            <input
              required
              name="title"
              values={data.title}
              placeholder={"Your Task goes here"}
              maxLength={30}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="range">Drag to set your current progress</label>
            <input
              name="progress"
              id="range"
              type="range"
              values={data.progress}
              min="0"
              max="100"
              onChange={handleChange}
            />
            <input type="submit" className={mode}/>
          </form>
        </div>
      </div>
    );
  }
  
  export default Modal;