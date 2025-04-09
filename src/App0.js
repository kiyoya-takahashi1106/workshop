import React from 'react'
import Finsh from './components/Finsh.js'

const App0 = () => {
  return (
    <div>
        <h1>WorkShop</h1>

        {/* ここから先は課題について書いています */}
        <h1 style={{ marginTop: '100px' }}>課題</h1>
        <ul>
            <li>画面に表示されてる文字を消してください</li>
        </ul>
        <Finsh location={"app1"}/>
    </div>
  )
}

export default App0