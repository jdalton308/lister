import React, {PropTypes} from 'react';
import ListingItem from './listing-item';


const ListingList = ({listings, afterChange}) => (

	<div className='listing-list'>

		{ listings.length ?
			listings.map((item) => {
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
					/>
				);
			})
			:
			// TODO: Style this...
			<div>
				No listings created yet
			</div>
		}

	</div>
);

ListingList.propTypes = {
	listings: PropTypes.array,
	afterChange: PropTypes.func,
};


export default ListingList;