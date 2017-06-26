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

		this.addData = this.addData.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateUrl = this.updateUrl.bind(this);
	}

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
				console.log('Post response: ', response);
				this.props.addNotification({
					title: `Created listing for ${response.data.attributes.title}`,
					type: 'success',
				});
				this.props.afterAdd();
			})
			.catch((error) => {
				this.props.addNotification({
					title: 'Error creating new listing',
					type: 'error',
				});
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