import React from 'react'

import {Helmet} from 'react-helmet'
import {
  NavLink,
  Link,
  Switch,
  Route
} from 'react-router-dom'

// page data
import pageData from './pages/page_data.yaml'

import Page from './Page'

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

        <div id="content">
          <h1 id="title">Grinnell College Press</h1>
          <button onClick={() => {this.toggleMenu()}}>
            Open Menu
          </button>
          <Switch>
            {pageData.pages.map((page, index) =>
              <Route
              path={page.url}>
                <Page page={page}
                onPageChange={(pageInfo) => {this.handlePageChange(pageInfo)} }/>
              </Route>
            )}
          </Switch>
        </div>

        <div id="menu_modal" className={this.state.menuModalOpen ? "active" : undefined}>
          <nav>
            {pageData.nav.map((link, index) => {
              let page = pageData.pages.find( element => element.url === link );
              // if the tabTitle is defined, use that. otherwise, use the title.
              // this allows the home page to be called 'Home' but also have no tab subtitle
              return(
                <NavLink to={link}>
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
