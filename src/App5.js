import React, { useState } from 'react';
import Finsh from './components/Finsh.js';
import Hint5 from './hint/Hint5.js';
import seccesfull from "./videos/recording.mp4"

function App5() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  // inputタグの中身を取得する関数
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  // taskを追加する関数
  const addTask = () => {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (selectedTask) => {
    // この中身を考えて見よう
    const newTasks = tasks.filter((task) => task !== selectedTask)
    setTasks(newTasks)
  }

  return (
    <div>
      <h1>タスク管理アプリ</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
          placeholder="タスクを入力"
        />
        <button onClick={addTask}> Taskを追加する </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTodo(task)}>削除</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <hr />
        <h2>課題</h2>
        <ul>
          <li>タスクの削除</li>
        </ul>
        <div>
          <h3>成功画面</h3>
          <video width="600" controls>
            <source src={seccesfull} type="video/mp4" />
            お使いのブラウザは video タグに対応していません。
          </video>
        </div>
        <Hint5 />
        <br />
        <Finsh location={"app6"} />
      </div>
    </div>
  );
}

export default App5;
