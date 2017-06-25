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

		this.afterAdd = this.afterAdd.bind(this);
		this.afterDelete = this.afterDelete.bind(this);
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

	// X Get the data after mounting
	// X- Null state
	// X Pass 'delete' function to cards
	// X Pass 'add' function to form, then re-fetch data
	// Pass 'edit' function to cards
	// - Create 'edit' mode of cards
	// 'Working' state during fetches

	// Form validation and feedback
	// - Disable button/enable
	// Handle server error

	// Secure the auth token

	//===========================

	fetchData() {
		getListings()
			.then((response) => {
				this.setState({
					listings: response.data
				});
			})
			.catch((error) => {
				console.log(`Error fetching data: ${error}`);
			});
	}

	afterAdd() {
		this.fetchData();
	}

	afterDelete() {
		this.fetchData();
	}


	componentDidMount() {
		this.fetchData();
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

				<AddForm
					afterAdd={this.afterAdd}
				/>

				<ListingList
					listings={listings}
					afterDelete={this.afterDelete}
				/>

			</PageWrapper>
		)
	}
}