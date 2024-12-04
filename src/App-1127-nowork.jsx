import { useEffect, useState } from "react"

function App() {
    // 使用者名稱
    const [inputUserName, setInputUserName] = useState("我是文字方塊");
    // 縣市名稱
    const [selCity, setSelCity] = useState("");
    // 建立陣列
    const arrCity = ['台北市', '新北市', '台中市', '桃園市', '台南市', '高雄市'];

    // 閱讀確認
    const [check, setCheck] = useState(false);

    // 複選：多個核取方塊
    const [chkList, setChklist] = useState([]);
    const arrList = ['HTML', 'CSS', 'JS', 'React']
    // 建立函式處理勾選項目
    const handleChkList = (e) => {
        // console.log(e.target.value);
        // 使用其餘運算子保留已經被勾選的項目+目前被勾選項目
        // 檢查是否被勾選
        if (e.target.checked) {
            // 是 => 原本+新的
            setChklist([...chkList, e.target.value]);
        } else {
            // 否 => 從原本勾選的項目中，拿掉不要的(filter)
            setChklist(
                chkList.filter((list) => {
                    return list !== e.target.value
                })
            );
        }
    }
    // 選項按鈕
    const [q1Ans, setQ1Ans] = useState('');
    const [q2Ans, setQ2Ans] = useState('');

    // 統計次數
    const [ans1Count, setAns1Count] = useState('');
    const [ans2Count, setAns2Count] = useState('');
    const [ans3Count, setAns3Count] = useState('');

    useEffect(() => {
        const btn1 = document.getElementById('btn1');
        btn1.addEventListener('click', totCount);
        function totCount() {
            // 將所有次數歸零
            setAns1Count(0);
            setAns2Count(0);
            setAns3Count(0);
        }
    })
    return (
        <>
            <h1>react-表單</h1>
            <hr />
            {/* input */}
            <label htmlFor="username">使用者名稱：</label>
            <input type="text" id="username"
                value={inputUserName}
                onChange={(e) => {
                    setInputUserName(e.target.value);
                }}
            />{inputUserName}
            <br />
            {/* select */}
            <label htmlFor="city">縣市名</label>
            <select name="" id="city"
                value={selCity}
                onChange={(e) => {
                    setSelCity(e.target.value);
                }}
            >
                {/* 逐行寫法 */}
                {/* 
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="台中市">台中市</option>
                <option value="桃園市">桃園市</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
             */}
                {/* 讀取陣列寫法 */}
                {/* disable => 無法使用、不能操作 */}
                <option value="" disabled>請選擇</option>
                {
                    arrCity.map((city) => {
                        return <option value={city} key={city}>{city}</option>
                    })
                }
            </select>{selCity}
            <br />

            {/* 單一核取方塊 */}

            <label htmlFor="isCheck">閱讀確認</label>
            <input type="checkbox" id="isCheck"
                value={check}
                onChange={(e) => {
                    // 處理勾選值的變化
                    setCheck(e.target.checked);
                }} />{check.toString()}
            <br />

            {/* 複選：多個核取方塊 */}
            {arrList.map((list) => {
                return <div key={list}>
                    <input type="checkbox" id={list} name="like"
                        value={list}
                        onChange={handleChkList}
                    />
                    <label htmlFor={list}>{list}</label>
                </div>
            })
            }
            {/* 
            <input type="checkbox" id="chkList1" name="like" value='HTML' onChange={handleChkList} />
            <label htmlFor="chkList1">HTML</label>
            <input type="checkbox" id="chkList2" name="like" value='CSS' onChange={handleChkList} />
            <label htmlFor="chkList2">CSS</label>
            <input type="checkbox" id="chkList3" name="like" value='JS' onChange={handleChkList} />
            <label htmlFor="chkList3">JavaScript</label>
            
         */}
            <br />
            {chkList}

            <br />
            {/* 選項按鈕 */}
            1. 請選擇最愛的飲料：
            {/* 同一題name要設一樣 */}
            <input type="radio" name="Q1" value='冰美式' id="q1-1" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-1">冰美式</label>

            <input type="radio" name="Q1" value='冰美式' id="q1-2" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-2">奶茶</label>

            <input type="radio" name="Q1" value='冰美式' id="q1-3" onChange={(e) => {
                setQ1Ans(e.target.value);
            }} />
            <label htmlFor="q1-3">拿鐵</label>
            <br />
            您所選擇的是：{q1Ans}
            <br />

            2. 請選擇最愛的食物：
            {/* 同一題name要設一樣 */}
            <input type="radio" name="Q2" value='牛排' id="q2-1" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-1">牛排</label>

            <input type="radio" name="Q2" value='披薩' id="q2-2" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-2">披薩</label>

            <input type="radio" name="Q2" value='火鍋' id="q2-3" onChange={(e) => {
                setQ2Ans(e.target.value);
            }} />
            <label htmlFor="q2-3">火鍋</label>

            <br />
            您所選擇的是：{q2Ans}
            <br />
            <button onClick={() => {

                setAns1Count(0);
                setAns2Count(0);
                setAns3Count(0);

                // 統計次數 
                // 第一題
                if (q1Ans == '冰美式' || q2Ans == '牛排') {
                    setAns1Count(ans1Count + 1);
                } else if (q1Ans == '奶茶' || q2Ans == '披薩') {
                    setAns2Count(ans2Count + 1);
                } else if (q1Ans == '拿鐵' || q2Ans == '火鍋') {
                    setAns3Count(ans3Count + 1);
                }
                // 第二題

            }}>送出統計結果</button>

            顯示統計次數結果：
            <p>選項1次數：{ans1Count}</p>
            <p>選項2次數：{ans2Count}</p>
            <p>選項3次數：{ans3Count}</p>
        </>
    )
}

export default App