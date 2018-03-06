import React from 'react';
// import { Panel } from 'react-bootstrap';

const WeatherList=(props)=>{

	if(props.country===''){
		return <div className='list-main'></div>
	}	



	return (
		<div className='list-main'>
			<div className='weather-header'><span className='city-name'>{props.city}</span> <br /> {props.country}</div>
				<ul>
				{props.weather.map((w,i,aa)=>{
					// console.log({w})
					const time = tConvert(w.dt_txt.split(' ')[1]);
					const date = tConvert(w.dt_txt.split(' ')[0]);
					const icon = `http://openweathermap.org/img/w/${w.weather[0].icon}.png`;

					// console.log(aa);
					

					if(tConvert(w.dt_txt.split(' ')[0])===props.weather[i].dt_txt.split(' ')[0]){
						console.log('dates ',props.weather[i].dt_txt.split(' ')[0]);


						// return(
						// 	<ul key={i}>----
						// 		<li>{time}
						// 			<ul>
						// 				<li>{time}</li>
						// 			</ul>
						// 		</li> 
							
							
						// 	</ul>
							
						// )
					}
					return (
							<li className='weather-list' key={i}>
									<div className='main-temp'>{w.main.temp_min}</div>
								<div>
									<img alt={w.weather[0].description} src={icon}/>
									<div>{w.weather[0].description}</div>
								</div>
								<div className='min-temp'>{w.main.temp_min}</div>
								<div className='max-temp'>{w.main.temp_max}</div>
								<div>{date}</div>
								<div>at {time}</div>
							
							</li>
						)
					}
					)
				}
			</ul>
		</div>
		)
	}

const tConvert =(time)=> {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

export default WeatherList;