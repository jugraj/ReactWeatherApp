import React, {Component} from 'react';
import { TextField } from 'react-md';


class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state={
			city:props.city
		};
	}
	
	componentDidMount(){
		this.changeVal(this.props.city)
	}

	changeVal=(city)=>{
		this.setState({city});
		this.props.searchCity(city);
	}

	render() {
		const {city} = this.state;
		return (
			<div className='search-bar'> 
			 
	    		<TextField 
	    		id="floating-center-title" 
	    		label="Change location" 
	    		className="md-cell md-cell--bottom" 
	    		placeholder='Enter city' 
	    		value = {city}
	    		onChange={this.changeVal} />
	    		
	    	</div>
		);
	}
    
}

export default SearchBar;