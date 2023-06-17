import ListHeader from "./Components/ListHeader";
import { useEffect } from 'react';

function App() {
  const getData = async () => {
    const userEmail = 'debanjanasarkar02@gmail.com';
    const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => getData, []);

  return (
    <div className="app">
      <ListHeader listName={ '📖 Start a book' }/>
    </div>
  );
}

export default App;
