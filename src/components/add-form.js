import React, {Component} from 'react';


class AddForm extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			urlValue: '',
		};
	}

	// TODO:
	//---------
	// Validation
	// Show server error


	render() {
		return (
			<form className='add-listing-form'>
				<div className='inputs-container'>
					<input
						type='text'
						value={null}
						className='title-input'
						placeholder='Name'
						onChange={ (e) => console.log('Event: ', e) }
					/>
					<input
						type='text'
						value={null}
						className='url-input'
						placeholder='URL'
					/>
				</div>
				<button type='button'>
					ENTER
				</button>
			</form>
		);
	}
}

export default AddForm;