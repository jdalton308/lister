import React from 'react';


export const TrashIcon = ({height}) => {
	return (
		<svg className='icon-base' fill="#000000" height={height} viewBox="0 0 24 24" width={height} xmlns="http://www.w3.org/2000/svg">
		    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	);
};



export const EditIcon = ({height}) => {
	return (
		<svg className='icon-base' fill="#000000" height={height} viewBox="0 0 24 24" width={height} xmlns="http://www.w3.org/2000/svg">
		    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	);
};



export const CloseIcon = ({height}) => {
	return (
		<svg className='icon-base' fill="#000000" height={height} viewBox="0 0 24 24" width={height} xmlns="http://www.w3.org/2000/svg">
		    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
		    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
	);
};



export const CheckIcon = ({height}) => {
	return (
		<svg className='icon-base' fill="#000000" height={height} viewBox="0 0 24 24" width={height} xmlns="http://www.w3.org/2000/svg">
		    <path d="M0 0h24v24H0z" fill="none"/>
		    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
		</svg>
	);
};