import React, {Component} from 'react';
import PageWrapper from './page-wrapper';
import PageTitle from './page-title';
import AddForm from './add-form';
import ListingList from './listing-list';

import {
	getListings
} from '../utils/fetch';


export default class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			listings: [],
		};
	}

	//============================
	// TODO:
	//-----------
	// Create components:
	// X- Title
	// X- Page wrapper
	// X- Form
	// X- Listing list
	// X- Listing item

	// Get the data after mounting
	// - Null state
	// Pass 'delete' function to cards
	// Pass 'add' function to form, then re-fetch data
	// Pass 'edit' function to cards
	// - Create 'edit' mode of cards

	// Form validation and feedback
	// - Disable button/enable
	// Handle server error

	// Secure the auth token

	//===========================

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		getListings()
			.then((response) => {
				console.log('Response: ', response);
				this.setState({
					listings: response.data
				});
			})
			.catch((error) => {
				console.log(`Error fetching data: ${error}`);
			});
	}


	render() {
		const {
			listings,
		} = this.state;

		return (
			<PageWrapper>

				<PageTitle
					title='Listings'
				/>

				<AddForm />

				<ListingList
					listings={listings}
				/>

			</PageWrapper>
		)
	}
}