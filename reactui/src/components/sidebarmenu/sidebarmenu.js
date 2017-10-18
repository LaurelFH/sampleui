import React, { Component } from 'react';
import styles from './sidebarmenu.css';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';



// <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
//                         <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                        // <NavDropdown eventKey={1} title="Item 1">
                        //     <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        // </NavDropdown>
                        /*can add inverse below like usual outside of {styles.sidebar} inverse*/

// export default React.createClass( {

//     render: function() {
//         return <div id="sidebar-menu" className={styles.sideBarMenuContainer}>

//             <Navbar fluid className={styles.sidebar} >

//                 <Navbar.Header>
//                     <Navbar.Brand>
//                         <a href="/">Styling</a>
//                     </Navbar.Brand>
//                     <Navbar.Toggle />
//                 </Navbar.Header>

//                 <Navbar.Collapse>
//                     <Navbar.Text className={styles.userMenu}>
                        
//                     </Navbar.Text>
//                     <Nav>

//                         <NavItem eventKey={2}>Color</NavItem>
//                         <NavItem eventKey={3}>Font</NavItem>
//                         <NavItem eventKey={3}>Size</NavItem>
//                         <NavItem eventKey={3}>Blah</NavItem>
//                     </Nav>
//                 </Navbar.Collapse>

//             </Navbar>
//         </div>;
//     }
// });

 
class PopoverExampleAnimation extends Component{

    render(){

        return(
         <div id="sidebar-menu" className={styles.sideBarMenuContainer}>

            <Navbar fluid className={styles.sidebar} >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Styling</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className={styles.userMenu}>
                        
                    </Navbar.Text>
                    <Nav>

                        <NavItem eventKey={2}>Color</NavItem>
                        <NavItem eventKey={3}>Font</NavItem>
                        <NavItem eventKey={3}>Size</NavItem>
                        <NavItem eventKey={3}>Blah</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>

        );

    }
}


export default PopoverExampleAnimation;