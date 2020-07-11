import React from 'react';

const mathOperator =()=>{

      const operator=["cos","sin","tan","log"]
	return(
		<div className="operatorDiv">
			{
				operator.map((num,i)=>{
							
				  return(
					<button key={i} valuee={num}>{num}</button>)		
			    })
			}
		</div>
		);
}

export default mathOperator;