import React, {Component} from 'react';


class ListingItem extends Component {
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
		return (
			<div className='listing-item'>
				<div className='listing-icons'>
					<div className='icon'>e</div>
					<div className='icon'>x</div>
				</div>
				<div className='listing-title no-wrap'>Dolor Ipsum</div>
				<div className='listing-url no-wrap'>www.doloripsum.com</div>
			</div>
		);
	}
}

export default ListingItem;