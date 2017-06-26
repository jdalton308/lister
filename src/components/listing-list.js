import React, {PropTypes} from 'react';
import ListingItem from './listing-item';


function compareTitles(a, b) {
	return (a.attributes.title < b.attributes.title) ? -1 :
		(a.attributes.title > b.attributes.title) ? 1 : 0;
}


const ListingList = ({listings, afterChange, addNotification}) => (

	<div className='listing-list'>

		{ listings.length ?
			listings
				.sort(compareTitles)
				.map((item) => {
					const {
						attributes: {
							title,
							url,
						},
						id,
						type
					} = item;

					return (
						<ListingItem
							key={id}
							title={title}
							url={url}
							id={id}
							type={type}
							afterChange={afterChange}
							addNotification={addNotification}
						/>
					);
				})
			:
			<div className='no-listings'>
				No listings created yet
			</div>
		}

	</div>
);

ListingList.propTypes = {
	listings: PropTypes.array,
	afterChange: PropTypes.func,
	addNotification: PropTypes.func,
};


export default ListingList;