import React from 'react';

export default function Divorce({ type, click}) {
	let level = '';
	let amount = 0;
	if (type === 'divorceMiddle') {
		level = 'lower';
		amount = 100;
	} else if (type === 'divorceUpper') {
		level = 'middle';
		amount = 1000;
	}
	
	return (
		<div className='divorce'>
			<h2 className = 'divorceTitle'>DIVORCE</h2>
			<h4 className = 'divorcePrice'>{`Pay alimony ${amount} times roll of both dice`}<br />{`Return to ${level} class`}</h4>
			<input type='text' className='rollInput' id='divorceInput' placeholder='ROLL' />
			<button className='divorceBtn' onClick={() => click(amount)}>PAY</button>
		</div>
	);
}