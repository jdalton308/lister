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
		addNotification: PropTypes.func,
	};

	static defaultProps = {
		onSubmit: () => {},
		addNotification: () => {},
	};

	constructor(props) {
		super(props);
		
		this.state = {
			nameValue: '',
			urlValue: '',
			nameValid: null,
			urlValid: null,
		};

		this.addData = this._addData.bind(this);
		this.updateName = this._updateName.bind(this);
		this.updateUrl = this._updateUrl.bind(this);
		this.handleKeyDown = this._handleKeyDown.bind(this);
	}


	// Components Methods
	//----------------------

	_addData() {
		const {
			nameValue,
			urlValue
		} = this.state;

		const {
			addNotification,
			afterAdd,
		} = this.props;

		const newData = createItem(nameValue, urlValue);

		postListing(newData)
			.then((response) => {

				this.setState({
					nameValue: '',
					urlValue: '',
					nameValid: null,
					urlValid: null
				});

				addNotification({
					title: `Created listing for ${response.data.attributes.title}`,
					type: 'success',
				});

				afterAdd();
			})
			.catch((error) => {
				addNotification({
					title: 'Error creating new listing',
					type: 'error',
				});
				console.log(`Error posting new data: ${error}`);
			});
	}

	_handleKeyDown(e) {
		if (e.nativeEvent.keyCode === 13 && this.state.nameValid && this.state.urlValid) {
			this.addData();
		}
	}

	_updateName(e) {
		this.setState({
			nameValue: e.target.value,
			nameValid: validateName(e.target.value),
		});
	}

	_updateUrl(e) {
		this.setState({
			urlValue: e.target.value,
			urlValid: validateUrl(e.target.value),
		});
	}


	// Lifecycle Methods
	//----------------------

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
						onKeyDown={this.handleKeyDown}
					/>
					<input
						type='text'
						value={urlValue}
						className={urlInputClass}
						placeholder='URL'
						onChange={this.updateUrl}
						onKeyDown={this.handleKeyDown}
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