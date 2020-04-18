import React from 'react';

export default function Wedding( {type, click} ) {
	let message = '';
	if (type === 'lower') {
		message = 'Move to Middle Class'
	} else {
		message = 'Move to High Society'
	}
	return (
		<div className='wedding'>
			<h2 className='weddingTitle'>SOCIETY WEDDING</h2>
			<h4 className='weddingPrice'>{message}</h4>
			<button className='welfareBtn' onClick={() => click()}>I DO</button>
		</div>
	);
}