import React, { Component } from 'react';
import data from './data.json';

class Selector extends Component{
	constructor(props) {
	    super(props);
	    this.state = { data };
	    this.handleChange = this.handleChange.bind(this)
	}
	// If something else will be changed in the date or country I have to clearInterval or there will be produed different screens by router. That means also there will be different components.
	// So that's why I have to pass data to the main App component, to operate with other components. 
	handleDate() {
		clearInterval(this)
		// Result that will be shown
		const a = document.querySelector('.result')
		const error = `<h1 class="err"> ☹  Enter your birth date!</h1>`
		// Date Input
		const dateInput = document.querySelector('#date')
		const yearInput = parseInt(dateInput.value.substr(0, 4), 10)
		const currentYear = new Date().getFullYear() 
		// Country Life Expactnsy
		const average = document.querySelector('.average').innerHTML
		const average2 = average.substr(average.length - 5)

		if(yearInput < 1900 && yearInput > currentYear) {
			a.innerHTML = error
		} else if(yearInput > 1900 && yearInput <= currentYear){
			if(document.getElementById('date').value === '') {
                        a.innerHTML = error
                    } else {
                setInterval(() => {
                	//average2 - це число від якого треба буде віднімати число років що вже прожито
                	let birthday = dateInput.value.split('-')
 	               	let alive = Date.now() - new Date(`${birthday[1]}/${birthday[2]}/${birthday[0]}`).getTime()
 	               	let years = alive / 1000 / 60 / 60 / 24 / 365
 	               	let yearsFixed = years.toFixed(10)
 	               	let left = average2 - yearsFixed
                    a.innerHTML = `<h4>Your actual age is:</h4>
                      				<h1 class="і">${yearsFixed}</h1>
                      				<h4>You still have ${left.toFixed(10)} years to enjoy your life!</h4>`
                    }, 100)
                }
		} else {
			a.innerHTML = error
		}       
	}
	handleChange(e) {
		let country = e.target.value
		let expectancy = e.target.value
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
	        		<h3 className="average">The average life expectancy in your country is {this.props.expectancy.substr(this.props.expectancy.length - 4)}</h3>
	        	</div>
	        	<h1>Enter your birth date</h1>
            	<input type="date" id="date" min="1900-01-01" onChange={this.handleDate} />
            	<div className="result"></div>
			</div>
		)
	}
}

export default Selector 

