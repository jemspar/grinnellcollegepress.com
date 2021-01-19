import React from 'react'

import {Helmet} from 'react-helmet'
import {
  NavLink,
  Link,
  Switch,
  Route
} from 'react-router-dom'

// page data
import pageData from './data/page_data.yaml'

// Pages
import Page from './Page'
// --------
import Home from './pages/Home'
import Publications from './pages/Publications'

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

  handlePageChange(props) {
    this.setState({
      menuModalOpen: false,
      subtitle: props.subtitle
    });
  }

  render() {

    return(
      <>
        <Helmet>
          <title>{this.state.subtitle ?
          this.state.subtitle + " – Grinnell College Press" :
          "Grinnell College Press" }</title>
        </Helmet>

        <main>
          <h1 id="title">Grinnell College Press</h1>
          <button onClick={() => {this.toggleMenu()}}>
            Open Menu
          </button>
          <Switch>

            <Route exact path="/">
              <Page><Home /></Page>
            </Route>

            <Route exact path="/publications">
              <Page><Publications /></Page>
            </Route>

          </Switch>
        </main>

        <div id="menu_modal" className={this.state.menuModalOpen ? "active" : undefined}>
          <nav>
            {pageData.nav.map((link, index) => {
              let page = pageData.pages.find( element => element.url === link );
              // if the tabTitle is defined, use that. otherwise, use the title.
              // this allows the home page to be called 'Home' but also have no tab subtitle
              return(
                <NavLink to={link} onClick={() => {this.toggleMenu()}}>
                  {"navTitle" in page ? page.navTitle : page.title}
                </NavLink>
              )
            }
            )}
            <button onClick={() => {this.toggleMenu()}}>Close Menu</button>
          </nav>
        </div>

      </>

    )
  }
}

export default App;
