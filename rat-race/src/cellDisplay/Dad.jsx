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
				<button className="dadBtn" onClick={() => claim(100)}>CLAIM</button>
			</div>
	} else if ( type === 'bingo') {
		title = 'GOOD NIGHT AT BINGO';
		para = 'Collect $100';
		claimDiv = <div className='dice'>
				<button className="dadBtn" onClick={() => claim(100)}>CLAIM</button>
			</div>
	} else if (type === 'uncle') {
		title = 'RICH UNCLE';
		para = 'leaves you $500'
		claimDiv = <div className='dice'>
				<button className="dadBtn" onClick={() => claim(500)}>CLAIM</button>
			</div>
	}
	
	return (
		<div className="dad">
			<h2 className="dadTitle">{title}</h2>
			<p className="dadPrice">{para}</p>
			{claimDiv}
		</div>
	);
}