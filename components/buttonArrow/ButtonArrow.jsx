import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'

import styles from './ButtonArrow.scss'

class ButtonArrow extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = {styles.button_container} style = {
                    this.props.dir == 'left' ? {
                        left : 0
                    } : {
                        right: 0
                    }
                } onClick = {this.props.onClick}>
                  <Icons className = {styles.icon} icon = {this.props.dir == 'right' ? 'angle-right' : 'angle-left'} size = "large" />
            </div>
        )
    }
}

function select(state){
    return {

    }
}

export default connect(select)(ButtonArrow)
