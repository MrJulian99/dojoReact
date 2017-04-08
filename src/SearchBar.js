import React, { Component } from 'react';

export default class SearchBar extends Component {
	


	constructor(props){

			super(props);
			this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
			this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);




	}


            handleInStockInputChange(e){

				this.props.estadodelcheck(e.target.checked);


			}


			handleFilterTextInputChange(e){

				this.props.entradadelinput(e.target.value);

			}


	render(){

			return(
            <form>

			<input type="text" name="searchbar"  onChange={this.handleFilterTextInputChange} value={this.props.filterText}/><br/>
			<input type="checkbox" name="product" value="producto"  onChange={this.handleInStockInputChange} checked={this.props.inStockOnly}     />Stock<br/>			
			</form>
			);
           }




	}



