import React from 'react';
import moment from 'moment';

export default function WeatherOnDay({item}) {

    return (
        

            <div className='flex flex-col items-center p-3 bg-cyan-200 bg-opacity-30 rounded-lg lg:w-full'>
            {/* 1 */}
                <div className='text-white text-lg'>
                    {moment(item.dt_txt).format("HH:mm")}
                </div>
                <div className='flex flex-col justify-start'>

                    <div className='flex flex-col gap-2 py-1'>
                        <span className='flex items-center justify-between'>
                        <img src={`/images/icons/${item.weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt="" width={30} />
                            t&#176;c: {Math.round(item.main.temp - 273)}
                        </span>
                    </div>

                    <div className='flex flex-col gap-2 py-1 '>
                        <div className='flex items-center justify-between'>
                            <img src={`/images/icons/windy.png`} width={30} />  <span>{item.wind.speed} m/s</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <img src={`/images/icons/arrow.png`} width={25} /> <span>deg</span>  
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2 py-1'>
                        <img src={`/images/icons/${item.weather[0].icon}.png`} alt="" width={60} />
                        {item.weather[0].description}
                    </div>
                </div>
            </div>

    )
}