import React from 'react';
import './cellDisplay.css';

export default function Ascot({ click }) {
	
	return (
		<div className="dad">
			<h2 className="ascotTitle">ASCOT WINNGS</h2>
			<h4 className="ascotPrice">Ticket on Horse<br />Roll doubles--win<br />Grand Prize: $1000<br />Roll even number--<br />Win 2nd Prize: $200<br />Roll odd numbers--<br />win $50</h4>
			<button className='ascotBtn' onClick={() => click(1000)}>DOUBLES</button>
			<button className='ascotBtn' onClick={() => click(200)}>EVENS</button>
			<button className='ascotBtn' onClick={() => click(50)}>ODDS</button>
		</div>
	);
}