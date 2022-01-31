import React, {useState} from 'react';
import axios from 'axios';

export async function getServerSideProps(context) {
    const slug = context.params.city

    const slugArray = slug.split('-')
    const id = slugArray[slugArray.length - 1]
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.NEXT_API_WEATHER}&id=${id}`)

    // const city = slug.replace('-', ' ')
    // const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_API_WEATHER}`)

    return {
        props: {
            data: res.data
        }
    }
}

export default function City({data}) {
    console.log(data);
    const weekDays = []
    for(let i = 0; i < data.list.length; i= i+8){
        weekDays.push(data.list.slice(i, i+8))
    }

    return (
        <div>

        </div>
        )
    } 