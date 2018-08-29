import React from 'react';
import Note from './Nodejs';

class List extends React.Component{
	contructor(props){
		super(props);
	this.state={mang: ['Nodejs','Androi','Ios']}
	}
  render(){
    return (
<div>
{this.state.mang.map((e, i) => <Note key={i}>{e}</Note>)}
</div>
   	)
  }
}

module.exports = List;
