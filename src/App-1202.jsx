import { useEffect } from "react";
import axios from 'axios';
import './App.css';
import { CiUmbrella } from "react-icons/ci";
function App() {

    // useEffect(() => {
    //     (async () => {
    //         const data = await axios.get('https://github.com/TYCHIEN1120/myReact7');
    //         const { location } = data.data.cwaopendata.dataset;
    //         console.log(location);
    //     })
    // }, [])


    return (
        <>
            <div className="wrap">
                <h2>36小時天氣預報</h2>
                {/* 一列兩欄 */}
                <div classname='row'>
                    {/* 第一欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card">
                            {/* 標題 */}
                            <div className="card-city">台北市</div>
                            {/* 內容 */}
                            <div className="card-body">
                                {/* 1列三欄 */}
                                <div className="row2">
                                    <div classname='col2'>
                                        <p>2日
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                    <div classname='col2'>
                                        <p>2日
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                    <div classname='col2'>
                                        <p>2日
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname='row'>
                    {/* 第一欄 */}
                    <div className="col">
                        {/* 卡片樣式 */}
                        <div className="card">
                            {/* 標題 */}
                            <div className="card-city">台北市</div>
                            {/* 內容 */}
                            <div className="card-body">
                                {/* 1列三欄 */}
                                <div className="row2">
                                    <div classname='col2'>
                                        <p>2日<br/>
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                    <div classname='col2'>
                                        <p>2日
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                    <div classname='col2'>
                                        <p>2日
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00
                                        </p>
                                        <p>
                                            <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                                        </p>
                                        <p>晴時多雲</p>
                                        <p><CiUmbrella />10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}
export default App