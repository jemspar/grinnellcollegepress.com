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
      subtitle: props.subtitle,
      menuModalOpen: false
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
              path={"/" + page.slug}>
                <Page page={page}
                onPageChange={(pageInfo) => {this.handlePageChange(pageInfo)} }/>
              </Route>
            )}
          </Switch>
        </div>

        <div id="menu_modal" className={this.state.menuModalOpen ? "active" : undefined}>
          <nav>
            {pageData.pages.map((page, index) => {
              if(page.title) {
                return <NavLink key={index} to={"/" + page.slug}>{page.title}</NavLink>
              } else {
                return <NavLink key={index} exact to="/">Home</NavLink>
              }
            })}
            <button onClick={() => {this.toggleMenu()}}>Close Menu</button>
          </nav>
        </div>

      </>

    )
  }
}

export default App;
