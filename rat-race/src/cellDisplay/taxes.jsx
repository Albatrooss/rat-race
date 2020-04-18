import React from 'react';

export default function Taxes({ type, click }) {
	let amount = 0;
	if (type === 'lower') {
		amount = 10;
	} else if (type === 'middle') {
		amount = 100;
	} else if (type === 'upper') {
		amount = 1000;
	}
	return (
		<div className='taxes'>
			<h2 className='taxesTitle'>TAXES DUE</h2>
			<h4 className='taxesPrice'>Pay {amount} times the roll of both dice</h4>
			<input id='taxesInput' type='text' placeholder='ROLL' />
			<button className='taxesBtn' onClick={() => click(amount)}>PAY</button>
		</div>
	);
}