import React from 'react'
import Finsh from './components/Finsh.js'

const App2 = () => {
    // javascriptはここに書きます。
    const password = 1;
    const confirmPassword = 2;
    if(password === confirmPassword){
        console.log("same password");
    } else {
        console.log("");
    }

    let users = [];
    users.push("user1");
    users.push("user2");
    console.log(users);

    users.map((user) => {
        console.log(user);
    });

    const loginUser = "user4"

  return (
    <div>
        <h1>基本的なjavaScript紹介!!!</h1>

        {/* ここから先は課題について書いています */}
        <h1>課題</h1>
        <ul>
            <li>passwordとconfirmPasswordが違ったら、コンソールに"not same password"と表示するようにしてください。</li>
            <li>usersというリストに3人目の"user3"をいれて、コンソールに表示してください。</li>
            <li>loginUserがusers配列の中にあったら、コンソールで"loginUser exists in the users."するようにしてください</li>
        </ul>
        <Finsh location={"app3"}/>
    </div>
  )
}

export default App2