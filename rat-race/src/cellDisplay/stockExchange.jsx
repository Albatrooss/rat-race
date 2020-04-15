import React from 'react';
import './cellDisplay.css';

export default function StockExchange({roll, sell}) {
	return (
		<div className="stockExchange">
			<h2 className='stockTitle'>STOCK EXCHANGE</h2>
			<div className='row'>
				<div className='stockCol01'>2</div>
				<div className='stockCol02'><p className='loseGain'>Lose Total</p></div>
				<div className='stockCol01'>3</div>
				<div className='stockCol02'><p className='loseGain'>Keep $50</p></div>
			</div>
			<div className='row'>
				<div className='stockCol01'>4</div>
				<div className='stockCol02'><p className='loseGain'>Lose 3/4</p></div>
				<div className='stockCol01'>5</div>
				<div className='stockCol02'><p className='loseGain'>Lose 1/2</p></div>
			</div>
			<div className='row'>
				<div className='stockCol01'>6</div>
				<div className='stockCol02'><p className='loseGain'>Lose 1/4</p></div>
				<div className='stockCol01'>7</div>
				<div className='stockCol02'><p className='loseGain'>Regain 100%</p></div>
			</div>
			<div className='row'>
				<div className='stockCol01'>8</div>
				<div className='stockCol02'><p className='loseGain'>Regain 150%</p></div>
				<div className='stockCol01'>9</div>
				<div className='stockCol02'><p className='loseGain'>Regain 200%</p></div>
			</div>
			<div className='row'>
				<div className='stockCol01'>10</div>
				<div className='stockCol02'><p className='loseGain'>Regain 300%</p></div>
				<div className='stockCol01'>11</div>
				<div className='stockCol02'><p className='loseGain'>Regain 600%</p></div>
			</div>
			<div className='row'>
				<div className='stockCol01'>12</div>
				<div className='stockCol02'><p className='loseGain'>Regain 1100%</p></div>
				<input type="text" id='stockInput' placeholder="AMOUNT" />
			</div>
			<div className="row">
				<div className='stockD01' onClick={roll}><img src='/assets/dice-01.png' alt='' /></div>
				<div className='stockD02' onClick={roll}><img src='/assets/dice-01.png' alt='' /></div>
				<div className='stockBtn'><p onClick={sell}>SELL</p></div>
			</div>
		</div>
	);
}