import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'
import TextField from 'material-ui/TextField'

import styles from './Search.scss'
import {config} from './search.config'

class Search extends Component{
    constructor(props) {
        super(props)

        this.state = {
            dataSource: ['Фильмы', 'Кинотеатры', 'Актеры', 'Режиссеры'],
            hintSearch: 'Фильм, кинотеатр, жанр, актер',
            searchContainerClasses: styles.search_container,
            valueSearch: '',
            showMarker: true,
            showCancel: false,
            showSuggestions: false
        }
    }

    onFocusSearch() {
        this.setState({
            hintSearch: '',
            searchContainerClasses: styles.search_container + ' ' + styles.search_container__focus,
            showMarker: false,
            showCancel: true,
            showSuggestions: true
        })
    }

    onBlurSearch() {
        if(this.state.valueSearch === ''){
            this.setState({
                hintSearch: 'Фильм, кинотеатр, жанр, актер',
                searchContainerClasses: styles.search_container,
                showCancel: false,
                showMarker: true,
                showSuggestions: false
            })
        }
    }

    onChangeSearch(e){
        this.setState({
            valueSearch: e.target.value
        })
    }

    onClickCancel(){
        this.setState({
            valueSearch : '',
            hintSearch: 'Фильм, кинотеатр, жанр, актер',
            searchContainerClasses: styles.search_container,
            showCancel: false,
            showMarker: true,
            showSuggestions: false
        })
    }

    render(){
        return(
            <div>
                <div className = {this.state.searchContainerClasses}>
                    <Icons icon = 'search' className = {styles.search_icon} />
                    <TextField id = 'search'
                        hintText = {this.state.hintSearch}
                        underlineShow = {false}
                        className = {styles.search_input}
                        hintStyle = {config.styles.TextField.hint}
                        inputStyle = {config.styles.TextField.input}
                        onFocus = {this.onFocusSearch.bind(this)}
                        onBlur = {this.onBlurSearch.bind(this)}
                        value = {this.state.valueSearch}
                        onChange = {this.onChangeSearch.bind(this)}/>
                    {this.state.showMarker ?
                        <div className = {styles.marker}/>
                    : ''}
                    {this.state.showCancel ?
                        <Icons icon = 'times'
                            size = 'large'
                            className = {styles.cancel}
                            onClick = {this.onClickCancel.bind(this)}/>
                    : ''}
                </div>
                {this.state.showSuggestions ?
                    <div className = {styles.suggestions}>
                    {this.state.dataSource.map((item) => {
                        return <div key = {item} className = {styles.suggest}>
                            {item}
                            <Icons icon = 'angle-right' size = 'large' className = {styles.right_icon}/>
                        </div>
                    })}
                </div>
                : ''}
            </div>
        )
    }
}

function select(state){
    return {
        data: state.user
    }
}

export default connect(select)(Search)
