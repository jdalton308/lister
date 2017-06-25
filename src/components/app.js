
import React, {Component} from 'react';


export default class App extends Component {
	render() {
		return (
			<div>
				<h1 className='page-title'>
					Listings
				</h1>

				<div className='page-wrapper'>
					<form className='add-listing-form'>
						<div className='inputs-container'>
							<input
								type='text'
								value={null}
								className='title-input'
								placeholder='Name'
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

					<div className='listing-list'>

						<div className='listing-item'>
							<div className='listing-icons'>
								<div className='icon'>e</div>
								<div className='icon'>x</div>
							</div>
							<div className='listing-title'>Dolor Ipsum</div>
							<div className='listing-url'>www.doloripsum.com</div>
						</div>

						<div className='listing-item'>
							<div className='listing-icons'>
								<div className='icon'>e</div>
								<div className='icon'>x</div>
							</div>
							<div className='listing-title'>Dolor Ipsum</div>
							<div className='listing-url'>www.doloripsum.com</div>
						</div>

						<div className='listing-item'>
							<div className='listing-icons'>
								<div className='icon'>e</div>
								<div className='icon'>x</div>
							</div>
							<div className='listing-title'>Dolor Ipsum</div>
							<div className='listing-url'>www.doloripsum.com</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
}