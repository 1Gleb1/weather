import React, {useState} from 'react';
import axios from 'axios';
import Week from '../../components/city/Week';
import Day from '../../components/city/Day';
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
    const list = data.list.slice(0, 8)
    const weekDays = []
    
    const [day, setDay] = useState(0)
    const handleDay = (id) => {
        setDay(id)
        console.log(day);
    }

    for(let i = 0; i < data.list.length; i= i+8){
        weekDays.push(data.list.slice(i, i+8))
    }


    return (
        <div className='bg-gray-800 p-6 rounded-md w-full max-w-6xl flex flex-col gap-2 text-md min-w-full min-h-screen'>
                <div className='flex flex-col md:flex-row gap-2 justify-between'>

                    {weekDays.map((item, index) => (
                        <Week key={index} day={item[0]} onClick={() => handleDay(item.id)} />
                    ))}

                </div>
                
                <div className='flex justify-between'>
                    <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(0)}>DAY</button>
                    <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(1)}>DAY</button>
                    <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(2)}>DAY</button>
                    <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(3)}>DAY</button>
                    <button className='p-2 bg-cyan-500 hover:bg-opacity-75 transition rounded' onClick={() => handleDay(4)}>DAY</button>
                </div>
                
                <div className='p-6 rounded-lg bg-gradient-to-br from-cyan-600 to-indigo-800 shadow-lg'>
                    
                    <Day data={data} list={list} day={weekDays[day]}/>

                </div>
        </div>
    )
}
