import React, { useState, useEffect } from 'react';
import './App.css';
import initialzeBoard from './board';

import Board from './board/board';
import Display from './display/display.jsx';
import User from './user/user';
import Default from './cellDisplay/default';
import Grad from './cellDisplay/grad';
import Property from './cellDisplay/property';
import StockExchange from './cellDisplay/stockExchange';
import NightSchool from './cellDisplay/nightSchool';
import Dad from './cellDisplay/Dad';
import Lottery from './cellDisplay/lottery';
import RaceTrack from './cellDisplay/racetrack';
import YatchClub from './cellDisplay/yatchClub';
import Collect from './cellDisplay/collect';
import Welfare from './cellDisplay/welfare';
import Wedding from './cellDisplay/wedding';
import Taxes from './cellDisplay/taxes';
import Credit from './cellDisplay/credit';
import Funeral from './cellDisplay/funeral';
import Divorce from './cellDisplay/divorce';
import Ascot from './cellDisplay/ascot';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}


const App = () => {

	const [lower, setLower] = useState(initialzeBoard().lower);
	const [middle, setMiddle] = useState(initialzeBoard().middle);
	const [upper, setUpper] = useState(initialzeBoard().upper);
	const [users, setUsers] = useState(initialzeBoard().users);
	const [display, setDisplay] = useState(Default)
	const forceRender = useForceUpdate();
	const [turnOver, setTurnOver] = useState(false);
	
	let turnIndex = users.findIndex(x => x.turn);
	let turn = users[turnIndex];
	
	let roll = 1;
	let doubleRolld = 0;
	let rolls = 0;
	let clickable = true;	
	let raceBet = {};
	let raceHorse = {};
	let raceWinners = [];
	let landed = 0;
	
	// Piece Movement
		
	const moveRoll = () => {
		if (!turnOver) {
		if (turnIndex === -1) {
			let temp = users;
			temp[0].turn = true;
			setUsers(temp);
			turnIndex = 0
			users[0].highlighted = true;
			setDisplay(Grad({level: 'start'}))
		} else {

			rolls = 0;
			clickable = true;			
			turn = users[turnIndex];
			let temp;
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
		}
	}
};
	
	const movePiece = (temp) => {
		let currentCell = temp.find(cell => cell.pieces.includes(turn.color));
		currentCell.pieces[turnIndex] = null;
		let newCell = currentCell.id + roll;
		if (newCell > temp.length - 1) { newCell = newCell - temp.length; }
		temp[newCell].pieces[turnIndex] = turn.color;
		displayCell(temp, newCell);
		return temp;
	}
	
	const nextTurn = () => {
		let  next = users;
		next[turnIndex].turn = false;
//		if (turnIndex === 0) {
//			next[0].highlighted = false;
//		} else {
//			next[turnIndex - 1].highlighted = false;
//		}
		if (turnIndex === 5) {
			turnIndex = 0;
		} else {
			turnIndex++;
		}
		next[turnIndex].turn = true;
		setUsers(next);
		setTurnOver(false);
		forceRender();
	}
	
	const goUp = () => {
		if (turnIndex !== -1 && !turnOver) {
			let tempL = lower;
			let tempM = middle;
			let tempU = upper;
			let tempO = users;

			if (turn.level === 'lower') {
				tempO[turnIndex].level = 'middle';
				setUsers(tempO);
				tempM[0].pieces[turnIndex] = turn.color;
				setMiddle(tempM);
				let current = tempL.find(x => x.pieces.includes(turn.color));
				current.pieces[turnIndex] = null;
				setLower(tempL)
				setDisplay(Grad({level: 'middleStart'}))
			} else if (turn.level === 'middle') {
				tempO[turnIndex].level = 'upper';
				setUsers(tempO);
				tempU[0].pieces[turnIndex] = turn.color;
				setUpper(tempU);
				let current = tempM.find(x => x.pieces.includes(turn.color));
				current.pieces[turnIndex] = null;
				setMiddle(tempM)
				setDisplay(Grad({level: 'upperStart'}))
			}
			forceRender();
		}
	}
	

	//Buying Properties
	
	const creditProperty = (color, price) => {
		let props = turn.props;
		if (turn.color !== color && turn.props.length < 3 && props.findIndex(x => x.color === color) === -1) {
			let buyer = users.findIndex(x => x.color === turn.color)
			let seller = users.findIndex(x => x.color === color);
			users[buyer].credit += price;
			users[seller].bank += price;
			displayProp(color, price);
		}
		setTurnOver(true);
		forceRender();

	}	
	const cashProperty = (color, price) => {
		if (turn.bank >= price) {
			let props = turn.props;
			if (turn.color !== color && turn.props.length < 3 && props.findIndex(x => x.color === color) === -1) {
				let buyer = users.findIndex(x => x.color === turn.color)
				let seller = users.findIndex(x => x.color === color);
				users[buyer].bank -= price;
				users[seller].bank += price;
				displayProp(color, price);
			}
			setTurnOver(true);
			forceRender();
		}
	}
	
	const displayProp = (color, price) => {
		turn.props = [...turn.props, {color: color, value: price}];
	}
	
	//Stock Exchange
//	
//	const stockRoll = () => {
//		if (rolls < 3){
//			let roll01 = Math.floor(Math.random() * 6) + 1;
//			let roll02 = Math.floor(Math.random() * 6) + 1;
//			document.querySelector('.stockD01').innerHTML = `<img src='/assets/dice-0${roll01}.png' />`;
//			document.querySelector('.stockD02').innerHTML = `<img src='/assets/dice-0${roll02}.png' />`;
//			doubleRolld = roll01 + roll02;
//			rolls++;
//		}
//	}
	
	const sellStock = () => {
		if (clickable) {
			let bet = document.querySelector('#stockInput').value;
			doubleRolld = document.querySelector('#stockRoll').value;
			let winnings = stockVal(bet) - bet;
			turn.bank += winnings
			clickable = false;
			setTurnOver(true);
			forceRender();
		}
	}
	
	const stockVal = (bet) => {
		if (doubleRolld === '2') {
			return 0;
		} else if (doubleRolld === '3') {
			return 50;
		} else if (doubleRolld === '4') {
			return round(Math.floor(bet * 0.25));
		} else if (doubleRolld === '5') {
			return round(Math.floor(bet * 0.5));
		} else if (doubleRolld === '6') {
			return round(Math.floor(bet * 0.75));
		} else if (doubleRolld === '7') {
			return bet;
		} else if (doubleRolld === '8') {
			return bet * 1.5;
		} else if (doubleRolld === '9') {
			return bet * 2;
		} else if (doubleRolld === '10') {
			return bet * 3;
		} else if (doubleRolld === '11') {
			return bet * 6;
		} else {
			return bet * 11;
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
	
	//SCHOOL and COUNTRY CLUB
	
	const buyDiploma = (price) => {
		if (turn.bank >= price) {
			turn.degree = 'uni';
			turn.bank = turn.bank - price;
			setTurnOver(true);
			forceRender();
		}
	}
	
	const buyMembership = (price) => {
		if (turn.bank >= price) {
			turn.degree = 'yatch';
			turn.bank = turn.bank - price;
			setTurnOver(true);
			forceRender();
		}
	}
	
	// GIFT FROM DAD
	
	const dadRoll = (multiplier) => {
		if (rolls === 0) {
			doubleRolld = document.getElementById('footballInput').value;
			turn.bank += round((doubleRolld * multiplier));
			rolls++;
			setTurnOver(true);
			forceRender();
		}
	}
	
	const dadClaim = (amount) => {
		if (clickable) {
			turn.bank += amount;
			setTurnOver(true);
			forceRender();
			clickable = false;
		}
	}
	
	//Lottery
	
	const lottery = (winner) => {
		if (clickable) {
			let bet = document.querySelector('#lottoBet').value;
			let players = document.querySelector('#lottoPlayers').value;
			users.find(x => x.color === winner).bank += bet * players;
			clickable = false;
			setTurnOver(true);
			forceRender();
		}
	}
	
	//RACETRACK
	
	const raceSub = (color) => {
		raceBet[color] = document.getElementById(`${color}Bet`).value;
		raceHorse[color] = document.getElementById(`${color}Horse`).value;
		
		users.find(x => x.color === color).bank -= raceBet[color];
		
		let para = `<p>$${raceBet[color]} on ${raceHorse[color]}</p>`;
		document.getElementById(`${color}Div`).innerHTML = para;
		forceRender();
	}
	
	const raceTrack = (color) => {
		if (!clickable){
			if (rolls < 3) {
				raceTrackLogic(color);
				rolls++;
				raceWinners.push(color);
				setTurnOver(true);
				forceRender();
			}
		}
	}
	
	const wasRolled = (color) => {
		let result = false;
		for (let i = 0; i < raceWinners.length; i++) {
			if (raceWinners[i] === color) {
				result = true;
			}
		}
		return result;
	}
	
	const raceTrackLogic = (color) => {
		let winner = users.find(x => x.color === color);
		let horse = raceHorse[color];
		let bet = raceBet[color];
		let logic = 0;
		if (!wasRolled(color)) {
			if (rolls === 0) {
				if (horse === '2' || horse === '12') {
					logic = 40;
				} else if (horse === '3' || horse === '11') {
					logic = 20;
				} else if (horse === '4' || horse === '10') {
					logic = 12;
				} else if (horse === '5' || horse === '9') {
					logic = 10;
				} else if (horse === '6' || horse === '8') {
					logic = 7;
				} else if (horse === '7') {
					logic = 6;
				}
			} else if (rolls === 1) {
				if (horse === '2' || horse === '12') {
					logic = 20;
				} else if (horse === '3' || horse === '11') {
					logic = 10;
				} else if (horse === '4' || horse === '10') {
					logic = 7;
				} else if (horse === '5' || horse === '9') {
					logic = 5;
				} else if (horse === '6' || horse === '8') {
					logic = 4;
				} else if (horse === '7') {
					logic = 3;
				}
			} else if (rolls === 2){
				if (horse === '2' || horse === '12') {
					logic = 10;
				} else if (horse === '3' || horse === '11') {
					logic = 5;
				} else if (horse === '4' || horse === '10') {
					logic = 4;
				} else if (horse === '5' || horse === '9') {
					logic = 3;
				} else if (horse === '6' || horse === '8') {
					logic = 2;
				} else if (horse === '7') {
					logic = 1
				}
			}
			winner.bank += parseInt(bet) + logic * parseInt(bet);
		}
	}
	
	//Collect You MONAYYYY $$$$$$
	
	const collectMoney = (amount) => {
		if(landed <= 1) { 
			if (clickable) {
				turn.bank += amount;
				forceRender();
			}
			if (landed === 1) {
				setTurnOver(true);
			}
			
			landed++;
		} 
	}
	
	//WELFARE PAYMENT
	
	const payWelfare = (amount) => {
		if (clickable) {
			let die = document.getElementById('welfareInput').value;
			turn.bank -= round(parseInt(die) * amount);
			setTurnOver(true);
			clickable = false;
			if (turn.bank < 0) {
				goBankrupt(turn.color);
			}
			forceRender();
		}
	}
	
	//WEDDING
	
	const weddingBtn = () => {
		if(clickable) {
			goUp();
			setTurnOver(true);
			clickable = false;	
		}
	}
	
	// TAXES :(
	
	const payTaxes = (amount) => {
		if (clickable) {
			let dice = document.getElementById('taxesInput').value
			turn.bank -= amount * parseInt(dice);
			setTurnOver(true);
			clickable = false;
			if (turn.bank < 0) {
				goBankrupt(turn.color);
			}
			forceRender();
		}
	}
	
	//CREDIT DUE
	
	const payCredit = () => {
		if (clickable) {
			let amount = round(turn.credit * 1.1);
			turn.bank -= amount;
			turn.credit = 0;
			setTurnOver(true);
			clickable = false;
			if (turn.bank < 0) {
				goBankrupt(turn.color);
			}
			forceRender();
		}
	}
	
	//DIVORCE!
	
	const getDivorced = (amount) => {
		if (clickable) {
			let dice = document.getElementById('divorceInput').value;
			turn.bank -= parseInt(dice) * amount;
			if (turn.bank < 0) {
				goBankrupt(turn.color)
			} else {
					let tempL = lower;
				let tempM = middle;
				let tempU = upper;
				if (turn.level === 'middle') {
					let ind = tempM.findIndex(x => x.pieces.includes(turn.color))
					tempM[ind].pieces[turnIndex] = null;
					tempL[0].pieces[turnIndex] = turn.color;
				} else if (turn.level === 'upper') {
					let ind = tempU.findIndex(x => x.pieces.includes(turn.color))
					tempU[ind].pieces[turnIndex] = null;
					tempM[0].pieces[turnIndex] = turn.color;
				}
			}
			clickable = false;
			setTurnOver(true);
			forceRender();
		}
	}
	
	//ASCOT
	
	const ascot = (amount) => {
		if (clickable) {
			turn.bank += amount;
			clickable = false;
			setTurnOver(true);
			forceRender();
		}
	}
	
	// BANKRUPT
	
	const goBankrupt = (color) => {
		let tempL = lower;
		let tempM = middle;
		let tempU = upper;
		if (turn.level === 'lower') {
			let ind = tempL.findIndex(x => x.pieces.includes(turn.color))
			tempL[ind].pieces[turnIndex] = null;
			tempL[0].pieces[turnIndex] = turn.color;
		} else if (turn.level === 'middle') {
			let ind = tempM.findIndex(x => x.pieces.includes(turn.color))
			tempM[ind].pieces[turnIndex] = null;
			tempL[0].pieces[turnIndex] = turn.color;
			
		} else if (turn.level === 'upper') {
			let ind = tempU.findIndex(x => x.pieces.includes(turn.color))
			tempU[ind].pieces[turnIndex] = null;
			tempL[0].pieces[turnIndex] = turn.color;
		}
		turn = {
				color: turn.color,
				username: turn.username,
				level: 'lower',
				bank: 200,
				credit: 0,
				props: [],
				degree: null,
				highlighted: false,
				turn: true
			}
		users[turnIndex] = turn;
		setTurnOver(true);
		forceRender();
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
		if (type === 'start' || type === 'middleStart' || type === 'upperStart') {
			setDisplay(Grad({level: type}));
		} else	if (type === 'red' || type === 'blue' || type === 'green' || type === 'black' || type === 'brown' || type === 'olive'){
			setDisplay(Property({type: type, price: price, color: level[id].color, creditClick: creditProperty, cashClick: cashProperty}));
		} else if (type === 'stock') {
			setDisplay(StockExchange({roll: null, sell: sellStock}));
		} else if (type === 'nightSchool') {
			setDisplay(NightSchool({type: turn.level, click: buyDiploma}));
		} else if (type === 'dad' || type === 'uncle' || type === 'footballLower' || type === 'footballMiddle' || type === 'bingo') {
			setDisplay(Dad({type: type, roll: dadRoll, claim: dadClaim}))
		} else if (type === 'lottery') {
			setDisplay(Lottery({claim: lottery}));
		} else if (type === 'racetrack') {
			setDisplay(RaceTrack({win: raceTrack, submitBet: raceSub, start: () => {clickable = false;}}));
		} else if (type === 'country') {
			setDisplay(YatchClub({type: turn.level, click: buyMembership}))
		} else if (type === 'collect') {
			setDisplay(Collect({type: turn.level, click: collectMoney}))
		} else if (type === 'welfare' || type ==='ei') {
			setDisplay(Welfare({type: type, click: payWelfare}))
		} else if (type === 'wedding') {
			setDisplay(Wedding({type: turn.level, click: weddingBtn}))
		} else if (type === 'taxes') {
			setDisplay(Taxes({type: turn.level, click: payTaxes}))
		} else if (type === 'credit') {
			setDisplay(Credit({amount: round(turn.credit * 1.1), color: turn.color, pay: payCredit, bankrupt: goBankrupt}))
		} else if (type === 'funeral') {
			setDisplay(Funeral({click: dadClaim}))
		} else if (type === 'divorceMiddle' || type === 'divorceUpper') {
			setDisplay(Divorce({type, click: getDivorced}))
		} else if (type === 'ascot') {
			setDisplay(Ascot({click: ascot}))
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
					<div id='roll'>
						<button id='goUpBtn'onClick={goUp}>GO UP</button>
						<button id='moveBtn' onClick={moveRoll}>MOVE</button>
						<button id='nextTurnBtn' onClick={nextTurn}>END TURN</button>
					</div>
					
				</div>
			</div>
    </div>
  );
}


export default App;
