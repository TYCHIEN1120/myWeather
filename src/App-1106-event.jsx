
function App() {

    // 建立函式方法1
    function sayHi1() {
        alert('Hello3')
    }

    // 建立函式方法2
    const sayHi2 = () => {
        alert('Hello4')
    }

    return (

        <div>
            {/* 事件處理1：在HTML標籤上綁定事件 */}
            <button onClick={
                // 匿名函式
                function () {
                    alert(`Hello1`)
                }
            }>按鈕1</button>

            <button onClick={
                // 箭頭函式
                () => {
                    alert(`Hello2`)
                }
            }>按鈕2</button>

            {/* 事件處理2：呼叫函式 */}
            {/* 等待被呼叫的函式，函式名稱後面不加小括號，不然會直接執行 */}
            <button onClick={sayHi1}>按鈕3</button>
            <button onClick={sayHi2}>按鈕4</button>
        </div>
    )
}

export default App
