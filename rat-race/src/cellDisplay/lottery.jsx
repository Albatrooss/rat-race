import React from 'react';

export default function Lottery({roll}) {
	
	return (
		<div className='lottery'>
			<h2 className="displayTitle">LOTTERY</h2>
			<div className="row">
				<input type='text' id='lottoBet' placeholder='BET' />
				<button className='lottoBtn' onClick={() => roll()}>ROLL</button>
			</div>
			<div className='row'>
				<div className='lottoRoll' id='redRoll' style={{background: '#FF5151'}}></div>
				<div className='lottoRoll' id='blackRoll' style={{background: '#d8d8d8'}}></div>
			</div>
			<div className='row'>
				<div className='lottoRoll' id='blueRoll' style={{background: '#497CF1'}}></div>
				<div className='lottoRoll' id='brownRoll' style={{background: '#C68A09'}}></div>
			</div>
			<div className='row'>
				<div className='lottoRoll' id='greenRoll' style={{background: '#3AC414'}}></div>
				<div className='lottoRoll' id='oliveRoll' style={{background: '#9EC243'}}></div>
			</div>
		</div>
	);
}