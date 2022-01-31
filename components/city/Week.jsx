import React from 'react';
import moment from 'moment';

export default function Week({day}) {

    return (
        <div className='shrink-0 md:shrink '>
            <div className='p-2 gap-2 flex flex-col md:flex-row bg-gray-600 rounded-lg h-full'>

                <div>
                    <img src={`/images/icons/${day.weather[0].icon}.png`} alt={day.weather[0].description} width={90}/>
                </div>
                <div className='flex flex-col'>
                    {moment(day.dt_txt).format('dddd DD MMMM')}
                    <span>
                        t&#176;c: {Math.round(day.main.temp - 273)}
                    </span>
                </div>
                
            </div>
        </div>
    )
}
