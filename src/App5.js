import React, { useState } from 'react';

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
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App5;
