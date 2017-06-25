import React, {Component, PropTypes} from 'react';


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


	render() {
		const {
			title,
			url,
			id,
			type
		} = this.props;

		return (
			<div className='listing-item'>
				<div className='listing-icons'>
					<div className='icon'>e</div>
					<div className='icon'>x</div>
				</div>
				<div className='listing-title no-wrap'>{title}</div>
				<div className='listing-url no-wrap'>{url}</div>
			</div>
		);
	}
}

export default ListingItem;