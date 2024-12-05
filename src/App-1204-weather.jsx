import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

import ShowWeather from "./ShowWeather";
function App() {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://tychien1120.github.io/myWeather/json/F-C0032-001.json');
            const { location } = data.data.cwaopendata.dataset;
            setWeatherList(location);
        })()
    }, [])

    return (
        <div className="wrap">
            <h2>36小時天氣預報</h2>
            <div className="container">
                {
                    weatherList.map((city) => {
                        return (
                            <div className="item" key={city.locationName}>
                                <ShowWeather city={city} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
export default App