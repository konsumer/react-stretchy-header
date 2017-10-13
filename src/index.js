import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Props */
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
          position: 'absolute',
          top: 0,
          left: 0
        },
        ...props.style
      },
      imageHeight: props.image ? props.height : 0
    }

    if (props.image) {
      this.state.styles.header.backgroundImage = `url(${props.image})`
    }
  }

  onScroll (e) {
    const scrollTop = e.target.scrollingElement.scrollTop
    const header = { ...this.state.styles.header }
    if (scrollTop <= 0) {
      header.height =
        ((Math.abs(scrollTop) / this.state.imageHeight) + 1) *
        this.state.imageHeight
      header.transform = `translateY(${scrollTop}px)`
    }
    this.setState({ styles: { ...this.state.styles, header } })
    this.props.onScroll(scrollTop)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  render () {
    return (
      <div className={this.props.className} style={{ WebkitTransform: 'translate3d(0,0,0)' }}>
        <div style={this.state.styles.header} />
        <div style={{ height: this.state.imageHeight }} />
        {this.props.children}
      </div>
    )
  }
}

StretchyHeader.propTypes = {
  /** called with param scrollTop on scroll */
  onScroll: PropTypes.func,

  /** height of the image */
  height: PropTypes.number,

  /** URL of the image */
  image: PropTypes.string,

  /** className(s) for this component */
  className: PropTypes.string
}

StretchyHeader.defaultProps = {
  onScroll: scrollTop => {},
  height: 300,
  className: 'StretchyHeader'
}

export default StretchyHeader
