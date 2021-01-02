import React from 'react'

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
              <ul>
                <li>Home</li>
                <li>Publications</li>
                <li>About</li>
              </ul>
            </nav>
            <button onClick={() => this.toggleMenu()}>Close Menu</button>
          </div>
        }
      </>

    )
  }
}

export default App;
