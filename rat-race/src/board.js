export default function initializeBoard() {
	let id = 0;
	let lower = [
		{
			type: 'start',
			color: 'pink',
			text: 'GRADUTAION DAY'
		},
		{
			type: 'red',
			color: '#FF5151',
			text: 'RED PROPERTY $100',
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $100'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE',
		},
		{
			type: 'nightSchool',
			color: '#F7E911',
			text: 'NIGHT SCHOOL'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $100'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $100'
		},
		{
			type: 'dad',
			color: 'yellow',
			text: 'GIFT FROM DAD $100'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $100'
		},
		{
			type: 'lottery',
			color: 'pink',
			text: 'LOTTERY'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $100'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $100'
		},
		{
			type: 'footballLower',
			color: 'yellow',
			text: 'FOOTBALL WINNINGS $20x DICE'
		},
		{
			type: 'red',
			color: '#FF5151',
			text: 'RED PROPERTY $100'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		{
			type: 'country',
			color: '#CBE182',
			text: 'COUNTRY CLUB'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $100'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $100'
		},
		{
			type: 'collect200',
			color: '#FFC732',
			text: 'COLLECT $200'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $100'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE'
		},
		{
			type: 'ei',
			color: '#F8E73E',
			text: 'EMPLOYMENT INSURANCE $10x DIE'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $100'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $100'
		},
		{
			type: 'wedding',
			color: '#FFF001',
			text: 'SOCIETY WEDDING'
		},
		{
			type: 'red',
			color: '#F14949',
			text: 'RED PROPERTY $100'
		},
		{
			type: 'taxes',
			color: '#EADE51',
			text: 'TAXES DUE $10x DICE'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $100'
		},{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $100'
		},
		{
			type: 'bingo',
			color: 'yellow',
			text: 'BINGO! COLLECT $100'
		},
		{
			type: 'credit',
			color: '#94E663',
			text: 'CREDIT DUE'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $100'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $100'
		},
		{
			type: 'funeral',
			color: '#9B64A4',
			text: 'FUNERAL MISS A TURN'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		
	].reduce((acc, obj) => {
		acc.push({
			id: id++,
			type: obj.type,
			color: obj.color,
			text: obj.text,
			pieces: [null, null, null, null, null, null]
		});
		return acc;
	}, []);
	id = 0;
	let middle = [
		{
			type: 'middleStart',
			color: 'pink',
			text: 'ENTER MIDDLE CLASS'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $500'
		},
		{
			type: 'footballMiddle',
			color: 'yellow',
			text: 'FOOTBALL WINNINGS $100x dice'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $500'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $500'
		},
		{
			type: 'divorceMiddle',
			color: '#FAD6C5',
			text: 'DIVORCE $100x dice'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $500'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $500'
		},
		{
			type: 'welfareMiddle',
			color: '#F8E73E',
			text: 'WELFARE PAYMENT $50x dice'
		},
		{
			type: 'nightSchool',
			color: '#F7E911',
			text: 'UNIVERSITY DEGREE'
		},
		{
			type: 'red',
			color: '#F14949',
			text: 'RED PROPERTY $500'
		},
		{
			type: 'ascot',
			color: 'yellow',
			text: 'DOUBLES $1000 EVENS $200 ODDS $50'
		},
		{
			type: 'collect1k',
			color: '#FFC732',
			text: 'COLLECT $1000'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $500'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE'
		},
		{
			type: 'yatch',
			color: '#CBE182',
			text: 'YACHT CLUB'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $500'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $500'
		},
		{
			type: 'taxesMiddle',
			color: '#EADE51',
			text: 'TAXES DUE'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $500'
		},
		{
			type: 'wedding',
			color: '#FFF001',
			text: 'SOCIETY WEDDING'
		},
		{
			type: 'red',
			color: '#F14949',
			text: 'RED PROPERTY $500'
		},
		{
			type: 'uncle',
			color: 'yellow',
			text: 'RICH UNCLE LEAVES $500'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $500'
		},
		{
			type: 'credit',
			color: '#94E663',
			text: 'CREDIT DUE'
		},
	].reduce((acc, obj) => {
		acc.push({
			id: id++,
			type: obj.type,
			color: obj.color,
			text: obj.text,
			pieces: [null, null, null, null, null, null]
		});
		return acc;
	}, []);
	id=0;
	let upper = [
		{
			type: 'upperStart',
			color: 'pink',
			text: 'ENTER HIGH SCOIETY'
		},{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $3000'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $3000'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $3000'
		},
		{
			type: 'divorceUpper',
			color: '#FAD6C5',
			text: 'DIVORCE $1000x dice'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $3000'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $3000'
		},
		{
			type: 'racetrack',
			color: '#ABEAE8',
			text: 'RACETRACK'
		},
		{
			type: 'red',
			color: '#F14949',
			text: 'RED PROPERTY $3000'
		},
		{
			type: 'collect10k',
			color: '#FFC732',
			text: 'COLLECT $10,000'
		},
		{
			type: 'blue',
			color: '#497CF1',
			text: 'BLUE PROPERTY $3000'
		},
		{
			type: 'olive',
			color: '#9EC243',
			text: 'OLIVE PROPERTY $3000'
		},
		{
			type: 'stock',
			color: '#FFEBBD',
			text: 'STOCK EXCHANGE'
		},
		{
			type: 'brown',
			color: '#C68A09',
			text: 'BROWN PROPERTY $3000'
		},
		{
			type: 'taxesUpper',
			color: '#EADE51',
			text: 'TAXES $1000x dice'
		},
		{
			type: 'green',
			color: '#3AC414',
			text: 'GREEN PROPERTY $3000'
		},
		{
			type: 'black',
			color: '#d8d8d8',
			text: 'BLACK PROPERTY $3000'
		},
		{
			type: 'credit',
			color: '#94E663',
			text: 'CREDIT DUE'
		},
		{
			type: 'red',
			color: '#F14949',
			text: 'RED PROPERTY $3000'
		}
	].reduce((acc, obj) => {
		acc.push({
			id: id++,
			type: obj.type,
			color: obj.color,
			text: obj.text,
			pieces: [null, null, null, null, null, null]
		});
		return acc;
	}, []);
	
	let users = [
			{
			color: 'red',
			username: 'Albatrooss',
		},
		{
			color: 'blue',
			username: 'Caitlin',
		},
		{
			color: 'green',
			username: 'Andrew Robillard',
		},
		{
			color: 'black',
			username: 'Keela09',
		},
		{
			color: 'brown',
			username: 'Adam',
		},
		{
			color: 'olive',
			username: 'Hannah',
		}
	].reduce((acc, user) => {
		acc.push({
			color: user.color,
			username: user.username,
			level: 'lower',
			bank: 200,
			credit: 0,
			props: [],
			degree: null,
			highlighted: false,
			turn: false
		});
		return acc;
	}, []);
	
	const colors = ['red', 'blue', 'green', 'black', 'brown', 'olive'];
	lower[0].pieces = colors;
	return {lower: lower, middle: middle, upper: upper, users: users};
}