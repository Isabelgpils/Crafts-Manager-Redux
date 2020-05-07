import React from 'react';

const SearchBox = ({ onSearchChange }) => {
	return (
		<div className="ui action input">
			<input type="text" onChange={onSearchChange} placeholder="Search craft supplies" />
			<button className="ui button"> Search</button>
		</div>
	);
};
export default SearchBox;
