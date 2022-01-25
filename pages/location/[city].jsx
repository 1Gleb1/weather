import React from 'react';
import axios from 'axios';
import moment from 'moment';

export async function getServerSideProps(context) {
    const slug = context.params.city
    const city = slug.replace('-', ' ')
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_API_WEATHER}`)

    return {
        props: {
            data: res.data
        }
    }
}

export default function City({data}) {
    return (
        <div className='bg-gray-800 p-6 rounded-md w-full max-w-6xl flex flex-col gap-2 text-md min-w-full min-h-screen'>
            <div className='flex gap-4 flex-wrap'>
                <div className='p-4 gap-2 flex flex-col lg:flex-row bg-gray-600 w-3/5 lg:w-1/5 rounded-lg shadow-md transition hover:shadow-lg'>
                    <div>
                        <img src={`/images/icons/${data.list[8].weather[0].icon}.png`} alt={data.list[0].weather[0].description} width={90}/>
                    </div>
                    <div className='flex flex-col'>
                        {moment(data.list[8].dt_txt).format('dddd DD MMMM')}
                        <span>
                            t&#176;c: {Math.round(data.list[0].main.temp - 273)}
                        </span>
                    </div>
                </div>
            </div>
            <div className='px-4 py-6 rounded-lg bg-gradient-to-br  from-cyan-600 to-indigo-800 shadow-lg'>
                
                <div className='flex justify-between'>    
                    <div className=' text-2xl font-bold flex flex-col'>
                        {data.city.name}
                        <span className='text-xl lg:text-3xl font-bold'>{moment(data.dt).format('MMM DD dddd')}</span>
                        <span className='text-lg lg:text-2xl font-bold'>{moment(data.dt).format('HH:MM')}</span>
                    </div>
                    <div>
                    <div className='flex flex-col items-center'>
                            <img src={`/images/icons/${data.list[0].weather[0].icon}.png`} alt={data.list[0].weather[0].description} width={100} />
                            Today: {data.list[0].weather[0].description}
                        </div>
                    </div>
                     
                </div>
                
                <div>
                    <div className='px-3 py-2 flex flex-col lg:flex-row justify-between'>

                        {/* TEMPRATURA_MIN/MAX */}
                        <div className='flex flex-col items-center lg:items-start my-2'>
                            Temperature:
                            <span className='flex items-center'>
                            <img src={`/images/icons/${data.list[0].weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt={data.list[0].weather[0].description} width={50} />
                                t&#176;c: {Math.round(data.list[0].main.temp - 273)}
                            </span>
                            <span>
                                t&#176;c max: {Math.round(data.list[0].main.temp_max - 273)}
                            </span>
                            <span>
                                t&#176;c min: {Math.round(data.list[0].main.temp_min - 273)}
                            </span>
                        </div>

                        {/* TEMPERATURA/WEATHER */}
                        {/* <div className='flex flex-col items-center'>
                            <img src={`/images/icons/${data.list[0].weather[0].icon}.png`} alt={data.list[0].weather[0].description} width={150} />
                            Today: {data.list[0].weather[0].description}
                        </div> */}

                        {/* WIND */}
                        <div className='flex flex-col items-center gap-5'>
                            Wind Speed: {data.list[0].wind.speed} m/s
                            {console.log(data.list[0].wind.deg)}
                            <img 
                                src={`/images/icons/arrow.png`} 
                                alt="wind-deg" 
                                width={90}  
                                className={` p-1`}/>
                        </div>

                        <div>

                        </div>

                       
                    </div>
                </div>

                {/* OnDAY */}
                <div className='flex text-sm gap-4 flex-col lg:flex-row'>
                            <div className='flex flex-col items-center p-3 bg-cyan-200 bg-opacity-30 rounded-lg'>
                                {/* 1 */}
                                <div className='text-white'>
                                    {moment(data.list[1].dt_txt).format("HH:MM")}
                                </div>
                                <div className='flex flex-col justify-start'>

                                    <div className='flex flex-col gap-2 py-1'>
                                        <span className='flex items-center '>
                                        <img src={`/images/icons/${data.list[1].weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt={data.list[0].weather[0].description} width={30} />
                                            t&#176;c: {Math.round(data.list[1].main.temp - 273)}
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/windy.png`} width={30} />  {data.list[0].wind.speed} m/s
                                        <img src={`/images/icons/arrow.png`} width={25} /> deg  
                                    </div>

                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/${data.list[1].weather[0].icon}.png`} alt={data.list[0].weather[0].description} width={30} />
                                        {data.list[1].weather[0].description}
                                    </div>

                                </div>
                            </div>

                            {/* 2 */}
                            <div className='flex flex-col items-center p-3 bg-cyan-200 bg-opacity-30 rounded-lg'>
                                <div className='text-white'>
                                    {moment(data.list[2].dt_txt).format("HH:MM")}
                                </div>
                                <div className='flex flex-col justify-start'>

                                    <div className='flex flex-col gap-2 py-1'>
                                        <span className='flex items-center'>
                                        <img src={`/images/icons/${data.list[1].weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt={data.list[2].weather[0].description} width={30} />
                                            t&#176;c: {Math.round(data.list[1].main.temp - 273)}
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/windy.png`} width={30} />  {data.list[2].wind.speed} m/s
                                        <img src={`/images/icons/arrow.png`} width={25} /> deg  
                                    </div>
                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/${data.list[1].weather[0].icon}.png`} alt={data.list[2].weather[0].description} width={30} />
                                        {data.list[2].weather[0].description}
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className='flex flex-col items-center p-3 bg-cyan-200 bg-opacity-30 rounded-lg'>
                                <div className='text-white'>
                                    {moment(data.list[3].dt_txt).format("HH:MM")}
                                </div>
                                <div className='flex flex-col'>

                                    <div className='flex flex-col gap-2 py-1'>
                                        <span className='flex items-center'>
                                        <img src={`/images/icons/${data.list[1].weather[0].icon > 15 ? "temp_hot"  : "temp_cold"}.png`} alt={data.list[0].weather[0].description} width={30} />
                                            t&#176;c: {Math.round(data.list[3].main.temp - 273)}
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/windy.png`} width={30} />  {data.list[3].wind.speed} m/s
                                        <img src={`/images/icons/arrow.png`} width={25} /> deg  
                                    </div>
                                    <div className='flex items-center gap-2 py-1'>
                                        <img src={`/images/icons/${data.list[3].weather[0].icon}.png`} alt={data.list[3].weather[0].description} width={30} />
                                        {data.list[3].weather[0].description}
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            
        </div>
    )
}
