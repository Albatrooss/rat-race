import React from 'react';
import './cellDisplay.css';

export default function Dad({type, roll, claim}) {
	let title = '';
	let para = '';
	let reward = 0;
	let dice = null;
	let multiplier = 0;
	if (type === 'dad') {
		title = 'GIFT FROM DAD'
		para = 'Collect $100';
		reward = 100;
	} else if (type === 'footballLower') {
		title = 'FOOTBALL POOL'
		para = 'Winnings of $20 times roll of both dice';
		dice = <div className='dice' onClick={() => roll(multiplier)}>
			<div className="dadD01"><img src="/assets/dice-01.png" alt='' /></div>
			<div className="dadD02"><img src="/assets/dice-01.png" alt='' /></div>
		</div>
		multiplier = 20;
	} else if ( type === 'bingo') {
		title = 'GOOD NIGHT AT BINGO';
		para = 'Collect $100';
		reward = 100;
	} 
	return (
		<div className="dad">
			<h2 className="schoolTitle">{title}</h2>
			<p className="schoolPrice" onclick={claim(reward)}>{para}</p>
			{dice}
		</div>
	);
}