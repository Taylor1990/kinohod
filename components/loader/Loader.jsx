import React, { Component } from 'react'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import CircularProgress from 'material-ui/CircularProgress'

import styles from './Loader.scss'
import {config} from './Loader.config'

class Loader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Dialog open = {this.props.data.loading}
                    overlayStyle = {config.styles.Dialog.overlay}
                    contentClassName = {styles.dialog_container}
                    contentStyle = {config.styles.Dialog.content}>
                <div className = {styles.circular}>
                    <CircularProgress size = {80}/>
                </div>
            </Dialog>
        )
    }
}

function select(state){
    return {
        data: state.app
    }
}

export default connect(select)(Loader)
