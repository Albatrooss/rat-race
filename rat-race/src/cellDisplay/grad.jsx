import React from 'react';

export default function Start({ level }) {
	console.log(level);
	let para = ''
	if (level === 'start') {
		para = 'START HERE GRADUATION DAY';
	} else if (level === 'middleStart') {
		para = 'ENTER MIDDLE CLASS';
	} else if (level === 'upperStart') {
		para = 'ENTER HIGH SOCIETY';
	} 
	return (
		<div className='grad'>
			<h2 className='gradTitle'>{para}</h2>
		</div>
	);
}