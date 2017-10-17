import React from "react";
import "./fissionButton.css";
import {Button, Icon} from 'react-materialize'

const FissionButton= () => (
	<Button waves='light' label="Full width" fullWidth={true}>
		<Icon>thumb_up</Icon>
	</Button>
)


export default FissionButton;