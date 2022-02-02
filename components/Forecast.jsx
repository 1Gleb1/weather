import { Chart as ChartJS,
    ArcElement,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController} from 'chart.js'
import moment from 'moment';
import { Chart } from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController
  )
  export default function Forecast({day}){

    // ВРЕМЕННЫЕ ОТРЕЗКИ 
    const timeCrap = []
      day.forEach(time => {
          timeCrap.push(moment(time.dt_txt).format('HH:mm'))
        });

    // ВЫБРАННЫЙ И СЛЕДУЮЩИЙ ДЕНЬ
    const dt = day[0].dt * 1000
    const dt_next = dt + 86400000
    
    // TEMPERATURE
    const tempCrap = []
    day.forEach(temp => {
        tempCrap.push(Math.round(temp.main.temp));
    })


    // CONFIG FOR CHART
    const data = {
        labels: timeCrap,
        datasets: [{
            label: `${moment(dt).format('DD')}-${moment(dt_next).format('DD')}`,
            data: tempCrap,
            borderColor: 'cyan',
            hoverBackgroundColor: ['cyan'],
            
        }]
    }
    return (
        <div className='w-full'>
            <h1>{`${moment(dt).format('dddd')}-${moment(dt_next).format('dddd')}`}</h1>
            <div className=''>
                <Chart type='line' data={data}/>
            </div>
        </div>
        )
}
