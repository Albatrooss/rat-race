import React from 'react';

export default function BlackMarket({ props, sell, goUp }) {
	const niceColor = (uglyColor) => {
			let color = '';
			if (uglyColor === 'red') {
				color = '#FF5151';
			} else if (uglyColor === 'blue') {
				color = '#497CF1';
			} else if (uglyColor === 'green') {
				color = '#3AC414';
			} else if (uglyColor === 'brown') {
				color = '#C68A09';
			} else if (uglyColor === 'olive') {
				color = '#9EC243';
			} else {
				color = '#d8d8d8';
			}
			return color
		}
	let prop = props.map(prop => {
		return (
			<div key={prop.color + prop.value} className='bMarketProp' style={{background: niceColor(prop.color)}}>
				{prop.color.toUpperCase()}<br />${prop.value}
				<input type='text' className='bMarketInput' id={`${prop.color}MarketPrice`} placeholder='PRICE' />
				<select type='text' className='bMarketInput' id={`${prop.color}MarketUser`} >
					<option value='red'>RED</option>
					<option value='blue'>BLUE</option>
					<option value='green'>GREEN</option>
					<option value='black'>BLACK</option>
					<option value='brown'>BROWN</option>
					<option value='olive'>OLIVE</option>
					<option value='bank'>BANK</option>
				</select>
				<button id={`${prop.color}PropBtn`} onClick={() => sell(prop)}>SELL</button>
			</div>
		)
	})
	return (
		<div className='blackMarket'>
			<h2 className='marketTitle'>BLACK MARKET</h2>
			<div className='row'>
				{prop}
			</div>
			<button className='bMarketBtn' onClick={goUp}>GO UP</button>
		</div>
	);
}