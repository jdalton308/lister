import React, {Component, PropTypes} from 'react';
import {
	createItem,
	postListing
} from '../utils/fetch';
import {
	validateName,
	validateUrl,
} from '../utils/validate';


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
			nameValid: null,
			urlValid: null,
		};

		this.addData = this.addData.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateUrl = this.updateUrl.bind(this);
	}

	// TODO:
	//---------
	// Inline validation
	// - url string validation:
	//   - Begins with 'http://' or 'https://'
	//   - contains 'www.' ... '.' ...
	// - name has a length?

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
				this.setState({
					nameValue: '',
					urlValue: '',
					nameValid: null,
					urlValid: null
				});
				this.props.afterAdd();
			})
			.catch((error) => {
				console.log(`Error posting new data: ${error}`);
			});
	}

	updateName(e) {
		this.setState({
			nameValue: e.target.value,
			nameValid: validateName(e.target.value),
		});
	}

	updateUrl(e) {
		this.setState({
			urlValue: e.target.value,
			urlValid: validateUrl(e.target.value),
		});
	}


	render() {
		const {
			nameValue,
			urlValue,
			nameValid,
			urlValid,
		} = this.state;

		const {
			onSubmit
		} = this.props;

		// TODO: Fix these...
		const nameInputClass =
			(nameValid === null) ?
				'title-input' :
				(nameValid) ?
					'title-input valid' :
					'title-input invalid';

		const urlInputClass =
			(urlValid === null) ?
				'url-input' :
				(urlValid) ?
					'url-input valid' :
					'url-input invalid';

		return (
			<form className='add-listing-form'>
				<div className='inputs-container'>
					<input
						type='text'
						value={nameValue}
						className={nameInputClass}
						placeholder='Name'
						onChange={this.updateName}
					/>
					<input
						type='text'
						value={urlValue}
						className={urlInputClass}
						placeholder='URL'
						onChange={this.updateUrl}
					/>
				</div>
				<button
					type='button'
					disabled={!(nameValid && urlValid)}
					onClick={this.addData}
				>
					ENTER
				</button>
			</form>
		);
	}
}

export default AddForm;