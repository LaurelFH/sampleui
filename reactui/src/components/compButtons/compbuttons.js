
import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
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
        <ButtonGroup vertical block bsStyle = "danger" onClick={()=> this.setState({ open: !this.state.open })}>
          Choose your Component
        </ButtonGroup>
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