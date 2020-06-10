import React from 'react';
import './App.css';


const Card = (props) => {
	const {id, name, email, fbid, instaid, twitid, gitid} = props;
	return(

		<div className="bg-pink dib br3 grow pa3 ma2 shadow-5 tc">
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
			
			
		</div>
	);
}
export default Card;