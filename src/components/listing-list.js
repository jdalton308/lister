import React from 'react';
import ListingItem from './listing-item';


const ListingList = ({listings}) => (

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

export default ListingList;