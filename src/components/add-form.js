import React, {Component, PropTypes} from 'react';
import {
	createItem,
	postListing
} from '../utils/fetch';


class AddForm extends Component {

	static propTypes = {
		onSubmit: PropTypes.func,
	};

	static defaultProps = {
		onSubmit: () => {},
	};

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
	// Inline validation
	// Show server error to user
	// Success message when creating/deleting


	addData() {
		const {
			nameValue,
			urlValue
		} = this.state;

		const newData = createItem(nameValue, urlValue);

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
			nameValue,
			urlValue,
		} = this.state;

		const {
			onSubmit
		} = this.props;

		return (
			<form className='add-listing-form'>
				<div className='inputs-container'>
					<input
						type='text'
						value={nameValue}
						className='title-input'
						placeholder='Name'
						onChange={ (e) => this.setState({nameValue: e.target.value}) }
					/>
					<input
						type='text'
						value={urlValue}
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