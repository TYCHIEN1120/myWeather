// 子組件之「props」的寫法
// function MyComponent(props){
//   console.log(props)
//   props.c();
//   return <>
//   <div>我是子組件</div>
//   <div>{props.a}</div>
//   <div>{props.b}</div>
//   </>
// }


// 子組件之「物件解構賦值」寫法
// 解構賦值的名稱必須一樣，順序可以不同

function MyComponent({ a, b = "我是預設值b", c }) {

    c();
    return <>
        <div>我是子組件</div>
        <div>{a}</div>
        <div>{b}</div>
    </>
}
// 父組件
function App() {
    return (
        <>
            {/* 回調函式=callback function */}
            <MyComponent
                a="我是屬性a"
                // b="我是屬性b" 
                c={() => { console.log("我是方法c") }} />
            {/*
            props = properites = 屬性
            作用：從父組件傳遞資料到子組件(由下往上傳遞)

            撰寫react時，組件之間需要溝通(傳遞資廖)時，
            props就可以做到這件事
    */}
        </>
    )
}

export default App
