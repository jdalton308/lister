import React, {Component} from 'react';
import PageWrapper from './page-wrapper';
import PageTitle from './page-title';
import AddForm from './add-form';
import ListingList from './listing-list';


export default class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {};
	}

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


	render() {
		return (
			<PageWrapper>

				<PageTitle title='Listings' />
				<AddForm />
				<ListingList />

			</PageWrapper>
		)
	}
}