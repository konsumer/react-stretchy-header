import React, { Component } from 'react'

export class PageScroll extends Component {
  constructor (props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }

  onScroll (e) {
    this.props.onScroll(e.target.scrollingElement.scrollTop)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render () {
    return this.props.children
  }
}

export class StretchyHeader extends Component {
  constructor (props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
    this.state = {
      styles: {
        header: {
          minHeight: props.height,
          width: '100%',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundImage: `url(${props.image})`,
          position: 'absolute',
          top: 0,
          left: 0
        }
      },
      imageHeight: props.height
    }
  }

  onScroll (scrollTop) {
    const header = { ...this.state.styles.header }
    if (scrollTop <= 0) {
      header.height =
        (Math.abs(scrollTop) / this.state.imageHeight + 1) *
        this.state.imageHeight
      header.transform = `translateY(${scrollTop}px)`
    }
    this.setState({ styles: { ...this.state.styles, header } })
  }

  render () {
    return (
      <PageScroll onScroll={this.onScroll}>
        <div style={{ WebkitTransform: 'translate3d(0,0,0)' }}>
          <div style={this.state.styles.header} />
          <div style={{ height: this.state.imageHeight }} />
          {this.props.children}
        </div>
      </PageScroll>
    )
  }
}

export default StretchyHeader
