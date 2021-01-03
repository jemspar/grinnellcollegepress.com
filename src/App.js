import React from 'react'
import ReactRouter from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuModalOpen: false,
      subtitle: false
    }
  }

  toggleMenu() {
    this.setState({menuModalOpen: !this.state.menuModalOpen});
  }


  render() {

    return(
      <>
        <div id="content">
          <h1 id="title">Grinnell College Press</h1>
          <button onClick={() => this.toggleMenu()}>
            Open Menu
          </button>
        </div>

        {this.state.menuModalOpen &&
          <div id="menu_modal">
            <nav>
              <a>Home</a>
              <a>Publications</a>
              <a>About</a>
              <button onClick={() => this.toggleMenu()}>Close Menu</button>
            </nav>
          </div>
        }
      </>

    )
  }
}

export default App;
