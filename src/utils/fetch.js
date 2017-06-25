
const requestUrl = 'http://clientside-api.herokuapp.com';
const authToken = 'e7f14228619a2662470125d99c89541d';

const ourHeaders = new Headers({
	'Authorization': authToken,
	'Content-Type': 'application/json'
});



// GET Listings
//----------------
const getUrl = `${requestUrl}/api/v1/listings`;
const getOptions = {
	method: 'GET',
	headers: ourHeaders,
	mode: 'cors',
};

export function getListings() {
	return fetch(getUrl, getOptions)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Network error when fetching data')
		});
};



// POST New listing
//--------------------
const postUrl = `${requestUrl}/api/v1/listings`;

export function postListing(newData) {
	const postOptions = {
		method: 'POST',
		headers: ourHeaders,
		body: JSON.stringify(newData),
	};

	return fetch(postUrl, postOptions)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Network error when posting data')
		});
}



// DELETE a listing
//--------------------
const deleteOptions = {
	method: 'DELETE',
	headers: new Headers({
		'Authorization': authToken,
	}),
};

export function deleteListing(id) {
	if (!id) {
		return null;
	}

	const deleteUrl = `${requestUrl}/api/v1/listings/${id}`;

	return fetch(deleteUrl, deleteOptions)
		.then((response) => {
			if (response.ok) {
				return response;
			}
			throw new Error('Network error when deleting data')
		});
}