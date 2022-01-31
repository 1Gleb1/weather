import React from 'react';
import axios from 'axios';
import Weather from '../../components/Weather';
// import Week from '../../components/city/Week';
// import Day from '../../components/city/Day';

export async function getServerSideProps(context) {
    const slug = context.params.city
    const slugArray = slug.split('-')
    const id = slugArray[slugArray.length - 1]
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.NEXT_API_WEATHER}&id=${id}`)
    
    // const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_API_WEATHER}`)

    return {
        props: {
            data: res.data
        }
    }
}

export default function City({data}) {
    return (
        <div>
            <Weather data={data} />
        </div>






        // <div className='bg-gray-800 p-6 rounded-md w-full max-w-6xl flex flex-col gap-2 text-md min-w-full min-h-screen'>
        //         <div className='flex flex-col md:flex-row gap-2 justify-between'>

        //             {weekDays.map((item, index) => (
        //                 <Week key={index} day={item[0]} onClick={() => handleDay(item.id)} />
        //             ))}

        //         </div>
                
        //         <div className='flex justify-between'>
        //             <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(0)}>DAY</button>
        //             <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(1)}>DAY</button>
        //             <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(2)}>DAY</button>
        //             <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(3)}>DAY</button>
        //             <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(4)}>DAY</button>
        //         </div>
                
        //         <div className='p-6 rounded-lg bg-gradient-to-br from-cyan-600 to-indigo-800 shadow-lg'>
                    
        //             <Day data={data} day={weekDays[day]}/>

        //         </div>
        // </div>
    )
}
