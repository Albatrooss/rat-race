import React from 'react';
import './cellDisplay.css';

export default function Dad({type, roll, claim}) {
	let title = '';
	let para = '';
	let claimDiv = null;
	if (type === 'dad') {
		title = 'GIFT FROM DAD'
		para = 'Collect $100';
		claimDiv = <div className='dice'>
				<button onClick={() => claim(100)}>CLAIM</button>
			</div>
	} else if (type === 'footballLower') {
		title = 'FOOTBALL POOL'
		para = 'Winnings of $20 times roll of both dice';
		claimDiv = <div className='dice'>
			<input type='text' id='footballInput' placeholder='ROLL' />
			<button onClick={() => roll(20)}>CLAIM</button>
		</div>
	} else if ( type === 'bingo') {
		title = 'GOOD NIGHT AT BINGO';
		para = 'Collect $100';
		claimDiv = <div className='dice'>
				<button onClick={() => claim(100)}>CLAIM</button>
			</div>
	} else if (type === 'footballMiddle') {
		title = 'FOOTBALL POOL'
		para = 'Winnings of $100 times roll of both dice';
		claimDiv = <div className='dice'>
			<input type='text' id='footballInput' placeHolder='ROLL' />
			<button onClick={() => roll(100)}>CLAIM</button>
		</div>
	} else if (type === 'uncle') {
		title = 'RICH UNCLE';
		para = 'leaves you $500'
		claimDiv = <div className='dice'>
				<button onClick={() => claim(500)}>CLAIM</button>
			</div>
	}
	
	return (
		<div className="dad">
			<h2 className="schoolTitle">{title}</h2>
			<p className="schoolPrice">{para}</p>
			{claimDiv}
		</div>
	);
}