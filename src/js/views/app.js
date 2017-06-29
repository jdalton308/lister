import React, {Component} from 'react';
import PageWrapper from '../components/page-wrapper';
import PageTitle from '../components/page-title';
import AddForm from '../components/add-form';
import ListingList from '../components/listing-list';
import Notification from '../components/notification';
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

		this.afterAdd = this._afterAdd.bind(this);
		this.afterChange = this._afterChange.bind(this);
		this.addNotification = this._addNotification.bind(this);
	}


	// Components Methods
	//----------------------

	_fetchData() {
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

	_afterAdd() {
		this._fetchData();
	}

	_afterChange() {
		this._fetchData();
	}

	_addNotification(notifyObj) {
		notifyObj.id = this.state.notification.id + 1;
		this.setState({notification: notifyObj});
	}


	// Lifecycle Methods
	//----------------------

	componentDidMount() {
		this._fetchData();
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