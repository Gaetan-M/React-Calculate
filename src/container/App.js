import React,{Component} from 'react';
import ButtonCard from '../components/ButtonCard/ButtonCard';
import Newpage from '../components/newPage/Newpage';
import HOC from "../components/hoc/HOC.js";
import mathOperator from '../components/mathemeticalOperator/mathOperator.js';
import './app.css';
class App extends Component
{
	constructor(props)
	{
		super(props)
		this.state={
     text:'',
     enable:false,
     enableOperator:false,
     count:0,
     radian:0
		}
		this.printButton=this.printButton.bind(this)
		
	}
onClick(e){
  this.setState({text:this.state.text})
}
printButton(valeur){
    switch(valeur)
    {
    	case "=":
    		{ console.log(valeur);return this.setState({text:eval(this.state.text)})}
    	break;
    	case "CE":
    		return this.setState({text:''})
        break;
      case "sin":
        return  this.setState({text:Math.sin(Number(this.state.text)*Math.PI/180)})     
      break;
      case "cos":
         return  this.setState({text:Math.cos(Number(this.state.text)*Math.PI/180)})
      break;
      case "tan":
       return  this.setState({text:Math.tan(Number(this.state.text)*Math.PI/180)})     
      default:
        return this.setState({text:this.state.text+valeur})
    }
}
	render(){
console.log(this.state.text)

		return(
<div className="cal">
{(!this.state.enable)?
  <HOC><h1>Calculator</h1>
  <div ></div>
  <input type="text" id="inputBox" onChange={()=>this.onInputChange} value={this.state.text}/>
  <ButtonCard printButton={this.printButton} />
  <input type="button" value="Nextpage" onClick={()=>this.setState({enable:true})}/>
  </HOC>:
  <Newpage />
}
</div>
			);
	}
} 

export default App;