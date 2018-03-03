import React,{Component} from 'react';
import axios from 'axios';


const UNSPLASH_APP_ID = 'daa532ee01d0b7749ba3af29368d370fdb3a7b693dbcfd351791bb8598e40d45';

class WeatherBackground extends Component{	
	constructor(props){
		super(props);
		this.state = {
			imgURL:'',
			city:this.props.city
		};
	}
	componentDidMount(){
		this.fetchImage(this.props.city);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.city!==nextProps.city){
			this.fetchImage(nextProps.city);
		}
	}

	getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	fetchImage(city){
		console.log('>>>>>>>>>>>>>>>>>>>>>>> ',city);
		
		
		axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=5&query=${city}&client_id=${UNSPLASH_APP_ID}`)
       .then((response)=> {
          	console.log(response.data);
          	let randomNum  = this.getRandomInt(0,4);
          	console.log('randomNum ',randomNum)
         	this.setState({
         		city:city,
         		imgURL:response.data.results[randomNum].urls.regular
         	});
        })
     	.catch((error)=> {
     	}); 
	}
	 

	render() {
		if(this.props.country===""){
			return <div className='weather-background'>Loading Component</div>
		}

		return (
			<div className='weather-background'>

				<img src={this.state.imgURL} />
			</div>
		);
	}
		
	
}

export default WeatherBackground;