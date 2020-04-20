import React from 'react';

export default function Credit( {amount, color, pay, bankrupt} ) {
	
	return (
		<div className='creditDue'>
			<h2 className='creditTitle'>CREDIT DUE</h2>
			<h4 className='creditPrice'>Pay 10% interest</h4>
			<button className='creditBtn' onClick={pay}>PAY</button>
		</div>
	);
}