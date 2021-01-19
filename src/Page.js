import React from 'react'

class Page extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.title != this.props.title) {
      this.props.onPageChange({
        subtitle: this.props.title
      });
    }
  }

  render() {
    return (
      <div id="content">
        {this.props.title &&
          <h1>{this.props.title}</h1>
        }
        {this.props.children}
      </div>
    )
  }


}

export default Page
