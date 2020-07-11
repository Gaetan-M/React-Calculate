import React from 'react';
import './ButtonCard.css';


const ButtonCard=({printButton})=>{

	const number=["0","1","2","3","4","5","6","7","8","9"];

	const operator=["+","-","*","/",".","=","CE","cos","sin",'tan'];
	return(
		<div id="Button">
			<div id="numberDiv">
			{
				number.map((num,i)=>{
					return(
						<button key={i} value={num} className="number" onClick={()=>printButton(num)}>{num}</button>
						);     
				})
			}
			</div>
			<div id="operatorDiv">
			{
				operator.map((num,i)=>{
					return(
						<button key={i} className="operator" value={operator[i]} onClick={()=>printButton(operator[i])}>{operator[i]}</button>
						);     
				})
			}
			</div>
		</div>
		);
     }
export default ButtonCard;