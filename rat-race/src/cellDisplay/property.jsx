import React from 'react';
import './cellDisplay.css';

export default function Property({type, price, color, creditClick, cashClick}) {
	return (
		<div className="cellDisplay" style={{background: color}}>
			<h2 className="propTitle">{type.toUpperCase()} PROPERTY</h2>
			<h2 className="propPrice">${price}</h2>
			<p>HOW WOULD YOU LIKE TO PAY?</p>
			<button className="buyPropBtn" onClick={() => creditClick(type, price)}>CREDIT</button>
			<button className="buyPropBtn" onClick={() => cashClick(type, price)}>CASH</button>
		</div>
	);
}
