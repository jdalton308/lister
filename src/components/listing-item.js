import React, {Component, PropTypes} from 'react';
import {
	TrashIcon,
	EditIcon
} from './icons';


class ListingItem extends Component {

	// static propTypes = {
	// 	data: PropTypes.object.isRequired,
	// };

	// static defaultProps = {
	// 	data: {
	// 		attributes: {
	// 			title: '',
	// 			url: '',
	// 		}
	// 	}
	// };

	constructor(props) {
		super(props);
		
		this.state = {};
	}

	// TODO:
	// ---------
	// Icons
	// Allow edits
	// - Create editing state
	// - Allow save

	onDelete(e) {
		e.stopPropagation();
	}

	onEdit(e) {
		e.stopPropagation();
	}


	render() {
		const {
			title,
			url,
			id,
			type
		} = this.props;

		return (
			<a
				className='listing-item'
				target='_blank'
				href={url}
			>
				<div className='listing-icons'>
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
				<div className='listing-title no-wrap'>{title}</div>
				<div className='listing-url no-wrap'>{url}</div>
			</a>
		);
	}
}

export default ListingItem;