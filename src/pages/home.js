import React, { Component } from 'react'
import CSSModule from 'react-css-modules'
import styles from './home.scss'

class Home extends Component{
    render() {
        return(
            <div styleName="home">Home</div>
        )
    }
}

export default CSSModule(Home, styles)
