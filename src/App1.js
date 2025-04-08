import React from 'react'
import Finsh from './components/Finsh.js'

const App1 = () => {
  return (
    // htmlはここに聞きます。
    <div>
        <h1>基本的なhtml紹介!!!</h1>
        
        <h1>ここにHtmlを書きます!!!</h1>

        <h2>ここにHtmlを書きます!!!</h2>

        <h3>ここにHtmlを書きます!!!</h3>

        <p>お肉食べたい</p>
        <p>牛肉食べたい</p>
        <p>豚肉食べたい</p>

        <a href="https://https://www.oit.ac.jp/academic/rd/umeda/.example.com">大阪工業大学</a>

        <img src="./favicon.ico" alt="画像の説明" />

        <p>体験会メンバー</p>
        <ul>
            <li>後藤 ソライヤ ちゃん</li>
            <li>東前 杏百琥 ちゃん</li>
            <li>髙橋 せいけん 君</li>
        </ul>

        {/* ここから先は課題について書いています */}
        <h1 style={{ marginTop: '100px' }}>課題</h1>
        <ul>
            <li>架空のメンバーを一人増やしてください</li>
            <li>youtubeアイコンの画像を表示</li>
            <li>youtubeのリンクを表示して、クリックしたら、youtubeが開くようにしてください</li>
        </ul>
        <Finsh location={"app2"}/>
    </div>
  )
}

export default App1