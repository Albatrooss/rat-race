import React from 'react';

export default function Welfare( {type, click} ) {
	let amount = 0;
	if (type === 'ei') {
		amount = 10;
	} else {
		amount = 50;
	}
	return (
		<div className='welfare'>
			<h2 className='welfareTitle'>UNIMPLOYMENT INSURANCE PAYMENT</h2>
			<h4 className='welfarePrice'>{`${amount} times the roll of one die`}</h4>
			<input type='text' id='welfareInput' placeholder='ROLL' />
			<button className='welfareBtn' onClick={() => click(amount)}>PAY</button>
		</div>
	);
}