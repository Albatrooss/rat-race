import React from 'react';
import './cell.css';

function Cell({level, onclick, cell}) {
	
	if (cell) {
		let key = 0;
		let pieces = cell.pieces.map(piece => {
			return (
				<div className={`piece ${piece}`} key={`${piece} + ${key++}`} />
			);
		});
		const show = () => {
			console.log(cell.pieces)
		}
		return (
			<div className={level} style={{background: cell.color}} onClick={show}>
				<p className='lowerText'>{cell.text}</p>
				{pieces}
			</div>
		);
	} else return null;
}

export default Cell;