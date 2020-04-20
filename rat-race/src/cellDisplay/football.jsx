import React from 'react';
import './cellDisplay.css';

export default function Dad({type, roll, claim}) {
	let title = '';
	let para = '';
	let claimDiv = null;
	if (type === 'footballLower') {
		title = 'FOOTBALL POOL'
		para = 'Winnings of $20 times roll of both dice';
		claimDiv = <div className='football'>
			<input type='text' id='footballInput' placeholder='ROLL' />
			<button className="footballBtn" onClick={() => roll(20)}>CLAIM</button>
		</div>
	} else if (type === 'footballMiddle') {
		title = 'FOOTBALL POOL'
		para = 'Winnings of $100 times roll of both dice';
		claimDiv = <div className='football'>
			<input type='text' id='footballInput' placeHolder='ROLL' />
			<button className="footballBtn" onClick={() => roll(100)}>CLAIM</button>
		</div>
	}
	return (
		<div className="dad">
			<h2 className="footballTitle">{title}</h2>
			<p className="footballPrice">{para}</p>
			{claimDiv}
		</div>
	);
}