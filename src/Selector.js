import React, { Component } from 'react';
import data from './data.json';

class Selector extends Component{
	constructor(props) {
	    super(props);
	    this.state = { data };
	    this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		let country = e.target.value
		let expectancy = e.target.value
		console.log(e.target)
		console.log(country)
		console.log(expectancy)
		this.props.onChange(country, expectancy)
	}
	render() {
		return (
			<div>
				<h1>
					Your country is {this.props.country.substr(0, this.props.expectancy.length - 5)}
				</h1>
				<select id="select-country" onChange={this.handleChange}>
					{
						this.state.data.map(function(el){
							return <option value={[el.country, el.expectancy]} key={el.country}>
									{el.country}
								</option>
						})
					}
	        	</select>
	        	<div>
	        		<h3>The average life expectancy in your country is {this.props.expectancy.substr(this.props.expectancy.length - 4)}</h3>
	        	</div>
			</div>
			
		)
	}
}

export default Selector 

