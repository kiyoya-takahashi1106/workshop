import React from 'react'
import Finsh from './components/Finsh.js'

const App3 = () => {
    // ここにjavaSrciptを書きます!!!
    let inputValue = ""

    const handleChange = (e) => {
        inputValue = e.target.value
    }

    return (
        // ここにhtmlを書きます。
        <div>
            <h1>htmlとjavaScriptの合体!!!</h1>
            <input
                type="text"
                defaultValue={inputValue}
                placeholder="user名を入力してください"
                onChange={handleChange}
            />

            {/* ここから先は課題について書いています */}
            <h1 style={{ marginTop: '100px' }}>課題</h1>
            <ul>
                <li>buttonを作成して、そのbuttonを押すとinputタグに入力された文字をコンソールに表示するようにしてください。</li>
            </ul>
            <Finsh location={"app4"}/>
        </div>
    )
}

export default App3