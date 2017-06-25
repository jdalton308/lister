
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