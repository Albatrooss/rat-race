import React from 'react';
import './display.css';

export default function Display({ display, color, p1, p2 }) {
	return (
		<div className="displayContainer" style={{background: color}}>
			<h1>{display}</h1>
			<p className="firstP">{p1}</p>
			<p className="secondP">{p2}</p>
		</div>
	);
}