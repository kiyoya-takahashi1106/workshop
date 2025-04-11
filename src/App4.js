import React from 'react'
import Finsh from './components/Finsh.js';

const App4 = () => {
	let countNum = 0;

	const subtractCount = () => {
		countNum -= 1
		console.log("-1しました。", countNum)
	}

	return (
		<div>
			<h1>htmlとjavaScriptの合体???</h1>

			<button
				onClick={subtractCount}
				style={{ cursor: 'pointer', marginRight: '10px' }}
			>-1する</button>
			{countNum}
			<button
				style={{ cursor: 'pointer', marginLeft: '10px' }}
			>+1する</button>

			{/* ここから先は課題について書いています */}
			<h1 style={{ marginTop: '100px' }}>課題</h1>
			<ul>
				<li>countNumをプラス1する関数を作成してください</li>
			</ul>
			<Finsh location={"app5"} />
		</div>
	)
}

export default App4