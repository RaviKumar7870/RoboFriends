import React from 'react';
const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className = ' tc pa2'>

			<input 
				className='tc'
				type ='search' 
				placeholders = 'search robots'
				onChange = {searchChange}/>
		</div>
		);
}
export default SearchBox;