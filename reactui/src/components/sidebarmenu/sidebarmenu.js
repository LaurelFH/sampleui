import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
//import RaisedButton from 'material-ui/RaisedButton';
import Button from 'react-materialize/lib/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class PopoverExampleAnimation extends React.Component {


 constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
    	<MuiThemeProvider>
      <div>
        <Button
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} opensecondary={true} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default PopoverExampleAnimation;