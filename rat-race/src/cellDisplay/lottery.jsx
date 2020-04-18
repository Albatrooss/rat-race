import React from 'react';

export default function Lottery({claim}) {
	
	return (
		<div className='lottery'>
			<h2 className="displayTitle">LOTTERY</h2>
			<div className="row">
				<input type='text' id='lottoBet' placeholder='BET' />
				<input type='text' id='lottoPlayers' placeholder='PLAYERS' />
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('red')} style={{background: '#FF5151'}}><p>RED</p></div>
				<div className='lottoRoll' onClick={() => claim('black')} style={{background: '#d8d8d8'}}><p>BLACK</p></div>
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('blue')} style={{background: '#497CF1'}}><p>BLUE</p></div>
				<div className='lottoRoll' onClick={() => claim('brown')} style={{background: '#C68A09'}}><p>BROWN</p></div>
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('green')} style={{background: '#3AC414'}}><p>GREEN</p></div>
				<div className='lottoRoll' onClick={() => claim('olive')} style={{background: '#9EC243'}}><p>OLIVE</p></div>
			</div>
		</div>
	);
}