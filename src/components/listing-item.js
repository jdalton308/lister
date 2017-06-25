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


class ListingItem extends Component {

	static propTypes = {
		title: PropTypes.string,
		url: PropTypes.string,
		id: PropTypes.string,
		type: PropTypes.string,
		afterChange: PropTypes.func,
	};

	static defaultProps = {
		afterChange: () => {},
	};

	constructor(props) {
		super(props);

		this.state = {
			editing: false,
			newNameValue: props.title,
			newUrlValue: props.url,
		};

		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.saveEdit = this.saveEdit.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
	}

	// TODO:
	// ---------
	// X Icons
	// Allow edits
	// - Create editing state
	// - Allow save

	onDelete(e) {
		deleteListing(this.props.id)
			.then((response) => {
				this.props.afterChange();
			})
			.catch((error) => {
				console.log(`Error deleting data: ${error}`);
			});
	}

	onEdit(e) {
		this.setState({editing: true});
	}

	saveEdit(e) {
		const {
			newNameValue,
			newUrlValue
		} = this.state;

		const {
			id,
			afterChange
		} = this.props;
		
		const newData = createItem(newNameValue, newUrlValue);

		updateListing(id, newData)
			.then((response) => {
				// console.log('Update response: ', response);
				afterChange();
				this.setState({editing: false});
			})
			.catch((error) => {
				console.log(`Error updating data: ${error}`);
				this.setState({editing: false});
			});

			// TODO:
			// - Show success/fail messaging
	}

	cancelEdit(e) {
		this.setState({
			editing: false,
			newNameValue: this.props.title,
			newUrlValue: this.props.url,
		});
	}


	render() {
		const {
			editing,
			newNameValue,
			newUrlValue,
		} = this.state;

		const {
			title,
			url,
			id,
			type
		} = this.props;

		return (
			<div className='listing-item'>
				{
					// Icons
				}
				<div className='listing-icons' style={editing ? {top:'-30px'} : {top: 0}}>
					<div
						className='icon'
						onClick={this.onEdit}
					>
						<EditIcon height={14} />
					</div>
					<div 
						className='icon'
						onClick={this.onDelete}
					>
						<TrashIcon height={14} />
					</div>
				</div>

				<div className='listing-icons editing-icons' style={editing ? {top:0} : {top:'-30px'}}>
					<div 
						className='icon'
						onClick={this.cancelEdit}
					>
						<CloseIcon height={14} />
					</div>
					<div
						className='icon'
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
						className='new-title-input'
						placeholder='Name'
						onChange={ (e) => this.setState({newNameValue: e.target.value}) }
					/>
					<input
						type='text'
						value={newUrlValue}
						className='new-url-input'
						placeholder='URL'
						onChange={ (e) => this.setState({newUrlValue: e.target.value}) }
					/>
				</div>

			</div>
		);
	}
}

export default ListingItem;