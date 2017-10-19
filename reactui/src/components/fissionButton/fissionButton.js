import React, { Component } from 'react';
import "./fissionButton.css";
import RaisedButton from 'material-ui/RaisedButton';

class FissionButton extends Component{

render(){
	return(

<RaisedButton waves='light' label="Full width" fullWidth={true}>
		 Fuse Your Work
	</RaisedButton>

		);

	}

} 

export default FissionButton;