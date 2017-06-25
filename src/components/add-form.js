import React, {Component} from 'react';

import {
	postListing
} from '../utils/fetch';


class AddForm extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			urlValue: '',
		};

		this.addData = this.addData.bind(this);
	}

	// TODO:
	//---------
	// Validation
	// Show server error to user

	createItem() {
		const {
			nameValue,
			urlValue
		} = this.state;

		return {
			data: {
				attributes: {
					title: nameValue,
					url: urlValue,
				}
			}
		};
	}

	addData() {
		const newData = this.createItem();

		postListing(newData)
			.then((response) => {				
				this.props.afterAdd();
			})
			.catch((error) => {
				console.log(`Error posting new data: ${error}`);
			});
	}


	render() {
		const {
			onSubmit
		} = this.props;

		return (
			<form className='add-listing-form'>
				<div className='inputs-container'>
					<input
						type='text'
						value={null}
						className='title-input'
						placeholder='Name'
						onChange={ (e) => this.setState({nameValue: e.target.value}) }
					/>
					<input
						type='text'
						value={null}
						className='url-input'
						placeholder='URL'
						onChange={ (e) => this.setState({urlValue: e.target.value}) }
					/>
				</div>
				<button
					type='button'
					onClick={this.addData}
				>
					ENTER
				</button>
			</form>
		);
	}
}

export default AddForm;