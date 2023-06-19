import ListHeader from "./Components/ListHeader";
import ListItems from "./Components/ListItems";
import { useEffect, useState} from 'react';

function App() {
  const userEmail = 'debanjanasarkar02@gmail.com';
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const todos = await response.json();
      setTasks(todos)
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => getData, []);

  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date));

  // console.log(sortedTasks);

  return (
    <div className="app">
      <ListHeader listName={ '🌴 Holiday Tick List' }/>
      {sortedTasks?.map((task) => <ListItems key={task.id} task={task}/>)}
    </div>
  );
}

export default App;
