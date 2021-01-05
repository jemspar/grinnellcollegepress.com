import React from 'react'

class Page extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug != this.props.page.slug) {
      // this.props.onPageChange(this.props.page.title);
    }
  }

  render() {
    // const Content = require("./pages/" + this.props.page.content);

    return(
      <>
        {this.props.page.title &&
          <h1>{this.props.page.title}</h1>
        }
        {// <Content />
        }
      </>
    )
  }


}

export default Page
