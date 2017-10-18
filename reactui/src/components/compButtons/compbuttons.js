
import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Fade from 'react-bootstrap/lib/Fade';


class ButtonExample extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button bsStyle = "danger" onClick={()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Fade in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ButtonExample;