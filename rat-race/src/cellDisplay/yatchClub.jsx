import React from 'react';

export default function YatchClub({ type, click}) {
		let title = ''
	let price = 0;
	if (type === 'lower') {
		title = 'COUNTRY CLUB';
		price = 50;
	} else {
		title = 'YATCH CLUB';
		price = 200;
	}
	return (
		<div className="yatchClub">
			<h2 className="clubTitle">{title}</h2>
			<p className="clubPrice">Pay ${price} initiation fee, receive Membership Card</p>
			<button className='clubBtn' onClick={() => click(price)}>BUY</button>
		</div>
	);
}