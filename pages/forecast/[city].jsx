import React from 'react';
import axios from 'axios';
import Forecast from '../../components/Forecast';

export async function getServerSideProps(context) {
    const slug = context.params.city
    const slugArray = slug.split('-')
    const id = slugArray[slugArray.length - 1]
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.NEXT_API_WEATHER}&id=${id}`)

    return {
        props: {
            data: res.data
        }
    }
}

export default function City({data}) {
    const weekDays = []

    for(let i = 0; i < data.list.length; i= i+8){
        weekDays.push(data.list.slice(i, i+8))
    }

    return (
        <div>
            <div className='flex bg-gray-800 gap-12 px-4 py-4 rounded-lg flex-wrap  max-h-[42rem] max-w-3xl text-center justify-center overflow-auto'>
                {weekDays.map((item, index) => (
                    <Forecast day={item} key={index} />
                ))}
            </div>
        </div>
    )
}


