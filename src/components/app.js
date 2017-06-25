import React, {Component} from 'react';
import PageWrapper from './page-wrapper';
import PageTitle from './page-title';
import AddForm from './add-form';
import ListingList from './listing-list';
import Notification from './notification';
import {
	getListings
} from '../utils/fetch';


export default class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			listings: [],
			notification: {title: '', type: null, id: 1},
		};

		this.afterAdd = this.afterAdd.bind(this);
		this.afterChange = this.afterChange.bind(this);
		this.addNotification = this.addNotification.bind(this);
	}

	//============================
	// TODO:
	//-----------
	// 'Working' state during fetches

	// X Form validation
	// X - Disable button/enable
	// Submittal feedback
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

	afterChange() {
		this.fetchData();
	}

	addNotification(notifyObj) {
		notifyObj.id = this.state.notification.id + 1;
		this.setState({notification: notifyObj});
	}


	componentDidMount() {
		this.fetchData();
	}

	render() {
		const {
			listings,
			notification
		} = this.state;

		return (
			<PageWrapper>

				<PageTitle
					title='Listings'
				/>

				<AddForm
					afterAdd={this.afterAdd}
					addNotification={this.addNotification}
				/>

				<ListingList
					listings={listings}
					afterChange={this.afterChange}
					addNotification={this.addNotification}
				/>

				<Notification
					title={notification.title}
					type={notification.type}
					id={notification.id}
				/>

			</PageWrapper>
		)
	}
}