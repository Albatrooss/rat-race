import React from 'react';

export default function Lottery({claim, indeed, start }) {
	
	return (
		<div className='lottery'>
			<h2 className="displayTitle">LOTTERY</h2>
			<div className="row">
				<input type='text' id='lottoBet' placeholder='BET' />
				<button className='startLotto' onClick={start}>START</button>
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('red')} style={{background: '#FF5151'}}>					
					<button className='lottoOut' id='redLotto' style={{background: '#FF5151'}} onClick={() => indeed('red')}>OUT</button>
					<p>RED</p>
				</div>
				<div className='lottoRoll' onClick={() => claim('black')} style={{background: '#d8d8d8'}}>		
					<button className='lottoOut' id='blackLotto' style={{background: '#d8d8d8'}} onClick={() => indeed('black')}>OUT</button>
					<p>BLACK</p>
				</div>
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('blue')} style={{background: '#497CF1'}}>					
					<button className='lottoOut' id='blueLotto' style={{background: '#497CF1'}} onClick={() => indeed('blue')}>OUT</button>
					<p>BLUE</p>
				</div>
				<div className='lottoRoll' onClick={() => claim('brown')} style={{background: '#C68A09'}}>					
					<button className='lottoOut' id='brownLotto' style={{background: '#C68A09'}} onClick={() => indeed('brown')}>OUT</button>
					<p>BROWN</p>
				</div>
			</div>
			<div className='row'>
				<div className='lottoRoll' onClick={() => claim('green')} style={{background: '#3AC414'}}>					
					<button className='lottoOut' id='greenLotto' style={{background: '#3AC414'}} onClick={() => indeed('green')}>OUT</button>
					<p>GREEN</p>
				</div>
				<div className='lottoRoll' onClick={() => claim('olive')} style={{background: '#9EC243'}}>					
					<button className='lottoOut' id='oliveLotto' style={{background: '#9EC243'}} onClick={() => indeed('olive')}>OUT</button>
					<p>OLIVE</p>
				</div>
			</div>
		</div>
	);
}