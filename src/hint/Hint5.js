import { useState } from "react";

function Hint5() {
    const [openHint, setOpenHint] = useState(false);
    const [secondHint, setSecondHint] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setOpenHint(prev => !prev)}>
                    {openHint ? "ヒントを隠す" : "ヒント1を見る"}
                </button>
                {openHint && (
                    <div style={{ marginTop: "10px" }}>
                        <p>🔍 <strong>ヒント1：</strong></p>
                        <ul>
                            <li>
                                <code>deleteTask</code> 関数は、削除するタスクを特定するために、何らかの「<strong>引数</strong>」を必要とします。
                            </li>
                        </ul>
                    </div>
                )}
                <br/>
                <button onClick={() => setSecondHint(prev => !prev)}>
                    ヒント2を見る
                </button>
                {secondHint && (
                    <div style={{ marginTop: "10px" }}>
                        <p>🔍 <strong>ヒント2：</strong></p>
                        <ul>
                            <li>
                                その引数を使って、配列から削除したいタスク以外のものだけを新しい配列にする必要があります。
                            </li>
                            <li>
                                <code>filter</code> メソッドを使うと、配列の中で条件を満たすアイテムを取り出すことができます。
                                <strong>まずは filter メソッドについて調べてみてください！</strong>
                                <br />
                                <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">公式ドキュメント</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Hint5;
