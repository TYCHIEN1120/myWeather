import './App.css'
import ShowContent from './ShowContent.jsx'
import ShowContentClass from './ShowContentClass.jsx'

function App() {

    return (
        <>
                <div className="wrap">
                    {/* 首頁廣告 */}
                    <header>
                        <div className="header">
                        <img src="../images/banner.jpg" alt="" />
                    </div> 
                    </header>
                </div>
            {/* 特色區 */}
            <div class="content">
                <ShowContent/>
            </div>

            {/* 主標 */}
            <div class="abc"
            ><h3>讓學習成為一種習慣</h3>
            </div>

            {/* 推薦課程 */}
            <div className='content2'>
                <h1>推薦課程</h1>
                <div className="contentClass">
                    <ShowContentClass/>
                </div>
            </div>

            {/* 頁尾 */}
            <footer>
                <p>王育瑱 1112</p>
            </footer>
        </>
    )
}

export default App
