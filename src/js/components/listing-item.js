import React, {Component, PropTypes} from 'react';
import {
	TrashIcon,
	EditIcon,
	CloseIcon,
	CheckIcon
} from './icons';
import {
	createItem,
	deleteListing,
	updateListing
} from '../utils/fetch';
import {
	validateName,
	validateUrl,
} from '../utils/validate';


class ListingItem extends Component {

	static propTypes = {
		title: PropTypes.string,
		url: PropTypes.string,
		id: PropTypes.string,
		type: PropTypes.string,
		afterChange: PropTypes.func,
		addNotification: PropTypes.func,
	};

	static defaultProps = {
		afterChange: () => {},
		addNotification: () => {},
	};

	constructor(props) {
		super(props);

		this.state = {
			editing: false,
			newNameValue: props.title,
			newUrlValue: props.url,
			nameValid: null,
			urlValid: null,
		};

		this.onDelete = this._onDelete.bind(this);
		this.onEdit = this._onEdit.bind(this);
		this.saveEdit = this._saveEdit.bind(this);
		this.cancelEdit = this._cancelEdit.bind(this);
		this.handleNameEdit = this._handleNameEdit.bind(this);
		this.handleUrlEdit = this._handleUrlEdit.bind(this);
		this.handleKeyDown = this._handleKeyDown.bind(this);
	}


	// Components Methods
	//----------------------

	_onDelete(e) {
		deleteListing(this.props.id)
			.then((response) => {
				this.props.addNotification({
					title: `Deleted ${this.props.title}`,
					type: 'success',
				});
				this.props.afterChange();
			})
			.catch((error) => {
				console.log(`Error deleting data: ${error}`);
					this.props.addNotification({
						title: `Error deleting data: ${error}`,
						type: 'error',
					});
			});
	}

	_onEdit(e) {
		this.setState({editing: true});
	}

	_canSave() {
		const {
			nameValid,
			urlValid,
		} = this.state;

		return (nameValid || nameValid === null) && (urlValid || urlValid === null);
	}

	_saveEdit(e) {
		const {
			newNameValue,
			newUrlValue
		} = this.state;

		const {
			title,
			url,
			id,
			afterChange,
			addNotification,
		} = this.props;
		
		const isNewData = (newNameValue !== title) || (newUrlValue !== url);

		// Only update if new data is different than old data
		// ----
		if (isNewData) {
			const newData = createItem(newNameValue, newUrlValue);

			updateListing(id, newData)
				.then((response) => {
					addNotification({
						title: `Updated ${response.data.attributes.title}`,
						type: 'success',
					});
					afterChange();
					this.setState({
						editing: false,
						nameValid: null,
						urlValid: null,
					});
				})
				.catch((error) => {
					console.log(`Error updating data: ${error}`);
					addNotification({
						title: `Error updating data: ${error}`,
						type: 'error',
					});
					this.setState({editing: false});
				});
		} else {
			this.setState({editing: false});
		}
	}

	_cancelEdit(e) {
		this.setState({
			editing: false,
			newNameValue: this.props.title,
			newUrlValue: this.props.url,
			nameValid: null,
			urlValid: null,
		});
	}

	_handleNameEdit(e) {
		this.setState({
			newNameValue: e.target.value,
			nameValid: validateName(e.target.value),
		});
	}

	_handleUrlEdit(e) {
		this.setState({
			newUrlValue: e.target.value,
			urlValid: validateUrl(e.target.value),
		}); 
	}

	_handleKeyDown(e) {
		if (e.nativeEvent.keyCode === 13 && this._canSave()) {
			this.saveEdit();
		}
	}


	// Lifecycle Methods
	//----------------------

	render() {
		const {
			editing,
			newNameValue,
			newUrlValue,
			nameValid,
			urlValid,
		} = this.state;

		const {
			title,
			url,
			id,
			type
		} = this.props;

		const nameInputClass =
			(nameValid === null) ?
				'new-title-input' :
				(nameValid) ?
					'new-title-input valid' :
					'new-title-input invalid';

		const urlInputClass =
			(urlValid === null) ?
				'new-url-input' :
				(urlValid) ?
					'new-url-input valid' :
					'new-url-input invalid';

		return (
			<div className='listing-item'>
				{
					// Icons
				}
				<div className='listing-icons' style={editing ? {top:'-30px'} : {top: 0}}>
					<div className='icon' onClick={this.onEdit} >
						<EditIcon height={14} />
					</div>
					<div className='icon' onClick={this.onDelete} >
						<TrashIcon height={14} />
					</div>
				</div>

				<div className='listing-icons editing-icons' style={editing ? {top:0, opacity:1} : {top:'-30px'}}>
					<div className='icon' onClick={this.cancelEdit} >
						<CloseIcon height={14} />
					</div>
					<div
						className={(this._canSave()) ? 'icon' : 'icon disabled'}
						onClick={this.saveEdit}
					>
						<CheckIcon height={14} />
					</div>
				</div>

				{
					// Card content
				}
				<a
					className={editing ? 'content-container hide' : 'content-container'}
					target='_blank'
					href={url}
				>
					<div className='listing-title no-wrap'>{title}</div>
					<div className='listing-url no-wrap'>{url}</div>
				</a>

				<div className={editing ? 'input-container show' : 'input-container'}>
					<input
						type='text'
						value={newNameValue}
						className={nameInputClass}
						placeholder='Name'
						onChange={ this.handleNameEdit }
						onKeyDown={this.handleKeyDown}
					/>
					<input
						type='text'
						value={newUrlValue}
						className={urlInputClass}
						placeholder='URL'
						onChange={ this.handleUrlEdit }
						onKeyDown={this.handleKeyDown}
					/>
				</div>

			</div>
		);
	}
}

export default ListingItem;