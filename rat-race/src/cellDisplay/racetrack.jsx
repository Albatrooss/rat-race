import React from 'react';

export default function RaceTrack({ win, submitBet, start }) {
	
	return (
		<div className='raceTrack'>
			<h2 className='raceTitle'>RACETRACK</h2>
			<div className='row'>
				<div className='raceBox' id='redDiv' style={{background: '#FF5151'}} onClick={() => win('red')}>
					<input className ='horse' type='number' id='redHorse' placeholder='#' />
					<input className='raceBet' type='text' id='redBet' placeholder='$$$' />
					<button className='raceSubBtn' style={{background: '#FF5151'}} onClick={() => submitBet('red')}>OK</button>
				</div>
				<div className='raceBox' id='blackDiv' style={{background: '#d8d8d8'}} onClick={() => win('black')}>
					<input className ='horse' type='number' id='blackHorse' placeholder='#' />
					<input className='raceBet' type='text' id='blackBet' placeholder='$$$' />
					<button className='raceSubBtn' style={{background: '#d8d8d8'}} onClick={() => submitBet('black')}>OK</button>
				</div>
			</div>
			<div className='row'>
				<div className='raceBox' id='blueDiv' style={{background: '#497CF1'}} onClick={() => win('blue')}>
					<input className ='horse' type='number' id='blueHorse' placeholder='#' />
					<input className='raceBet' type='text' id='blueBet' placeholder='$$$' />
					<button  className='raceSubBtn' style={{background: '#497CF1'}}onClick={() => submitBet('blue')}>OK</button>
				</div>
				<div className='raceBox' id='brownDiv' style={{background: '#C68A09'}} onClick={() => win('brown')}>
					<input className ='horse' type='number' id='brownHorse' placeholder='#' />
					<input className='raceBet' type='text' id='brownBet' placeholder='$$$' />
					<button className='raceSubBtn' style={{background: '#C68A09'}} onClick={() => submitBet('brown')}>OK</button>
				</div>
			</div>
			<div className='row'>
				<div className='raceBox' id='greenDiv' style={{background: '#3AC414'}} onClick={() => win('green')}>
					<input className ='horse' type='number' id='greenHorse' placeholder='#' />
					<input className='raceBet' type='text' id='greenBet' placeholder='$$$' />
					<button className='raceSubBtn' style={{background: '#3AC414'}} onClick={() => submitBet('green')}>OK</button>
				</div>
				<div className='raceBox' id='oliveDiv' style={{background: '#9EC243'}} onClick={() => win('olive')}>
					<input className ='horse' type='number' id='oliveHorse' placeholder='#' />
					<input className='raceBet' type='text' id='oliveBet' placeholder='$$$' />
					<button className='raceSubBtn' style={{background: '#9EC243'}} onClick={() => submitBet('olive')}>OK</button>
				</div>
			</div>
			<button className='startRaceBtn' onClick={start}>AND THEY'RE OFF!</button>
		</div>
	);
}