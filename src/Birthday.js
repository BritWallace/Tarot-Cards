import React from "react";
import { ReactDOM } from "react";

import {useState} from 'react';

// const Birthday = () => {
//   const [value, setValue] = useState('');

//   const handleChange = event => {
//     const result = event.target.value.replace(/\D/g, '');

//     setValue(result);
//   };

//   console.log(value);
//   console.log(typeof value);
//   console.log(Number(value));

//   return (
//     <div>
//       <div>!Hello 123 World 456?___</div>
//       <input
//         type="text"
//         placeholder="Your fav number"
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };





class Birthday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A birthday was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label>
        Add your Birthday like this example: 08 24 2010
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default Birthday

// const element=<BirthdayComponent></BirthdayComponent>
// ReactDOM.render(element, document.getElementById("root"));


let addDigit = function(num) {
  while (num.toString().length >= 2) {    
      let str = num.toString();     
      let currentSum = 0;    
    
      for (const digit of str) {      
          currentSum += Number(digit);}      
          num = currentSum;   }    
          return num; }; 
         console.log(addDigit(235)); //1






        //  class Birthday extends React.Component {
        //   constructor(props){
        //     super(props);
        //     this.State = {
        //       Id: ''
        //     };
        //   }
        
        //   changeHandler=e=> {
        //     this.setState({Id:e.target.value})
        //   }
        
        //   onCreateBirthday=()=> {
        
        //   }
        
        //   render() {
        //     return (
        //       <div>
        //         <h2>Add your Birthday like this example: 08 24 2010</h2>
        //         <form>
        //           <p>
        //             <label>Birthday ID : <input type="text" name="Id" 
        //             value={this.state.Id} onChange={this.changeHandler}></input></label>
        //           </p>
        //         </form>
        //         <button onClick={this.onCreateBirthday}>Add Birthday</button>
        //       </div>
        //     )
        //   }
        
        
        // }
        