import React from 'react';
import './cellDisplay.css';

export default function NightSchool({type, credit, cash}) {
	let title = ''
	let price = 0;
	let paper = '';
	if (type === 'lower') {
		title = 'NIGHT SCHOOL DIPLOMA';
		price = 50;
		paper = 'diploma'
	} else {
		title = 'UNIVERSITY DEGREE';
		price = 200;
		paper = 'degree';
	}
	return (
		<div className="nightSchool">
			<h2 className="schoolTitle">{title}</h2>
			<p className="schoolPrice">Pay ${price} tuition, receive {paper}</p>
			<button className='schoolBtn' onClick={() => credit(price)}>CREDIT</button>
			<button className='schoolBtn' onClick={() => cash(price)}>CASH</button>
		</div>
	);
}