import React from 'react';
import moment from 'moment';
import OneDay from '../../components/city/OneDay';



export default function Day({data, list, day}) {
    const once = day[0]
    return (
        <div>

            <div className='flex justify-between'>
                <div className=' text-2xl font-bold flex flex-col'>
                    {data.city.name}
                    <span className='text-xl lg:text-3xl font-bold'>{moment(once.dt_txt).format('MMM DD dddd')}</span>
                    <span className='text-lg lg:text-2xl font-bold'>{moment(once.dt_txt).format('HH:mm')}</span>
                </div>
                <div className='flex flex-col items-center'>
                        <img src={`/images/icons/${once.weather[0].icon}.png`} alt={once.weather[0].description} width={100} />
                        Today: {once.weather[0].description}
                </div>
            </div>

            <div>
                <div className='px-3 py-2 flex flex-col sm:flex-row justify-between'>

                    {/* TEMPRATURA_MIN/MAX */}
                    <div className='flex flex-col items-center lg:items-start my-2'>
                        Temperature:
                        <span className='flex items-center'>
                        <img src={`/images/icons/${once.weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt={data.list[0].weather[0].description} width={50} />
                            t&#176;c: {Math.round(once.main.temp - 273)}
                        </span>
                        <span>
                            t&#176;c max: {Math.round(once.main.temp_max - 273)}
                        </span>
                        <span>
                            t&#176;c min: {Math.round(once.main.temp_min - 273)}
                        </span>
                    </div>

                    {/* WIND */}
                    <div className='flex flex-col items-center gap-5'>
                        Wind Speed: {once.wind.speed} m/s
                        {/* {console.log(once.wind.deg)} */}
                        <img 
                            src={`/images/icons/arrow.png`} 
                            alt="wind-deg" 
                            width={90}  
                            className={` p-1`}/>
                    </div>

                </div>
                {/* OnDAY */}
                <div className='flex text-sm gap-4 flex-col md:flex-row justify-center flex-wrap lg:flex-nowrap'>
                    {day.map((item, index) => (
                        <OneDay key={index} item={item} />
                    ))}
                </div>
            </div>

        </div>
        )
}
