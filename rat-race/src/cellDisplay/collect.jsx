import React from 'react';

export default function Collect({ type, click }) {
	let amount = 0;
	if (type === 'lower') {
		amount = 200;
	} else if (type === 'lower') {
		amount = 1000;
	} else {
		amount = 10000;
	}
	return(
		<div className='collect' onClick={click(amount)}>
			<h2 className='collectTitle'>{`COLLECT $${amount}`}</h2>
			<h4 className='collectPrice'>Wages as you pass</h4>
			<button className='collectBtn' onClick={() => click(amount)}>COLLECT</button>
		</div>
	);
}