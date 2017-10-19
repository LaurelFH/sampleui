import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


/*this will be th emenu where people can add their commoments-- or should I switch with newcopmomenu*/
export default class Sidebarmenunew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Your Components" fullWidth={true}           onClick={this.handleToggle}
        />
        <Drawer width={400} open={this.state.open}>
        <AppBar title="Component Bench" />
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
           <MenuItem>Component 3</MenuItem>
          <MenuItem>Component 4</MenuItem>
        </Drawer>
      </div>
    );
  }
}