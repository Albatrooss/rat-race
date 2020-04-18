import React from 'react';

export default function Funeral({ click }) {
	return (
		<div className='funeral'>
			<h2 className='funeralTitle'>GRANDMA'S FUNERAL</h2>
			<h4 className='funeralPrice'>Inherit $200<br />Miss a turn<br />Business closed</h4>
			<button className='funeralBtn' onClick={() => click(200)} >COLLECT</button>
		</div>
	);
}