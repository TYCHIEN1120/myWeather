import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { CiUmbrella } from "react-icons/ci";
function App() {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://tychien1120.github.io/myReact7/json/F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            setWeatherList(location);
            console.log(weatherList)
        })
    }, [])


    return (
        <div className="wrap">
            <h2>36小時天氣預報</h2>
            <div className="container">
                {
                    weatherList.map((city) => {
                        return (
                            <div className="item" key={city.locationName}>
                                <h3>{city.locationName}</h3>
                                <div className="content">
                                    {
                                        city.weatherElement[0].time.map((time, index) => {
                                            return (
                                                <div className="item2" key={index}>
                                                    {/* <p>4日</p> */}
                                                    <p>
                                                        {
                                                            new Date(time.starTime).toLocaleString(undefined, {
                                                                day: 'numeric'
                                                            })
                                                        }
                                                    </p>

                                                    <p>
                                                        {
                                                            new Date(time.starTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                    </p>
                                                    <p>
                                                        {
                                                            new Date(time.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                    </p>
                                                    <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                                                    <p>陰短暫雨</p>
                                                    <p><CiUmbrella />30%</p>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
export default App