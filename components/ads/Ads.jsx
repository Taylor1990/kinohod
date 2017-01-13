import React, {Component} from 'react'
import {connect} from 'react-redux'

import styles from './Ads.scss'

class Ads extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = {styles.ads_container}>
                
            </div>
        )
    }
}

function select(state){
    return {
        data: state.user
    }
}

export default connect(select)(Ads)
