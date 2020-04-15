import React, { useState, useEffect } from 'react';
import './App.css';
import initialzeBoard from './board';

import Board from './board/board';
import Display from './display/display.jsx';
import User from './user/user';
import Default from './cellDisplay/default';
import Property from './cellDisplay/property';
import StockExchange from './cellDisplay/stockExchange';
import NightSchool from './cellDisplay/nightSchool';
import Dad from './cellDisplay/Dad';
import Lottery from './cellDisplay/lottery';

const App = () => {

	const [lower, setLower] = useState(initialzeBoard().lower);
	const [middle, setMiddle] = useState(initialzeBoard().middle);
	const [upper, setUpper] = useState(initialzeBoard().upper);
	const [users, setUsers] = useState(initialzeBoard().users);
	const [display, setDisplay] = useState(Default)
	
	let roll = 9
	let doubleRolld = 0;
	let rolls = 0;
	let clickable = true;
	let lottoCount = 0;
	let lottoRolls = [0, 0, 0, 0, 0, 0];
	// Piece Movement
	
	const moveRoll = () => {
		let turn = users.find(x => x.turn).color;
		console.log(turn)
//		roll = Math.floor(Math.random() * (6)) + 1;
		rolls = 0;
		clickable = true;
		let die = document.querySelector('#roll');
		die.innerHTML = `<img src="/assets/dice-0${roll}.png">`;
		let temp = []
		if (turn.level === 'lower'){
			temp = lower;	
			setLower(movePiece(temp));
		}
		else if (turn.level === 'middle'){
			temp = middle;
			setMiddle(movePiece(temp));
		}
		else if (turn.level === 'upper'){
			temp = upper;
			setUpper(movePiece(temp));
		}
		nextTurn();
	};
	
	const movePiece = (temp) => {
		let currentCell = temp.find(cell => cell.pieces.includes(turn.color));
		let i = users.findIndex(x => x.color === turn.color);
		currentCell.pieces[i] = null;
		let newCell = currentCell.id + roll;
		if (newCell > temp.length - 1) { newCell = newCell - temp.length; }
		temp[newCell].pieces[i] = turn.color;
		displayCell(temp, newCell);
		return temp;
	}
	
	const nextTurn = () => {
		let i = users.findIndex(x => x.color === turn.color);
		let next = {};
		if (i === 5) {
			next = users[0];
		} else {
			next = users[i + 1];
		}
		if (i === 0) {
			users[5].highlighted = false;
		} else if (i > 0) {
			users[i - 1].highlighted = false;
		} else {
			users[0].highlighted = true;
		}
		turn.highlighted = true;
		setTurn(next);
	}
	
		const goUp = () => {
		if (turn.level === 'lower') {
			setTurn({color: turn.color, level: 'middle'});
			let tempM = middle;
			let i = users.findIndex(x => x.color === turn.color);
			let tempO = users;
			tempO[i].level = 'middle';
			setTurn(tempO);
			setUsers(tempO);
			tempM[0].pieces[i] = turn.color;
			setMiddle(tempM);
			let tempL = lower;
			let current = tempL.find(x => x.pieces.includes(turn.color));
			current.pieces[i] = null;
			setLower(tempL)
		} else if (turn.level === 'middle') {
			setTurn({color: turn.color, level: 'upper'});
			let tempU = upper;
			let i = users.findIndex(x => x.color === turn.color);
			let tempO = users;
			tempO[i].level = 'upper';
			setUsers(tempO);
			tempU[0].pieces[i] = turn.color;
			setUpper(tempU);
			let tempM = middle;
			let current = tempM.find(x => x.pieces.includes(turn.color));
			current.pieces[i] = null;
			setMiddle(tempM)
		}
	}
	

	//Buying Properties
	
	const creditProperty = (color, price) => {
		let props = turn.props;
		if (turn.color !== color && turn.props.length < 3 && props.findIndex(x => x.color === color) === -1) {
			console.log(turn.props.includes(x => x.color === color))
			let buyer = users.findIndex(x => x.color === turn.color)
			let seller = users.findIndex(x => x.color === color);
			users[buyer].credit += price;
			users[seller].bank += price;
			displayProp(color, price);
		}
	}	
	const cashProperty = (color, price) => {
		let props = turn.props;
		if (turn.color !== color && turn.props.length < 3 && props.findIndex(x => x.color === color) === -1) {
			let buyer = users.findIndex(x => x.color === turn.color)
			let seller = users.findIndex(x => x.color === color);
			users[buyer].bank -= price;
			users[seller].bank += price;
			displayProp(color, price);
		}
	}
	
	const displayProp = (color, price) => {
		turn.props = [...turn.props, {color: color, value: price}]
		nextTurn();	
	}
	
	//Stock Exchange
	
	const stockRoll = () => {
		if (rolls < 3){
			let roll01 = Math.floor(Math.random() * 6) + 1;
			let roll02 = Math.floor(Math.random() * 6) + 1;
			document.querySelector('.stockD01').innerHTML = `<img src='/assets/dice-0${roll01}.png' />`;
			document.querySelector('.stockD02').innerHTML = `<img src='/assets/dice-0${roll02}.png' />`;
			doubleRolld = roll01 + roll02;
			rolls++;
		}
		console.log('hello')
	}
	
	const sellStock = () => {
		if (clickable) {
			let bet = document.querySelector('#stockInput').value;
			let winnings = stockVal(bet) - bet;
			turn.bank += winnings
			clickable = false;
			console.log(winnings)
		}
	}
	
	const stockVal = (bet) => {
		if (doubleRolld === 2) {
			return 0;
		} else if (doubleRolld === 3) {
			return 50;
		} else if (doubleRolld === 4) {
			return round(Math.floor(bet * 0.25));
		} else if (doubleRolld === 5) {
			return round(Math.floor(bet * 0.5));
		} else if (doubleRolld === 6) {
			return round(Math.floor(bet * 0.75));
		} else if (doubleRolld === 7) {
			return bet;
		} else if (doubleRolld === 8) {
			return Math.floor(bet * 1.5);
		} else if (doubleRolld === 9) {
			return Math.floor(bet * 2);
		} else if (doubleRolld === 10) {
			return Math.floor(bet * 3);
		} else if (doubleRolld === 11) {
			return Math.floor(bet * 6);
		} else {
			return Math.floor(bet * 11);
		}
	} 
	
	const round = (num) => {
		let remainder = num % 50
		if (remainder >= 25) {
			return num - remainder + 50;
		} else {
			return num - remainder;
		}
	}
	
	//NIGHT SCHOOL
	
	const buyDiploma = (price) => {
		turn.degree = 'dip';
		turn.bank = turn.bank - price;
		nextTurn();
	}
	
	// GIFT FROM DAD
	
	const dadRoll = (multiplier) => {
		if (rolls === 0) {
			let roll01 = Math.floor(Math.random() * 6) + 1;
			let roll02 = Math.floor(Math.random() * 6) + 1;
			document.querySelector('.dadD01').innerHTML = `<img src='/assets/dice-0${roll01}.png' />`;
			document.querySelector('.dadD02').innerHTML = `<img src='/assets/dice-0${roll02}.png' />`;
			doubleRolld = roll01 + roll02;
			turn.bank += round((doubleRolld * multiplier));
			rolls++;
		}
	}
	
	const dadClaim = (amount) => {
		turn.bank += amount;
	}
	
	//Lottery
	
	const lottery = () => {
		if (lottoCount < 6) {
			let roll01 = Math.floor(Math.random() * 6) + 1;
			let roll02 = Math.floor(Math.random() * 6) + 1;
			lottoRolls[lottoCount] = roll01 + roll02;
			document.querySelector(`#${users[lottoCount].color}Roll`).innerHTML = `<img src='/assets/dice-0${roll01}.png' /><img src='/assets/dice-0${roll02}.png' />`
			lottoCount++;
		} else {
			let bet = document.querySelector('#lottoBet').value;
			let winner = 0;
			for (let i = 1; i < 6; i++) {
				if (lottoRolls[i] > lottoRolls[i - 1]) {
					winner = i;
				}
			}
			users[winner].bank += 6 * bet;
		}
	}
	
	// Middle Display
	
	const displayCell = (level, id) => {
		let type = level[id].type;
		let price = 0;
		if (turn.level === 'lower') {
			price = 100;
		} else if (turn.level === 'middle') {
			price = 500;
		} else {
			price = 3000;
		}
		if (type === 'red' || type === 'blue' || type === 'green' || type === 'black' || type === 'brown' || type === 'olive'){
			setDisplay(Property({type: type, price: price, color: level[id].color, creditClick: creditProperty, cashClick: cashProperty}));
		} else if (type === 'stock') {
			setDisplay(StockExchange({roll: stockRoll, sell: sellStock}));
		} else if (type === 'nightSchool') {
			setDisplay(NightSchool({type: turn.level, click: buyDiploma}));
		} else if (type === 'dad' || type === 'uncle' || type === 'footballLower' || type === 'footballMiddle' || type === 'ascot' || type === 'bingo') {
			setDisplay(Dad({type: type, roll: dadRoll, claim: dadClaim}))
		} else if (type === 'lottery') {
			setDisplay(Lottery({roll: lottery}));
		}
			
	}
  return (
    <div className="App">
      <div className="gameWindow">
				<div className="left">
					<Board lower={lower} middle={middle} upper={upper} />
					<Display display={display}/>
				</div>
				<div className="right">
					<User user={users[0]} />
					<User user={users[1]} />
					<User user={users[2]} />
					<User user={users[3]} />
					<User user={users[4]} />
					<User user={users[5]} />		
					<button onClick={goUp}>Go Up</button>
					<button onClick={() => creditProperty('blue', 100)}>CREDIT</button>
					<div id='roll' onClick={moveRoll}><h2 className="start">START</h2></div>
				</div>
			</div>
    </div>
  );
}

export default App;
