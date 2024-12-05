import { CiUmbrella } from "react-icons/ci";

export default function ShowWeather({ city }) {

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
                                        new Date(time.startTime).toLocaleString(undefined, {
                                            day: 'numeric'
                                        })
                                    }
                                </p>

                                <p>
                                    {
                                        new Date(time.startTime).toLocaleString(undefined, {
                                            hour: 'numeric',
                                            minute: 'numeric'
                                        })
                                    }
                                </p>
                                <br />~<br />
                                <p>
                                    {
                                        new Date(time.endTime).toLocaleString(undefined, {
                                            hour: 'numeric',
                                            minute: 'numeric'
                                        })
                                    }
                                </p>
                                {/* 天氣圖 */}
                                {/* <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>*/}
                                <p><img src={`./public/weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                                {/* <p>陰短暫雨</p>  */}
                                <p>{time.parameter.parameterName}</p>

                                {/* 降雨率 */}
                                {/* <p><CiUmbrella />30%</p> */}
                                <p><CiUmbrella />
                                {city.weatherElement[4].time[index].parameter.parameterName}
                                </p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

