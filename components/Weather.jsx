import Image from 'next/image';
import React, {useState} from 'react';
import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import { getSlug } from '../lib/helpers';

export default function Weather({data}) {
    const [loaded, setLoaded] = useState(false)
    const cityName = data.name
    const icon = data.weather[0].icon
    const isDay = icon[icon.leangth - 1] === 'd'
    const descr = data.weather[0].description
    const temp = data.main.temp
    const realFeel = data.main.feels_like
    const humidity = data.main.humidity
    const wind = data.wind
    const sunrise = data.sunrise
    const sunset = data.sunset
    const tz = data.timezone
  
    const onIconLoaded = (img) => {
        setLoaded(true)
    }

    return (
        <div className='weather-container w-full max-w-xs p-6 bg-gray-800 shadow-xl rounded-3xl '>
            <Head>
                <title>{cityName} | Curret Weather</title>
            </Head>
            <div className={` weather ${isDay ? 'day' : 'night'} ${loaded ? 'run' : ''}`}>
                <h1 className='text-2xl text-center font-bold pt-4 px-12 whitespace-nowrap '>
                    {cityName}
                </h1>
                <div className='relative px-6 pb-4'>
                    <Image 
                        src={`/images/3d-icons/${icon}.png`} 
                        width={340} height={320} 
                        objectFit='contain' 
                        alt={descr}
                        onLoadingComplete={onIconLoaded}
                    />
                    <div className=' text-center text-7xl font-bold -mt-6 pb-4'>
                        {Math.round(temp)}&deg;C
                        <div className='text-base'>Real Feel: {Math.round(realFeel)}&deg;C</div>
                        <div className='text-base -mt-1'>{descr}</div>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex flex-col items-center gap-3'>
                <div className='flex items-end gap-2 text-2xl leading-none'>
                    <Image src={'/images/icons/humidity.png'} width={24} height={24} />
                    <span>{humidity}%</span>
                </div>
                <div className='flex items-end gap-2 text-xl leading-none'>
                    <div style={{
                        display: 'block',
                        transform: `rotate(${wind.deg}deg)`
                    }}>
                        <Image src={'/images/icons/arrow.png'} width={24} height={24} />
                    </div>
                    <span>{wind.speed}m/s</span>
                </div>
            </div>

            <div className='flex justify-between gap-4 text-center'>
                <div>
                    <Image src={'/images/icons/sunrise.png'} width={100} height={100} />
                    <div>
                        {moment.utc(sunrise * 1000 + tz).format('HH:mm')}
                    </div>
                </div>
                <div>
                    <Image src={'/images/icons/sunset.png'} width={100} height={100} />
                    <div>
                        {moment.utc(sunset * 1000 + tz).format('HH:mm')}
                    </div>
                </div>
            </div>
            {/* <div className='mt-4 text-center'>
                <Link href={`/forecast/${getSlug(data.name, data.id)}`}>
                    <a className='inline-block py-3 px-6 bg-rose-600 hover:bg-rose-500 transition-colors rounded-full'>
                        5 days forecast
                    </a>
                </Link>
            </div> */}
        </div>
    );
}
