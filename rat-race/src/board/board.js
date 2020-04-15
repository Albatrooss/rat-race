import React from 'react';
import './board.css';
import Cell from '../cell/cell.js'

function Board({lower, middle, upper}) {
	return(
		<div className="board">
			<div className="lowerClass">
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[18]} />
					<Cell level='lower' onclick={onclick} cell={lower[19]} />
					<Cell level='lower' onclick={onclick} cell={lower[20]} />
					<Cell level='lower' onclick={onclick} cell={lower[21]} />
					<Cell level='lower' onclick={onclick} cell={lower[22]} />
					<Cell level='lower' onclick={onclick} cell={lower[23]} />
					<Cell level='lower' onclick={onclick} cell={lower[24]} />
					<Cell level='lower' onclick={onclick} cell={lower[25]} />
					<Cell level='lower' onclick={onclick} cell={lower[26]} />
					<Cell level='lower' onclick={onclick} cell={lower[27]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[17]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[28]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[16]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[29]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[15]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[30]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[14]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[31]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[13]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[32]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[12]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[33]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[11]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[34]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[10]} />
					<div className="lowerGap"></div>
					<Cell level='lower' onclick={onclick} cell={lower[35]} />
				</div>
				<div className="row">
					<Cell level='lower' onclick={onclick} cell={lower[9]} />
					<Cell level='lower' onclick={onclick} cell={lower[8]} />
					<Cell level='lower' onclick={onclick} cell={lower[7]} />
					<Cell level='lower' onclick={onclick} cell={lower[6]} />
					<Cell level='lower' onclick={onclick} cell={lower[5]} />
					<Cell level='lower' onclick={onclick} cell={lower[4]} />
					<Cell level='lower' onclick={onclick} cell={lower[3]} />
					<Cell level='lower' onclick={onclick} cell={lower[2]} />
					<Cell level='lower' onclick={onclick} cell={lower[1]} />
					<Cell level='lower' onclick={onclick} cell={lower[0]} />
				</div>
			</div>
			<div className="middleClass">
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[14]} />
					<Cell level='middle' onclick={onclick} cell={middle[15]} />
					<Cell level='middle' onclick={onclick} cell={middle[16]} />
					<Cell level='middle' onclick={onclick} cell={middle[17]} />
					<Cell level='middle' onclick={onclick} cell={middle[18]} />
					<Cell level='middle' onclick={onclick} cell={middle[19]} />
					<Cell level='middle' onclick={onclick} cell={middle[20]} />
					<Cell level='middle' onclick={onclick} cell={middle[21]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[13]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[22]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[12]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[23]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[11]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[24]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[10]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[25]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[9]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[26]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[8]} />
					<div className="middleGap"></div>
					<Cell level='middle' onclick={onclick} cell={middle[27]} />
				</div>
				<div className="row">
					<Cell level='middle' onclick={onclick} cell={middle[7]} />
					<Cell level='middle' onclick={onclick} cell={middle[6]} />
					<Cell level='middle' onclick={onclick} cell={middle[5]} />
					<Cell level='middle' onclick={onclick} cell={middle[4]} />
					<Cell level='middle' onclick={onclick} cell={middle[3]} />
					<Cell level='middle' onclick={onclick} cell={middle[2]} />
					<Cell level='middle' onclick={onclick} cell={middle[1]} />
					<Cell level='middle' onclick={onclick} cell={middle[0]} />
				</div>
			</div>
			<div className="upperClass">
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[10]} />
					<Cell level='upper' onclick={onclick} cell={upper[11]} />
					<Cell level='upper' onclick={onclick} cell={upper[12]} />
					<Cell level='upper' onclick={onclick} cell={upper[13]} />
					<Cell level='upper' onclick={onclick} cell={upper[14]} />
					<Cell level='upper' onclick={onclick} cell={upper[15]} />
				</div>
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[9]} />
					<div className="upperGap"></div>
					<Cell level='upper' onclick={onclick} cell={upper[16]} />
				</div>
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[8]} />
					<div className="upperGap"></div>
					<Cell level='upper' onclick={onclick} cell={upper[17]} />
				</div>
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[7]} />
					<div className="upperGap"></div>
					<Cell level='upper' onclick={onclick} cell={upper[18]} />
				</div>
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[6]} />
					<div className="upperGap"></div>
					<Cell level='upper' onclick={onclick} cell={upper[19]} />
				</div>
				<div className="row">
					<Cell level='upper' onclick={onclick} cell={upper[5]} />
					<Cell level='upper' onclick={onclick} cell={upper[4]} />
					<Cell level='upper' onclick={onclick} cell={upper[3]} />
					<Cell level='upper' onclick={onclick} cell={upper[2]} />
					<Cell level='upper' onclick={onclick} cell={upper[1]} />
					<Cell level='upper' onclick={onclick} cell={upper[0]} />
				</div>
			</div>
		</div>
	);
}

export default Board;