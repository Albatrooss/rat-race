import React from 'react';
import './user.css'

function User({ user }) {
	
	if (user) {
		
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
		
		let level = user.level;
		level = level.charAt(0).toUpperCase() + level.slice(1);
		let key = 0;
		let props = user.props.map(prop => {
			return (
				<div key={user.username + key++} className='prop' style={{background: niceColor(prop.color)}}>{prop.value}</div>
			);
		});
		let uni = null;
		if (user.degree === 'uni') {
			uni = <div className='prop uniProp'><img src='/assets/diploma.jpeg' alt='' /></div>;
		} else if (user.degree === 'yatch') {
			uni = <div className='prop yatchProp'>YATCH CLUB</div>
		}
		

		let highlight = user.turn ? 'highlight' : '';
		return (
			<div className={`userContainer ${highlight}`} style={{background: niceColor(user.color)}}>
				<div className="row">
					<div className="propertyContainer">
						{props}
						{uni}
					</div>
					<div className="userName">
						<h2 className='userH2'>{user.username.toUpperCase()}</h2>
						<h4 className='classH4'>{level} Class</h4>
					</div>
				</div>
				<div className="bottomRow">
					<h4 className="credit">Credit: $<span className="creditNum">{user.credit}</span></h4>
					<h2 className="money">$<span className="moneyNum">{user.bank}</span></h2>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default User;