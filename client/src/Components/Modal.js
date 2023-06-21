function Modal({mode}) {
    const handleChange = (e) => {
      console.log("changing");
    };
    return (
      <div className="overlay">
        <div className ="modal">
          <div className="form-title-container">
            <h3>Let's {mode} your task</h3>
            <button>X</button>
          </div>

          <form>
            <input
              required
              name="title"
              values={""}
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
              values={""}
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